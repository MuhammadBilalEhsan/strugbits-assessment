import React from "react";
import Box from "@mui/material/Box";

const Container = ({ sx = {}, children, removedSpacing }) => {
  return (
    <Box
      sx={{
        width: "100%",
        mx: "auto",
        minHeight: "100%",
      }}
    >
      <Box
        sx={{
          maxWidth: "1372px",
          mx: removedSpacing
            ? "0px"
            : { xs: "15px", sm: "24px", md: "32px", lg: "44px", xl: "60px" },
          ...sx,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Container;
