import React from "react";
import LoadingButton from "@mui/lab/LoadingButton";

const Button = ({
  title,
  variant = "contained",
  onClick = () => {},
  sx = {},
  size = "medium",
  color = "primary",
  type = "button",
  disabled,
}) => {
  return (
    <LoadingButton
      disabled={disabled}
      color={color}
      type={type}
      onClick={onClick}
      variant={variant}
      sx={{
        width: "100%",
        height: "55px",
        borderRadius: "10px",
        ...sx,
      }}
      size={size}
    >
      {title}
    </LoadingButton>
  );
};

export default Button;
