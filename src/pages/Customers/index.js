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
import styles from "./style";

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
      resetForm();
      setFileName("");
      setOpen(false);
    },
  });

  const handleFileInput = (e) => {
    const file = e.currentTarget.files[0];
    const maxSize = 2097152; // 2MB in KBs
    const acceptedTypes = ["png", "jpg", "jpeg", "gif"];
    const type = file.type?.split("/")?.[1]?.toLowerCase();

    if (!acceptedTypes?.includes(type)) {
      toast.error(`Just ${acceptedTypes?.join(" ")} image types allowed.`);
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
  };

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
    <Box sx={styles.main}>
      <Button
        title={
          <>
            <Image src={plusIcon} sx={styles.addCustomerBtn.icon} />
            Add New Customer
          </>
        }
        onClick={() => setOpen(true)}
        sx={styles.addCustomerBtn}
      />
      <Table
        type="Customers"
        loading={loading}
        onEdit={handleEditClick}
        onDelete={(row) => setDeleteId(row?.id)}
        rows={customers}
        reFetcher={() => getCustomers(dispatch)}
        columns={columns(dispatch)}
      />

      {/* Create Update Modal */}
      <Modal isDarkBG open={open} onClose={handleClose}>
        <Box width="100%">
          <Box sx={styles.modal.main}>
            <Typography sx={styles.modal.title}>
              {isEdit ? "Edit " : "Add New "} Customer
            </Typography>
            <Image src={modalBackground} sx={styles.modal.background} />
          </Box>
          <Box sx={styles.modal.form}>
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

              <Box sx={styles.modal.uploadContainer}>
                <Box>
                  <Box
                    component="label"
                    htmlFor="avatar"
                    sx={styles.modal.uploader}
                  >
                    Upload Photo
                  </Box>
                  <Input
                    id="avatar"
                    name="avatar"
                    onChange={handleFileInput}
                    error={touched?.avatar && errors?.avatar}
                    type="file"
                    hidden
                  />
                </Box>
                <Box sx={styles.modal.file}>{fileName}</Box>
              </Box>
              <Button
                type="submit"
                title={`${isEdit ? "Edit" : "Add"} Customer`}
                sx={styles.modal.submitBtn}
              />
            </form>
          </Box>
        </Box>
      </Modal>

      {/* Delete Modal */}
      <Modal open={!!deleteId} onClose={handleDeleteClose}>
        <Box sx={styles.deleteModal.main}>
          <Image src={trash} sx={styles.deleteModal.icon} />
          <Typography sx={styles.deleteModal.title}>Are you sure?</Typography>
          <Typography sx={styles.deleteModal.text}>
            Do you really want to delete this customer?
            <br /> This process can not be undone.
          </Typography>
          <Box sx={styles.deleteModal.actions}>
            <Button
              color="secondary"
              title="CANCEL"
              onClick={handleDeleteClose}
              sx={styles.deleteModal.actionButtons}
            />
            <Button
              color="error"
              title="DELETE"
              onClick={handleDelete}
              sx={styles.deleteModal.actionButtons}
            />
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default Customers;
