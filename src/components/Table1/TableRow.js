import React from "react";
import style from "./style";
import Button from "../Button";
// import { FaEdit, FaTrashAlt } from "react-icons/fa";
// import Skeleton from "../Skeleton";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";

const defaultValue = (row, column) => row?.[column?.key];

const TableRow = ({
  columns,
  rowIndex,
  actions,
  CustomActionComponent,
  CustomCellRenderer,
  loading,
  row,
  onDelete,
  onEdit,
  onAddRow,
  setRowItem,
}) => {
  return (
    <Box
      key={String(rowIndex)}
      component="tr"
      sx={{
        boxShadow: "0px 3px 5px #8D8D8D1A",
        background: "#828282",
        borderRadius: "10px",
        position: "relative",
      }}
    >
      {columns.map((column, index) => {
        const { minWidth = "auto", value = defaultValue } = column;
        return (
          <Box
            key={index}
            component="td"
            {...column?.rowProps}
            sx={{ ...style.td({ minWidth, index }), ...column?.columnStyle }}
          >
            {loading ? (
              <Skeleton
                height="20px"
                variant="rectangle"
                sx={{ borderRadius: 1 }}
              />
            ) : CustomCellRenderer ? (
              <CustomCellRenderer
                type={column?.type}
                row={row}
                column={column}
                setRowItem={setRowItem}
                rowIndex={rowIndex}
                onAddRow={onAddRow}
                columnIndex={index}
                {...column}
              />
            ) : (
              value(row, column, rowIndex) || "-"
            )}
          </Box>
        );
      })}

      {actions &&
        (CustomActionComponent ? (
          <CustomActionComponent
            onDelete={onDelete}
            onEdit={onEdit}
            row={row}
            rowIndex={rowIndex}
            columnIndex={columns?.length}
          />
        ) : (
          <Actions
            onDelete={onDelete}
            onEdit={onEdit}
            row={row}
            index={rowIndex}
          />
        ))}
    </Box>
  );
};

export default TableRow;

const Actions = ({ onEdit, onDelete, row }) => {
  return (
    <Box
      component="td"
      sx={{
        ...style.td({ minWidth: "100px", index: true }),
      }}
    >
      <Box sx={style.actionsWrapper}>
        <Button
          sx={style.actions}
          onClick={() => onEdit(row)}
          // title={<FaEdit />}
          color="secondary"
          isSkeleton
          skeletonHeight="20px"
        />
        <Button
          sx={{
            ...style.actions,
            color: "#fff",
          }}
          onClick={() => onDelete(row)}
          // title={<FaTrashAlt />}
          color="danger"
          isSkeleton
          skeletonHeight="20px"
        />
      </Box>
    </Box>
  );
};
