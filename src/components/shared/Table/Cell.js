import Box from "@mui/material/Box";
import React from "react";
import arrowUp from "../../../assets/icons/arrow-up.png";
import arrowDown from "../../../assets/icons/arrow-down.png";
import Image from "../Image";
import styles from "./style";

const Cell = ({
  rows,
  row,
  column,
  isHeadCell,
  index,
  colIndex,
  isLast,
  isAction,
  children,
}) => {
  const {
    name,
    value: getValue,
    minWidth,
    maxWidth,
    style = {},
    sortFunction = () => {},
  } = column;

  const value = isHeadCell ? (
    <Box sx={styles.cell1({ colIndex, isLast, minWidth, maxWidth })}>
      {name}
      {name && (
        <Box sx={styles.cell1Main}>
          <Image
            src={arrowUp}
            sx={{ ...styles.cell1Main.sortIcon, mb: "3.58px" }}
            onClick={() => sortFunction(rows)}
          />
          <Image
            src={arrowDown}
            sx={styles.cell1Main.sortIcon}
            onClick={() => sortFunction(rows, true)}
          />
        </Box>
      )}
    </Box>
  ) : isAction ? (
    <Box sx={styles.bodyCell({ colIndex, isLast, minWidth, maxWidth, style })}>
      {children}
    </Box>
  ) : (
    <Box sx={styles.bodyCell({ colIndex, isLast, minWidth, maxWidth, style })}>
      {getValue ? getValue(row, column, index) : row?.[column?.key]}
    </Box>
  );
  return value;
};

export default Cell;
