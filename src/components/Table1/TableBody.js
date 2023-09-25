import React, { useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import style from "./style";
import TableRow from "./TableRow";
// import noDataImg from "../../../assets/images/no-data.jpg";

const TableBody = ({
  loading,
  rows,
  columns,
  onEdit,
  onDelete,
  onAddRow,
  setRowItem,
  actions,
  type,
  CustomActionComponent,
  CustomCellRenderer,
}) => {
  const elementRefs = useRef([]);

  useEffect(() => {
    elementRefs.current[0]?.focus(); // Focus the first element initially
  }, []);

  return (
    <Box
      component="tbody"
      sx={{ overflow: "auto", position: "relative", top: "38px" }}
    >
      {rows.length || loading ? (
        (loading ? Array.from({ length: 7 }) : rows).map((row, rowIndex) => {
          return (
            <TableRow
              key={rowIndex}
              columns={columns}
              rowIndex={rowIndex}
              actions={actions}
              loading={loading}
              row={row}
              onDelete={onDelete}
              setRowItem={setRowItem}
              onEdit={onEdit}
              CustomActionComponent={CustomActionComponent}
              CustomCellRenderer={CustomCellRenderer}
              onAddRow={onAddRow}
            />
          );
        })
      ) : (
        <NoDataRow actions={actions} columns={columns} type={type} />
      )}
    </Box>
  );
};

export default TableBody;

const NoDataRow = ({ actions, columns, type }) => (
  <Box
    component="td"
    colSpan={columns?.length + (actions ? 1 : 0)}
    sx={style.td({ minWidth: "auto" })}
  >
    <Box sx={style.noDataStyle}>
      {/* <img src={noDataImg} alt="" /> */}
      <Box component="span" fontWeight="600">
        There are no {type}.
      </Box>
    </Box>
  </Box>
);
