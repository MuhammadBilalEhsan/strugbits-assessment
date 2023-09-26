import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Cell from "./Cell";
import Button from "../Button";
import styles from "./style";
import { Skeleton, Typography } from "@mui/material";

const voidFunction = () => {};

const Table = ({
  rows = [],
  columns = [],
  type = "data",
  onEdit = voidFunction,
  onDelete = voidFunction,
  reFetcher = voidFunction,
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

        {
          // loading ? (
          //   Array.from({ length: 6 })?.map((item) => (
          //     <Skeleton
          //       key={String(item)}
          //       variant="rectangular"
          //       sx={{
          //         borderRadius: styles.bodyRow.borderRadius,
          //         height: styles.bodyRow.height,
          //         mb: styles.bodyRow.mb,
          //         width: "100%",
          //       }}
          //     />
          //   ))
          // ) :
          (loading ? Array.from({ length: 6 }) : rows?.length) ? (
            rows?.map((row, index) => {
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
                      isSkeleton={loading}
                      sx={styles.editButton}
                      title="Edit"
                      onClick={() => onEdit(row)}
                    />

                    <Button
                      isSkeleton={loading}
                      sx={styles.deleteButton}
                      color="error"
                      title="Delete"
                      onClick={() => onDelete(row)}
                    />
                  </Cell>
                </Box>
              );
            })
          ) : (
            <Box
              sx={{
                ...styles.bodyRow,
                height: "60px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: "18px",
                }}
              >
                You have deleted all {type},{" "}
                <Box
                  component="span"
                  sx={{
                    cursor: "pointer",
                    color: "primary.main",
                    textDecoration: "underline",
                    fontWeight: 600,
                  }}
                  onClick={reFetcher}
                >
                  click here
                </Box>{" "}
                to refetch data
              </Typography>
            </Box>
          )
        }
      </Box>
    </Box>
  );
};

export default Table;
