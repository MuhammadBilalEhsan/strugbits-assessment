import { Box, Typography } from "@mui/material";
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
  error,
}) => {
  const errorMargin = error ? { mb: "6px" } : {};
  return (
    <>
      <Box
        component="input"
        id={id}
        name={name}
        type={type}
        hidden={hidden}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        accept=".png, .jpg, .jpeg, .gif"
        sx={{
          fontFamily: "Lato",
          fontSize: "18px",
          outline: "none",
          border: "1px solid",
          borderColor: error ? "error.main" : "#DCDBDD",
          borderRadius: "10px",
          width: "100%",
          height: "55px",
          px: "18px",

          "&:focus": {
            borderColor: `${error ? "error" : "primary"}.main`,
          },
          ...sx,
          ...errorMargin,
        }}
      />
      {!!error && (
        <Typography
          sx={{
            fontSize: "14px",
            color: "error.main",
            mb: type !== "file" ? "30px" : "",
            textDecoration: "none",
          }}
        >
          {error}
        </Typography>
      )}
    </>
  );
};

export default Input;
