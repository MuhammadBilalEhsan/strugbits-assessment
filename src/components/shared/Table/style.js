const row = { display: "flex", overflowX: "unset", borderRadius: "10px" };
const actionButton = {
  minWidth: "106px",
  width: "106px",
  height: "33px",
  borderRadius: "5px",
  boxShadow: "none",
  fontSize: "16px",
  textTransform: "capitalize",
  fontWeight: 600,
  "&:hover": {
    color: "#FFF",
  },
};
const styles = {
  main: {
    width: "100%",
    overflowX: "hidden",
  },
  table: {
    width: "100%",
    overflowX: "auto",
    "&::-webkit-scrollbar": {
      display: "block",
      height: "8px",
    },
    "&::-webkit-scrollbar-track": {
      borderRadius: "3px",
      background: (theme) => theme.palette.primary.light,
    },
    "&::-webkit-scrollbar-thumb": {
      borderRadius: "3px",
      background: (theme) => theme.palette.primary.main,
      "&:hover": {
        background: (theme) => theme.palette.primary.dark,
      },
    },
  },
  headRow: {
    ...row,
    backgroundColor: "primary.dim",
    mb: { xs: "20px", md: "28px", lg: "38px" },
    height: { xs: "42px", sm: "52px", lg: "60px" },
  },
  bodyRow: {
    ...row,
    backgroundColor: "#fff",
    mb: { xs: "12px", md: "20px", lg: "30px" },
    height: { xs: "73px", sm: "98px", lg: "124px" },
    boxShadow: "0px 3px 5px #8D8D8D1A",
  },
  actionColumn: {
    minWidth: "269px",
    maxWidth: "269px",
  },

  editButton: {
    ...actionButton,
    color: "primary.main",
    background: (theme) => theme.palette.primary.dim1,
    mr: "30px",
  },
  deleteButton: {
    ...actionButton,
    color: "error.main",
    background: (theme) => theme.palette.error.light,
    mr: "27px",
  },
  cell1: ({ colIndex, isLast, minWidth, maxWidth }) => ({
    fontWeight: 700,
    fontFamily: "Lato",
    display: "flex",
    alignItems: "center",
    backgroundColor: "inherit",
    borderRadius:
      !colIndex && !isLast ? "10px 0 0 10px" : isLast ? "0 10px 10px 0" : "",
    minWidth,
    maxWidth,
    color: "primary.main",
    fontSize: "20px",
  }),
  cell1Main: {
    ml: "7px",
    display: "flex",
    flexDirection: "column",
    cursor: "pointer",
    sortIcon: {
      width: "10px",
      height: "5px",
    },
  },
  bodyCell: ({ colIndex, isLast, minWidth, maxWidth, style }) => ({
    fontFamily: "Lato",
    fontSize: "18px",
    display: "flex",
    alignItems: "center",
    backgroundColor: "inherit",
    borderRadius:
      !colIndex && !isLast ? "10px 0 0 10px" : isLast ? "0 10px 10px 0" : "",
    minWidth,
    maxWidth,
    color: "secondary.dark",
    ...style,
  }),
};

export default styles;
