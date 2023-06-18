import React from "react";
import { Typography } from "@material-ui/core";
import useStyles from "../styles";

const MainHeading = () => {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h4" style={{ fontWeight: "bold" }}>
        Explore Room As Per Your Needs
      </Typography>
    </>
  );
};

export default MainHeading;
