const drawerWidth = { xs: 240, lg: 300, xl: 400 };
const headerHeight = { xs: "80px", lg: "100px", xl: "150px" };

const styles = {
  drawerMain: {
    display: "flex",
    justifyContent: "center",
    mt: "48px",
  },
  drawerStyle: {
    boxSizing: "border-box",
    width: drawerWidth,
    border: "none",
    background: (theme) => theme.palette.primary.main,
    borderRadius: "0 20px 20px 0",
  },
  drawerLogo: {
    width: { xs: "180px", lg: "204px", xl: "244px" },
  },
  drawerList: {
    p: {
      xs: "90px 20px 48px 20px",
      lg: "115px 46px 48px 34px",
      xl: "123px 64px 48px 40px",
    },
    width: "100%",
  },
  drawerListMain: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    p: "19px 23px",
    background: "#043933",
    boxShadow: "0px 5px 25px #00000040",
    borderRadius: "10px",
    cursor: "pointer",
    icon: {
      width: { xs: "18px", lg: "24px", xl: "30px" },
      height: { xs: "18px", lg: "24px", xl: "30px" },
    },
    name: {
      color: "#fff",
      ml: { xs: "18px", sm: "24px", lg: "32px", xl: "41px" },
      fontSize: { xs: "14", lg: "20px", xl: "24px" },
      flexGrow: 1,
      textTransform: "uppercase",
    },
  },
  appBar: {
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
    main: { height: "100%", display: "flex", alignItems: "center" },
    icon: {
      width: "30px",
      height: "30px",
      color: "primary.main",
    },
    name: {
      color: "#000",
      fontSize: { xs: "24px", md: "32px", lg: "36px", xl: "40px" },
      fontWeight: 700,
      textTransform: "uppercase",
    },
  },
  nav: {
    width: { md: drawerWidth.xs },
    flexShrink: { md: 0 },
    background: "#fff",
  },
  component: {
    flexGrow: 1,
    mt: headerHeight,
    ml: {
      md: `${drawerWidth.xs}px`,
      lg: `${drawerWidth.lg}px`,
      xl: `${drawerWidth.xl}px`,
    },
    width: {
      xs: "100vw",
      md: `calc(100vw - ${drawerWidth.xs}px)`,
      lg: `calc(100vw - ${drawerWidth.lg}px)`,
      xl: `calc(100vw - ${drawerWidth.xl}px)`,
    },
  },
};
export default styles;
