import React, { useEffect, useMemo, useState } from "react";
import Box from "@mui/material/Box";
import Container from "../../layout/Container";
import Modal from "../../components/Modal";
import { useDispatch, useSelector } from "react-redux";
import Table from "../../components/Table";
import Button from "../../components/Button";
import Image from "../../components/Image";
import plusIcon from "../../assets/icons/plus.png";
import trash from "../../assets/icons/trash.png";
import modalBackground from "../../assets/backgrounds/create-update-modal.png";
import {
  getCustomers,
  createCustomer,
  updateCustomer,
  deleteCustomer,
} from "./helper";
import { Typography } from "@mui/material";
import Input from "../../components/Input";

const initialValues = {
  id: "",
  companyId: "",
  name: "",
};
const columns = [
  {
    name: "",
    value: (row, col, index) => (
      <Box px="16px">
        <Image
          src={row?.avatar}
          sx={{
            width: "105px",
            width: "109px",
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
    minWidth: "271px",
    maxWidth: "271px",
  },
  {
    name: "Customer Name",
    value: (row, col, index) => {
      const { first_name, last_name, name } = row;
      return name || `${first_name} ${last_name}`;
    },
    minWidth: "277px",
    maxWidth: "277px",
    style: { textDecoration: "underline", color: "primary.light" },
  },
  {
    name: "Email",
    key: "email",
    minWidth: "342px",
    maxWidth: "342px",
  },
];

const Customers = () => {
  const {
    data: customers,
    loading,
    error,
  } = useSelector((state) => state.customers);

  const [open, setOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [modalLoading, setModalLoading] = useState(false);

  const [removingItem, setRemovingItem] = useState({});
  const [data, setData] = useState(initialValues);
  const { isEdit, isCreate } = useMemo(
    () => ({
      isEdit: !!data?.id,
      isCreate: Object.entries(data)?.length,
    }),
    [data]
  );

  const dispatch = useDispatch();

  const handleEditClick = (row) => {
    setData(row);
    setOpen(true);
  };
  const handleDeleteClick = (row) => {
    setRemovingItem(row);
    setOpen(true);
  };

  useEffect(() => {
    getCustomers(dispatch);
  }, []);

  return (
    <Box
      sx={{
        my: "47px",
        "&::-webkit-scrollbar": {
          display: "block",
          width: "8px",
        },
        "&::-webkit-scrollbar-track": {
          background: "#474747",
        },
        "&::-webkit-scrollbar-thumb": {
          borderRadius: "3px",
          background: "#222222",
          "&:hover": {
            background: "#000",
          },
        },
      }}
    >
      <Button
        title={
          <>
            <Image
              src={plusIcon}
              sx={{
                width: "20px",
                height: "20px",
                mr: "40px",
              }}
            />
            Add New Customer
          </>
        }
        // onClick={() => createCustomer(dispatch)}
        onClick={() => setOpen(true)}
        sx={{
          fontSize: "20px",
          width: "344px",
          height: "70px",
          background: (theme) => theme.palette.primary.gradient,
          mb: "76px",
          borderRadius: "10px",
        }}
      />
      <Table
        type="Customers"
        loading={loading}
        // onEdit={handleEditClick}
        // onDelete={handleDeleteClick}
        onEdit={() => setOpen(true)}
        onDelete={() => setDeleteOpen(true)}
        rows={customers}
        columns={columns}
      />

      {/* Create Update Modal */}
      <Modal isDarkBG open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            width: "100%",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "144px",
              display: "flex",
              justifyContent: "center",
              alignItems: "end",
              position: "relative",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Recoleta",
                fontSize: "40px",
                fontWeight: 600,
                zIndex: 1,
                color: "#fff",
                mb: "20px",
              }}
            >
              Add New User
            </Typography>
            <Image
              src={modalBackground}
              sx={{
                position: "absolute",
                width: "100%",
                height: "100%",
                zIndex: 0,
              }}
            />
          </Box>
          <Box
            sx={{
              background: "#f3f3f3",
              p: "57px 36px 67px",
            }}
          >
            <Input
              placeholder="Customer Name"
              name="customerName"
              sx={{ mb: "30px" }}
            />
            <Input
              placeholder="Email"
              type="email"
              name="email"
              sx={{ mb: "30px" }}
            />

            <Box
              component="label"
              htmlFor="uploader"
              sx={{
                display: "block",
                fontFamily: "Lato",
                fontWeight: 600,
                fontSize: "20px",
                textDecoration: "underline",
                color: "primary.light",
                mb: "55px",
                cursor: "pointer",
              }}
            >
              Upload Photo
              <Input id="uploader" name="uploader" type="file" hidden />
            </Box>
            <Button
              type="submit"
              title="Add Customer"
              sx={{
                background: (theme) => theme.palette.primary.gradient,
              }}
            />
          </Box>
        </Box>
      </Modal>

      {/* Delete Modal */}
      <Modal open={deleteOpen} onClose={() => setDeleteOpen(false)}>
        <Box
          sx={{
            width: "100%",
            p: "93px 38px 80px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            fontFamily: "Lato",
          }}
        >
          <Image
            src={trash}
            sx={{
              width: "84px",
              height: "84px",
              mb: "26px",
            }}
          />
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: "30px",
              mb: "26px",
            }}
          >
            Are you sure?
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              fontSize: "24px",
              mb: "66px",
            }}
          >
            Do you really want to delete this customer?
            <br /> This process can not be undone.
          </Typography>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              gap: "34px",
            }}
          >
            <Button
              color="secondary"
              title="CANCEL"
              onClick={() => setOpen(false)}
              sx={{
                flexGrow: 1,
                color: "#fff",
                fontSize: "18px",
              }}
            />
            <Button
              color="error"
              title="DELETE"
              sx={{
                flexGrow: 1,
                fontSize: "18px",
              }}
            />
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default Customers;
