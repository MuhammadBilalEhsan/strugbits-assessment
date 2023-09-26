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
    .max(20, "Maximum limit reached"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  avatar: Yup.string().required("Avatar is required"),
});

export const getCustomers = async (dispatch) => {
  try {
    const localCustomers = JSON.parse(getCustomersLocal() || "[]");

    if (!!localCustomers?.length) {
      dispatch(setCustomersRedux({ data: localCustomers }));
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

      dispatch(setCustomersRedux({ data }));
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
            width: "105px",
            height: "109px",
            borderRadius: "10px",
          }}
        />
      </Box>
    ),
    minWidth: "197px",
    maxWidth: "197px",
  },
  {
    name: "Customer ID",
    key: "id",
    sortFunction: (rows, isDescending) => {
      const data = globalSortFunction(rows, "id", isDescending);
      dispatch(setCustomersRedux({ data }));
    },
    minWidth: "271px",
    maxWidth: "271px",
  },
  {
    name: "Customer Name",
    key: "name",
    sortFunction: (rows, isDescending) => {
      const data = globalSortFunction(rows, "name", isDescending);
      dispatch(setCustomersRedux({ data }));
    },
    minWidth: "277px",
    maxWidth: "277px",
    style: { textDecoration: "underline", color: "primary.light" },
  },
  {
    name: "Email",
    key: "email",
    sortFunction: (rows, isDescending) => {
      const data = globalSortFunction(rows, "email", isDescending);
      dispatch(setCustomersRedux({ data }));
    },
    minWidth: "342px",
    maxWidth: "342px",
  },
];

// export const createCustomer = async (dispatch) => {
//   try {
//     console.log("createCustomer");
//     const data = JSON.parse(localStorage.getItem("customers"));
//     const largestId = data.reduce((maxId, currentItem) => {
//       return Math.max(maxId, currentItem.id);
//     }, 1);
//     const newCustomer = {
//       id: largestId + 1,
//       email: "user@example.com",
//       name: "Username" + " " + largestId + 1,
//     };
//     dispatch(createCustomerRedux(newCustomer));

//     localStorage.setItem("customers", JSON.stringify([...data, newCustomer]));
//   } catch (error) {
//     console.log("🚀error:", error);
//   }
// };
// export const updateCustomer = async (dispatch) => {
//   try {
//     console.log("updateCustomer");
//   } catch (error) {
//     console.log("🚀error:", error);
//   }
// };
// export const deleteCustomer = async (dispatch) => {
//   try {
//     console.log("deleteCustomer");
//   } catch (error) {
//     console.log("🚀error:", error);
//   }
// };
