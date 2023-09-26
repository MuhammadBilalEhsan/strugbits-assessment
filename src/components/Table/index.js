import React from "react";
import Box from "@mui/material/Box";
import Row from "./Row";
import Cell from "./Cell";
import Button from "../Button";

const voidFunction = () => {};

const Table = ({
  rows = [],
  columns = [],
  type = "data",
  onEdit = voidFunction,
  onDelete = voidFunction,
  loading,
}) => {
  return (
    <Box
      sx={{
        width: "100%",
        overflowX: "hidden",
      }}
    >
      <Box
        sx={{
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
        }}
      >
        <Box
          sx={{
            display: "flex",
            overflowX: "unset",
            backgroundColor: "primary.dim",
            mb: "38px",
            borderRadius: "10px",
            height: "60px",
          }}
        >
          {columns?.map((column, index) => {
            return (
              <Cell
                key={String(index)}
                colIndex={index}
                isHeadCell
                column={column}
              />
            );
          })}
          <Cell
            column={{
              style: {
                minWidth: "269px",
                maxWidth: "269px",
              },
            }}
            isAction
            isLast
          />
        </Box>

        {/* {(loading ? Array.from({ length: 6 }) : rows)?.map((row, index) => { */}
        {rows?.map((row, index) => {
          return (
            <Box
              key={String(index)}
              sx={{
                display: "flex",
                overflowX: "unset",
                backgroundColor: "#fff",
                mb: "30px",
                borderRadius: "10px",
                height: "124px",
                boxShadow: "0px 3px 5px #8D8D8D1A",
              }}
            >
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
                  style: {
                    minWidth: "269px",
                    maxWidth: "269px",
                  },
                }}
                isAction
                isLast
              >
                <Button
                  sx={{
                    minWidth: "106px",
                    width: "106px",
                    height: "33px",
                    borderRadius: "5px",
                    color: "primary.main",
                    boxShadow: "none",
                    background: (theme) => theme.palette.primary.dim1,
                    fontSize: "16px",
                    textTransform: "capitalize",
                    fontWeight: 600,
                    mr: "30px",
                    "&:hover": {
                      color: "#FFF",
                    },
                  }}
                  title="Edit"
                  onClick={() => onEdit(row)}
                />

                <Button
                  sx={{
                    minWidth: "106px",
                    width: "106px",
                    height: "33px",
                    borderRadius: "5px",
                    color: "error.main",
                    boxShadow: "none",
                    background: (theme) => theme.palette.error.light,
                    fontSize: "16px",
                    textTransform: "capitalize",
                    fontWeight: 600,
                    mr: "27px",
                    "&:hover": {
                      color: "#FFF",
                    },
                  }}
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
