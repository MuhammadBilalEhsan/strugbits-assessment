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
import styles from "./style";

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
      <Box sx={styles.drawerMain}>
        <Image src={logo} sx={styles.drawerLogo} />
      </Box>
      <Box sx={styles.drawerList}>
        {tabs.map(({ name, route, icon }, index) => (
          <Box
            key={String(index)}
            // onClick={() => {
            // we can route with this code but we need to install react-router-dom first and a litle bit setup
            //   navigate.push(route);
            // }}
            sx={styles.drawerListMain}
          >
            <Image src={icon} sx={styles.drawerListMain.icon} alt="icon" />
            <Typography sx={styles.drawerListMain.name}>{name}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );

  const container = false;

  return (
    <Box display="flex">
      <AppBar position="fixed" sx={styles.appBar}>
        <Container sx={styles.appBar.main}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <Box component={HiMenu} sx={styles.appBar.icon} />
          </IconButton>
          <Typography sx={styles.appBar.name}>{name}</Typography>
        </Container>
      </AppBar>
      <Box component="nav" sx={styles.nav} aria-label="mailbox folders">
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
            "& .MuiDrawer-paper": styles.drawerStyle,
          }}
        >
          {drawer}
        </MUI_Drawer>
        <MUI_Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", md: "block" },
            "& .MuiDrawer-paper": styles.drawerStyle,
          }}
          open
        >
          {drawer}
        </MUI_Drawer>
      </Box>
      <Box sx={styles.component}>
        <Container>{children}</Container>
      </Box>
    </Box>
  );
}

Drawer.propTypes = {
  window: PropTypes.func,
};

export default Drawer;
