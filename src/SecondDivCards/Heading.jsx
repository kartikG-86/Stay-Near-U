import React from "react";
import { Typography, Fab } from "@material-ui/core";
import useStyles from "../styles";
import { Search } from "@material-ui/icons";
const Heading = () => {
  const classes = useStyles();
  return (
    <>
      <div>
        <Typography variant="h4" className={classes.text} paragraph>
          Best PG's Near Your Colleges
          <Fab
            variant="extended"
            size="small"
            aria-label="add"
            style={{ float: "right", color: "white", backgroundColor: "green" }}
          >
            <Search sx={{ mr: 1 }} />
            Find Now
          </Fab>
        </Typography>
      </div>
    </>
  );
};

export default Heading;
