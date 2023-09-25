import Box from "@mui/material/Box";
import React from "react";
import arrowUp from "../../assets/icons/arrow-up.png";
import arrowDown from "../../assets/icons/arrow-down.png";
import Image from "../Image";

const Cell = ({
  row,
  column,
  isHeadCell,
  index,
  colIndex,
  isLast,
  isAction,
  children,
}) => {
  const { name, value: getValue, minWidth, maxWidth, style = {} } = column;

  // const {value :getValue}= column
  const value = isHeadCell ? (
    <Box
      sx={{
        fontFamily: "Lato",
        fontSize: "18px",
        display: "flex",
        alignItems: "center",
        backgroundColor: "inherit",
        borderRadius:
          !colIndex && !isLast
            ? "10px 0 0 10px"
            : isLast
            ? "0 10px 10px 0"
            : "",
        minWidth,
        maxWidth,
        color: "primary.main",
        fontSize: "20px",
      }}
    >
      {name}
      {name && (
        <Box
          sx={{
            ml: "7px",
            display: "flex",
            flexDirection: "column",
            cursor: "pointer",
          }}
        >
          <Image
            src={arrowUp}
            sx={{
              width: "10px",
              height: "5px",
              mb: "3.58px",
            }}
          />
          <Image
            src={arrowDown}
            sx={{
              width: "10px",
              height: "5px",
            }}
          />
        </Box>
      )}
    </Box>
  ) : isAction ? (
    <Box
      sx={{
        fontFamily: "Lato",
        fontSize: "18px",
        display: "flex",
        alignItems: "center",
        backgroundColor: "inherit",
        borderRadius:
          !colIndex && !isLast
            ? "10px 0 0 10px"
            : isLast
            ? "0 10px 10px 0"
            : "",
        minWidth,
        maxWidth,
        color: "secondary.dark",
        ...style,
      }}
    >
      {children}
    </Box>
  ) : (
    <Box
      sx={{
        fontFamily: "Lato",
        fontSize: "18px",
        display: "flex",
        alignItems: "center",
        backgroundColor: "inherit",
        borderRadius:
          !colIndex && !isLast
            ? "10px 0 0 10px"
            : isLast
            ? "0 10px 10px 0"
            : "",
        minWidth,
        maxWidth,
        color: "secondary.dark",
        ...style,
      }}
    >
      {getValue ? getValue(row, column, index) : row?.[column?.key]}
    </Box>
  );
  return value;
};

export default Cell;
