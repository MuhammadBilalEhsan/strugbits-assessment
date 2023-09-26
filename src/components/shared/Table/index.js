import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Cell from "./Cell";
import Button from "../Button";
import styles from "./style";

const voidFunction = () => {};

const Table = ({
  rows = [],
  columns = [],
  type = "data",
  onEdit = voidFunction,
  onDelete = voidFunction,
  loading,
}) => {
  useEffect(() => {}, [rows]);
  return (
    <Box sx={styles.main}>
      <Box sx={styles.table}>
        <Box sx={styles.headRow}>
          {columns?.map((column, index) => {
            return (
              <Cell
                key={String(index)}
                rows={rows}
                colIndex={index}
                isHeadCell
                column={column}
              />
            );
          })}
          <Cell
            column={{
              style: styles.actionColumn,
            }}
            isAction
            isLast
          />
        </Box>

        {/* {(loading ? Array.from({ length: 6 }) : rows)?.map((row, index) => { */}
        {rows?.map((row, index) => {
          return (
            <Box key={String(index)} sx={styles.bodyRow}>
              {columns?.map((column, colIndex) => {
                return (
                  <Cell
                    key={String(colIndex)}
                    loading={loading}
                    row={row}
                    column={column}
                    index={index}
                    colIndex={colIndex}
                  />
                );
              })}
              <Cell
                column={{
                  style: styles.actionColumn,
                }}
                isAction
                isLast
              >
                <Button
                  sx={styles.editButton}
                  title="Edit"
                  onClick={() => onEdit(row)}
                />

                <Button
                  sx={styles.deleteButton}
                  color="error"
                  title="Delete"
                  onClick={() => onDelete(row)}
                />
              </Cell>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Table;
