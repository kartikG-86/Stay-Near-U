import React from "react";
import { Link, Typography } from "@material-ui/core";

const LogInHeading = () => {
  return (
    <>
      <Typography variant="body1" align="center" style={{ marginTop: "2rem" }}>
        Already Have An Account? <Link>Login</Link>
      </Typography>
    </>
  );
};

export default LogInHeading;
