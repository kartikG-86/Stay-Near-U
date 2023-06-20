import React from "react";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const LogInHeading = () => {
  return (
    <>
      <Typography variant="body1" align="center" style={{ marginTop: "2rem" }}>
        Already Have An Account? <Link to={`/Login`}>Login</Link>
      </Typography>
    </>
  );
};

export default LogInHeading;
