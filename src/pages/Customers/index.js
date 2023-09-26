import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { useFormik } from "formik";
import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import modalBackground from "../../assets/backgrounds/create-update-modal.png";
import plusIcon from "../../assets/icons/plus.png";
import trash from "../../assets/icons/trash.png";
import Button from "../../components/shared/Button";
import Image from "../../components/shared/Image";
import Input from "../../components/shared/Input";
import Modal from "../../components/shared/Modal";
import Table from "../../components/shared/Table";
import {
  createCustomerRedux,
  deleteCustomerRedux,
  updateCustomerRedux,
} from "../../store/actions";
import {
  columns,
  getCustomers,
  initialValues,
  validationSchema,
} from "./helper";

const Customers = () => {
  const {
    data: customers,
    loading,
    error,
  } = useSelector((state) => state.customers);

  const [open, setOpen] = useState(false);
  const [fileName, setFileName] = useState("");
  const [deleteId, setDeleteId] = useState("");

  const dispatch = useDispatch();

  const {
    touched,
    errors,
    values,
    setFieldValue,
    handleReset,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: ({ id, name, email, avatar }, { resetForm }) => {
      const input = {
        name: name?.trim(),
        email: email?.trim(),
        avatar: avatar?.trim(),
      };

      if (isEdit) {
        dispatch(
          updateCustomerRedux({
            ...input,
            id,
          })
        );
      } else {
        const largestId = customers?.reduce((maxId, currentItem) => {
          return Math.max(maxId, currentItem.id);
        }, 1);
        dispatch(createCustomerRedux({ ...input, id: largestId + 1 }));
      }
      setOpen(false);
      resetForm();
    },
  });

  const isEdit = useMemo(() => !!values?.id, [values?.id]);

  const handleEditClick = (row) => {
    const { id, name, email, avatar } = row;
    setFileName(avatar);
    setFieldValue("id", id);
    setFieldValue("name", name);
    setFieldValue("email", email);
    setFieldValue("avatar", avatar);
    setOpen(true);
  };

  const handleClose = () => {
    handleReset();
    setFileName("");
    setOpen(false);
  };

  const handleDeleteClose = () => setDeleteId("");
  const handleDelete = () => {
    dispatch(
      deleteCustomerRedux({
        id: deleteId,
      })
    );
    handleDeleteClose();
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
        onClick={() => setOpen(true)}
        sx={{
          fontSize: "20px",
          width: "344px",
          height: "70px",
          background: (theme) => theme.palette.primary.gradient,
          mb: "76px",
          boxShadow: "none",
          borderRadius: "10px",
        }}
      />
      <Table
        type="Customers"
        loading={loading}
        onEdit={handleEditClick}
        onDelete={(row) => setDeleteId(row?.id)}
        rows={customers}
        columns={columns(dispatch)}
      />

      {/* Create Update Modal */}
      <Modal isDarkBG open={open} onClose={handleClose}>
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
              {isEdit ? "Edit " : "Add New "} Customer
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
            <form onSubmit={handleSubmit}>
              <Input
                placeholder="Customer Name"
                id="name"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={values.handleBlur}
                error={touched?.name && errors?.name}
                sx={{ mb: "30px" }}
              />
              <Input
                placeholder="Email"
                type="email"
                id="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                error={touched?.email && errors?.email}
                sx={{ mb: "30px" }}
              />

              <Box
                sx={{
                  mb: "55px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Box
                    component="label"
                    htmlFor="avatar"
                    sx={{
                      display: "block",
                      fontFamily: "Lato",
                      fontWeight: 600,
                      fontSize: "20px",
                      textDecoration: "underline",
                      color: "primary.light",
                      cursor: "pointer",
                      "&:hover": {
                        color: "primary.main",
                      },
                    }}
                  >
                    Upload Photo
                  </Box>
                  <Input
                    id="avatar"
                    name="avatar"
                    onChange={(e) => {
                      const file = e.currentTarget.files[0];
                      const maxSize = 2097152; // 2MB in KBs
                      const acceptedTypes = ["png", "jpg", "jpeg", "gif"];
                      const type = file.type?.split("/")?.[1]?.toLowerCase();

                      if (!acceptedTypes?.includes(type)) {
                        toast.error(
                          `Just ${acceptedTypes?.join(
                            " "
                          )} image types allowed.`
                        );
                      } else if (file.size > maxSize) {
                        toast.error("You can add image upto 2 mb");
                      } else {
                        let reader = new FileReader();
                        reader.readAsDataURL(file);
                        reader.onload = function () {
                          setFileName(file?.name);
                          setFieldValue("avatar", reader?.result);
                        };
                      }
                    }}
                    error={touched?.avatar && errors?.avatar}
                    type="file"
                    hidden
                  />
                </Box>
                <Box
                  sx={{
                    fontFamily: "Lato",
                    fontSize: "16px",
                    color: "#000",
                    ml: "22px",
                    textDecoration: "none",
                    fontWeight: 400,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    maxWidth: "65%",
                  }}
                >
                  {fileName}
                </Box>
              </Box>
              <Button
                type="submit"
                title={`${isEdit ? "Edit" : "Add"} Customer`}
                sx={{
                  boxShadow: "none",
                  background: (theme) => theme.palette.primary.gradient,
                }}
              />
            </form>
          </Box>
        </Box>
      </Modal>

      {/* Delete Modal */}
      <Modal open={!!deleteId} onClose={handleDeleteClose}>
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
              onClick={handleDeleteClose}
              sx={{
                flexGrow: 1,
                color: "#fff",
                fontSize: "18px",
              }}
            />
            <Button
              color="error"
              title="DELETE"
              onClick={handleDelete}
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
