import { Box } from "@mui/material";
import Image from "../../components/shared/Image";
import { axiosGET } from "../../lib/axios";
import { setCustomersRedux } from "../../store/actions";
import { globalSortFunction } from "../../utils";
import * as Yup from "yup";
import { getCustomersLocal, setCustomersLocal } from "../../utils/localStorage";

export const initialValues = {
  id: 0,
  avatar: "",
  email: "",
  name: "",
};

export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Customer name is required")
    .min(4, "At least 4 characters required")
    .max(20, "Maximum 20 characters allowed"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required")
    .max(35, "Maximum 35 characters allowed"),
  avatar: Yup.string().required("Avatar is required"),
});

export const getCustomers = async (dispatch, shouldLoad) => {
  try {
    if (shouldLoad) {
      dispatch(setCustomersRedux({ loading: true }));
    }

    const localCustomers = JSON.parse(getCustomersLocal() || "[]");

    if (!!localCustomers?.length) {
      // I'm wrapping this for show loading state
      setTimeout(() => {
        dispatch(setCustomersRedux({ data: localCustomers, loading: false }));
      }, 2000);
    } else {
      const res = await axiosGET("https://reqres.in/api/users?page=1");
      const data = res?.data?.data?.map(
        ({ id, first_name, last_name, email, avatar }) => ({
          id,
          email,
          avatar,
          name: `${first_name} ${last_name}`,
        })
      );

      setCustomersLocal(data);
      // I'm wrapping this for show loading state
      setTimeout(() => {
        dispatch(setCustomersRedux({ data, loading: false }));
      }, 2000);
    }
  } catch (error) {
    dispatch(setCustomersRedux({ error: error?.message, loading: false }));
  }
};

export const columns = (dispatch) => [
  {
    name: "",
    value: (row, col, index) => (
      <Box px="16px">
        <Image
          src={row?.avatar}
          sx={{
            width: { xs: "60px", sm: "80px", lg: "105px" },
            height: { xs: "60px", sm: "80px", lg: "109px" },
            objectFit: "cover",
            borderRadius: "10px",
          }}
        />
      </Box>
    ),
    minWidth: { xs: "100px", sm: "197px" },
    maxWidth: { xs: "100px", sm: "197px" },
  },
  {
    name: "Customer ID",
    key: "id",
    sortFunction: (rows, isDescending) => {
      const data = globalSortFunction(rows, "id", isDescending);
      dispatch(setCustomersRedux({ data }));
    },
    minWidth: { xs: "120px", sm: "271px" },
    maxWidth: { xs: "120px", sm: "271px" },
  },
  {
    name: "Customer Name",
    key: "name",
    sortFunction: (rows, isDescending) => {
      const data = globalSortFunction(rows, "name", isDescending);
      dispatch(setCustomersRedux({ data }));
    },
    minWidth: { xs: "150px", sm: "277px" },
    maxWidth: { xs: "150px", sm: "277px" },
    style: { textDecoration: "underline", color: "primary.light" },
  },
  {
    name: "Email",
    key: "email",
    sortFunction: (rows, isDescending) => {
      const data = globalSortFunction(rows, "email", isDescending);
      dispatch(setCustomersRedux({ data }));
    },
    minWidth: { xs: "215px", sm: "342px" },
    maxWidth: { xs: "215px", sm: "342px" },
  },
];
