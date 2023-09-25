import React from "react";
import Box from "@mui/material/Box";
import arrowUp from "../../assets/icons/arrow-up.png";
import arrowDown from "../../assets/icons/arrow-down.png";
import style from "./style";
import Image from "../Image";

const TableHeader = ({ columns, actions }) => {
  return (
    <Box component="thead">
      <Box component="tr">
        {columns.map(({ name, minWidth = "136px" }, index) => {
          return (
            <Box
              key={String(index)}
              component="th"
              sx={style.th(minWidth, index)}
            >
              {name && (
                <Box
                  sx={{
                    fontFamily: "Lato",
                    minWidth: "400px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {name}
                  <Box
                    sx={{
                      ml: "7px",
                      display: "flex",
                      flexDirection: "column",
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
                </Box>
              )}
            </Box>
          );
        })}
        <Box
          component="th"
          sx={{
            ...style.th("132px", true),
            textAlign: "center",
            width: "170px",
            borderRadius: "0 10px 10px 0",
          }}
        />
      </Box>
    </Box>
  );
};

export default TableHeader;
