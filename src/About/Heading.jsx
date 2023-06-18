import React from "react";
import { Typography } from "@material-ui/core";
const Heading = (prop) => {
  return (
    <>
      <Typography
        align={prop.align}
        variant="h4"
        style={{
          marginTop: prop.margin,
          marginBottom: "1rem",
          fontWeight: prop.font,
        }}
      >
        {prop.text}
      </Typography>
    </>
  );
};

export default Heading;
