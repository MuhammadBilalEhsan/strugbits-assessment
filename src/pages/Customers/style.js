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
      height: { xs: "100px", sm: "144px" },
      display: "flex",
      justifyContent: "center",
      alignItems: "end",
      position: "relative",
    },
    title: {
      fontFamily: "Recoleta",
      fontSize: { xs: "26px", sm: "40px" },
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
      p: { xs: "30px 24px 34px", sm: "57px 36px 67px" },
    },
    uploadContainer: {
      mb: { xs: "20px", sm: "55px" },
      display: "flex",
      alignItems: "center",
    },
    uploader: {
      display: "block",
      fontFamily: "Lato",
      fontWeight: 600,
      fontSize: { xs: "14px", sm: "20px" },
      textDecoration: "underline",
      color: "primary.light",
      cursor: "pointer",
      "&:hover": {
        color: "primary.main",
      },
    },
    file: {
      fontFamily: "Lato",
      fontSize: { xs: "12px", sm: "16px" },
      color: "#000",
      ml: "22px",
      textDecoration: "none",
      fontWeight: 400,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      maxWidth: "65%",
    },
    input: {
      height: { xs: "44px", sm: "55px" },
      fontSize: { xs: "16px", sm: "18px" },
      px: { xs: "16px", sm: "18px" },
      mb: { xs: "20px", sm: "30px" },
    },
    submitBtn: {
      boxShadow: "none",
      background: (theme) => theme.palette.primary.gradient,
      fontSize: { xs: "14px", sm: "18px" },
      height: { xs: "40px", sm: "55px" },
    },
  },
  deleteModal: {
    main: {
      width: "100%",
      p: { xs: "46px 24px 40px", sm: "93px 38px 80px" },
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      fontFamily: "Lato",
    },
    icon: {
      width: { xs: "60px", sm: "84px" },
      height: { xs: "60px", sm: "84px" },
      mb: { xs: "16px", sm: "26px" },
    },
    title: {
      fontWeight: 700,
      fontSize: { xs: "24px", sm: "30px" },
      mb: { xs: "14px", sm: "26px" },
    },
    text: {
      textAlign: "center",
      fontSize: { xs: "15px", sm: "24px" },
      mb: { xs: "30px", sm: "66px" },
    },
    actions: {
      width: "100%",
      display: "flex",
      gap: { xs: "24px", sm: "34px" },
    },
    actionButtons: {
      flexGrow: 1,
      fontSize: { xs: "14px", sm: "18px" },
      color: "#fff",
      height: { xs: "40px", sm: "55px" },
    },
  },
};

export default styles;
