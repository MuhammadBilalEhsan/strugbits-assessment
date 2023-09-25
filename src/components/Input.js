import { Box } from "@mui/material";
import React from "react";

const voidFunction = () => {};

const Input = ({
  sx = {},
  value = "",
  onChange = voidFunction,
  onBlur = voidFunction,
  type = "text",
  placeholder = "",
  id = "",
  name = "",
  hidden = false,
}) => {
  return (
    <Box
      component="input"
      id={id}
      name={name}
      type={type}
      hidden={hidden}
      //   value={value}
      //   onChange={onChange}
      onBlur={onBlur}
      placeholder={placeholder}
      sx={{
        fontFamily: "Lato",
        fontSize: "18px",
        outline: "none",
        border: "1px solid #DCDBDD",
        borderRadius: "10px",
        width: "100%",
        height: "55px",
        px: "18px",
        "&:focus": {
          borderColor: "primary.main",
        },
        ...sx,
      }}
    />
  );
};

export default Input;
