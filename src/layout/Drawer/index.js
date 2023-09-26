import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import MUI_Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import React, { useState } from "react";
import logo from "../../assets/logo/white.png";
import Image from "../../components/shared/Image";
import Container from "../Container";
import { tabs } from "./helper";

const drawerWidth = 400;
const headerHeight = "150px";

const drawerStyle = {
  boxSizing: "border-box",
  width: drawerWidth,
  border: "none",
  background: (theme) => theme.palette.primary.main,
  borderRadius: "0 20px 20px 0",
};

function Drawer(props) {
  const { children } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box width="100%">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: "48px",
        }}
      >
        <Image
          src={logo}
          sx={{
            width: "244px",
          }}
        />
      </Box>
      <Box
        sx={{
          p: "123px 64px 48px 40px",
          width: "100%",
        }}
      >
        {tabs.map(({ name, route, icon }, index) => (
          <Box
            key={String(index)}
            // onClick={() => {
            // we can route with this code but we need to install react-router-dom first and a litle bit setup
            //   navigate.push(route);
            // }}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              p: "19px 23px",
              background: "#043933",
              boxShadow: "0px 5px 25px #00000040",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          >
            <Image
              src={icon}
              sx={{
                width: "30px",
                height: "30px",
              }}
              alt="icon"
            />
            <Typography
              sx={{
                color: "#fff",
                ml: "41px",
                fontSize: "24px",
                flexGrow: 1,
                textTransform: "uppercase",
              }}
            >
              {name}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );

  const container = false;
  // window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      {/* <CssBaseline /> */}
      <AppBar
        position="fixed"
        sx={{
          height: headerHeight,
          width: { lg: `calc(100% - ${drawerWidth}px)` },
          ml: { lg: `${drawerWidth}px` },
          background: "#fff",
          boxShadow: "0px 3px 15px #6B6B6B1A",
        }}
      >
        <Container
          sx={{ height: "100%", display: "flex", alignItems: "center" }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { lg: "none" } }}
          >
            {/* <MenuIcon /> */}
            <Box
              sx={{
                width: "40px",
                height: "40px",
                background: "green",
              }}
            ></Box>
          </IconButton>
          <Typography
            sx={{
              color: "#000",
              fontSize: "40px",
              fontWeight: 700,
              textTransform: "uppercase",
            }}
          >
            Customers
          </Typography>
        </Container>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { lg: drawerWidth }, flexShrink: { lg: 0 } }}
        aria-label="mailbox folders"
      >
        <MUI_Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", lg: "none" },
            "& .MuiDrawer-paper": drawerStyle,
          }}
        >
          {drawer}
        </MUI_Drawer>
        <MUI_Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", lg: "block" },
            "& .MuiDrawer-paper": drawerStyle,
          }}
          open
        >
          {drawer}
        </MUI_Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          pt: headerHeight,
          width: { lg: `calc(100% - ${drawerWidth}px)` },
          background: "#f3f3f3",
          // minHeight: `100vh`,
          overflow: "hidden",
          // minHeight: `calc(100vh - ${headerHeight})`,
        }}
      >
        {/* <Box
          sx={{
            width: "100%",
            height: "100%",
            overflow: "auto",
          }}
        > */}
        <Container>{children}</Container>
        {/* </Box> */}
      </Box>
    </Box>
  );
}

Drawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Drawer;
