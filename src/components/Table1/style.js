const common = (minWidth) => ({
  minWidth,
  fontFamily: "Lato",
  // maxWidth: "200px",
  textAlign: "left",
  p: "10px 129px 10px 0",
});

const style = {
  table: {
    width: "100%",
    borderSpacing: 0,
    // overflowY: "auto",
    borderRadius: "8px 8px 0 0",
  },

  th: (minWidth, index) => ({
    ...common(minWidth),
    borderRadius: !index ? "10px 0 0 10px" : "0px",
    height: "60px",
    color: "#fff",
    backgroundColor: "primary.light",
    color: "primary.main",
    mb: "38px",
  }),
  td: ({ minWidth, index }) => ({
    ...common(minWidth),
    verticalAlign: "middle",
  }),

  noDataStyle: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  actionsWrapper: {
    display: "flex",
    gap: 2,
    justifyContent: "space-between",
  },
  actions: {
    height: "30px",
    width: "30px",
  },
};
export default style;
