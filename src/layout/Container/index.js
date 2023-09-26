import React from "react";
import Box from "@mui/material/Box";

const Container = ({ sx = {}, children, removedSpacing }) => {
  return (
    <Box
      sx={{
        maxWidth: "1492px", // "1372px"  ,
        width: "100%",
        mx: "auto",
        px: { xs: "15px", sm: "24px", md: "32px", lg: "44px", xl: "60px" },
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};

export default Container;
