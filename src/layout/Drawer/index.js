import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import MUI_Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import React, { useMemo, useState } from "react";
import logo from "../../assets/logo/white.png";
import Image from "../../components/shared/Image";
import Container from "../Container";
import { tabs } from "./helper";
import { HiMenu } from "react-icons/hi";

const drawerWidth = { xs: 240, lg: 300, xl: 400 };
const headerHeight = { xs: "80px", lg: "100px", xl: "150px" };

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

  // please update this code after install and use React Router DOM
  const pathname = window.location.pathname;

  const { name } = useMemo(
    () => tabs?.find((item) => item?.route === pathname),
    [pathname]
  );

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
            width: { xs: "180px", lg: "204px", xl: "244px" },
          }}
        />
      </Box>
      <Box
        sx={{
          p: {
            xs: "90px 20px 48px 20px",
            lg: "115px 46px 48px 34px",
            xl: "123px 64px 48px 40px",
          },
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
                width: { xs: "18px", lg: "24px", xl: "30px" },
                height: { xs: "18px", lg: "24px", xl: "30px" },
              }}
              alt="icon"
            />
            <Typography
              sx={{
                color: "#fff",
                ml: { xs: "18px", sm: "24px", lg: "32px", xl: "41px" },
                fontSize: { xs: "14", lg: "20px", xl: "24px" },
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

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{
          height: headerHeight,
          width: {
            md: `calc(100% - ${drawerWidth.xs}px)`,
            lg: `calc(100% - ${drawerWidth.lg}px)`,
            xl: `calc(100% - ${drawerWidth.xl}px)`,
          },
          ml: {
            md: `${drawerWidth.xs}px`,
            lg: `${drawerWidth.lg}px`,
            xl: `${drawerWidth.xl}px`,
          },
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
            sx={{ mr: 2, display: { md: "none" } }}
          >
            {/* <MenuIcon /> */}
            <Box
              component={HiMenu}
              sx={{
                width: "40px",
                height: "40px",
                color: "primary.main",
              }}
            />
          </IconButton>
          <Typography
            sx={{
              color: "#000",
              fontSize: "40px",
              fontWeight: 700,
              textTransform: "uppercase",
            }}
          >
            {name}
          </Typography>
        </Container>
      </AppBar>
      <Box
        component="nav"
        sx={{
          width: { md: drawerWidth.xs },
          flexShrink: { md: 0 },
          background: "#fff",
        }}
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
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": drawerStyle,
          }}
        >
          {drawer}
        </MUI_Drawer>
        <MUI_Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", md: "block" },
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
          width: {
            xs: `100%`,
            md: `calc(100vw - ${drawerWidth.xs}px)`,
            lg: `calc(100vw - ${drawerWidth.lg}px)`,
            xl: `calc(100vw - ${drawerWidth.xl}px)`,
          },
          overflow: "hidden",
        }}
      >
        <Container>{children}</Container>
      </Box>
    </Box>
  );
}

Drawer.propTypes = {
  window: PropTypes.func,
};

export default Drawer;
