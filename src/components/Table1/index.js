import React from "react";
import Box from "@mui/material/Box";
import style from "./style";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

const voidFunction = () => {};

const Table = ({
  rows = [],
  columns = [],
  type = "data",
  onEdit = voidFunction,
  onDelete = voidFunction,
  setRowItem = voidFunction,
  onAddRow = voidFunction,
  loading,
  actions,
  footer = [],
  CustomActionComponent,
  CustomCellRenderer,
  footerData,
  setFooterData,
}) => {
  return (
    <Box component="table" sx={style.table}>
      <TableHeader columns={columns} actions={actions} />
      {/* <TableBody
        loading={loading}
        rows={rows}
        columns={columns}
        onEdit={onEdit}
        onDelete={onDelete}
        setRowItem={setRowItem}
        actions={actions}
        type={type}
        CustomActionComponent={CustomActionComponent}
        CustomCellRenderer={CustomCellRenderer}
        onAddRow={onAddRow}
      /> */}
    </Box>
  );
};

export default Table;
