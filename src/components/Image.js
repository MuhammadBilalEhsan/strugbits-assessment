import React from "react";
import Box from "@mui/material/Box";

const Image = ({ alt = "", src, sx = {}, onClick = () => {} }) => {
  return (
    <Box component="img" onClick={onClick} src={src} alt={alt} sx={sx}></Box>
  );
};

export default Image;
