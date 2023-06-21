import { Typography } from "@mui/material";
import React from "react";

const Price = (prop) => {
  return (
    <>
      {" "}
      <Typography variant="h6">
        {prop.pg.price.length > 1
          ? prop.pg.price[prop.pg.price.length - 1] + `/bed  -  `
          : ""}
        {prop.pg.price[0]}
        {prop.pg.OccupancyType[0] === "Single Room" ? "/room" : "/bed"}
      </Typography>
    </>
  );
};

export default Price;
