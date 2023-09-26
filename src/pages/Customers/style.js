const styles = {
  main: {
    my: { xs: "18px", sm: "24px", lg: "34px", xl: "47px" },
  },
  addCustomerBtn: {
    icon: {
      width: { xs: "18px", xl: "20px" },
      height: { xs: "18px", xl: "20px" },
      mr: { xs: "18px", md: "24px", lg: "32px", xl: "40px" },
    },

    fontSize: { xs: "16px", lg: "20px" },
    width: { xs: "272px", lg: "344px" },
    height: { xs: "55px", lg: "70px" },
    background: (theme) => theme.palette.primary.gradient,
    mb: { xs: "24px", sm: "30px", lg: "46px", xl: "76px" },
    boxShadow: "none",
    borderRadius: "10px",
  },
  modal: {
    main: {
      width: "100%",
      height: "144px",
      display: "flex",
      justifyContent: "center",
      alignItems: "end",
      position: "relative",
    },
    title: {
      fontFamily: "Recoleta",
      fontSize: "40px",
      fontWeight: 600,
      zIndex: 1,
      color: "#fff",
      mb: "20px",
    },
    background: {
      position: "absolute",
      width: "100%",
      height: "100%",
      zIndex: 0,
    },
    form: {
      background: "#f3f3f3",
      p: "57px 36px 67px",
    },
    uploadContainer: {
      mb: "55px",
      display: "flex",
      alignItems: "center",
    },
    uploader: {
      display: "block",
      fontFamily: "Lato",
      fontWeight: 600,
      fontSize: "20px",
      textDecoration: "underline",
      color: "primary.light",
      cursor: "pointer",
      "&:hover": {
        color: "primary.main",
      },
    },
    file: {
      fontFamily: "Lato",
      fontSize: "16px",
      color: "#000",
      ml: "22px",
      textDecoration: "none",
      fontWeight: 400,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      maxWidth: "65%",
    },
    submitBtn: {
      boxShadow: "none",
      background: (theme) => theme.palette.primary.gradient,
    },
  },
  deleteModal: {
    main: {
      width: "100%",
      p: "93px 38px 80px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      fontFamily: "Lato",
    },
    icon: {
      width: "84px",
      height: "84px",
      mb: "26px",
    },
    title: {
      fontWeight: 700,
      fontSize: "30px",
      mb: "26px",
    },
    text: {
      textAlign: "center",
      fontSize: "24px",
      mb: "66px",
    },
    actions: {
      width: "100%",
      display: "flex",
      gap: "34px",
    },
    actionButtons: {
      flexGrow: 1,
      fontSize: "18px",
      color: "#fff",
    },
  },
};

export default styles;
