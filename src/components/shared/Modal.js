import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import whiteCancelIcon from "../../assets/icons/cancel-white.png";
import darkCancelIcon from "../../assets/icons/cancel.png";
import Image from "./Image";

const Modal = ({
  open,
  onClose = () => {},

  isDarkBG,
  children,
}) => {
  return (
    open && (
      <Dialog
        open={open}
        onClose={onClose}
        fullWidth
        maxWidth="sm"
        sx={{
          "& .MuiDialog-paper": {
            borderRadius: "20px",
          },
        }}
      >
        <Image
          onClick={onClose}
          src={isDarkBG ? whiteCancelIcon : darkCancelIcon}
          sx={{
            width: "20px",
            height: "20px",
            position: "absolute",
            top: "29px",
            right: "30px",
            zIndex: 1,
            cursor: "pointer",
          }}
        />
        <DialogContent
          sx={{
            p: "0px",
          }}
        >
          {children}
        </DialogContent>
        {/* <DialogActions
          sx={{ display: "flex", justifyContent: "center", mb: 2 }}
        > */}
        {/* <Button
            onClick={onClose}
            title={"Okay"}
            variant="outlined"
            size="large"
            sx={{ borderRadius: "20px", width: "150px" }}
          /> */}
        {/* </DialogActions> */}
      </Dialog>
    )
  );
};

export default Modal;
