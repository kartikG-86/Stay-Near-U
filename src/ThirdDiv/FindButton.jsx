import React from "react";
import { Button } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import useStyles from "../styles";

const FindButton = () => {
  const classes = useStyles();
  return (
    <>
      {" "}
      <Button variant="contained" className={classes.FindDivButton}>
        <Search />
        Find Now
      </Button>
    </>
  );
};

export default FindButton;
