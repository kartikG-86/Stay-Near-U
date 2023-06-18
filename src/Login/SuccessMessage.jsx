import React from "react";
import Alert from "@mui/material/Alert";

const SuccessMessage = (props) => {
  return (
    <>
      {props.alert && (
        <Alert severity={props.alert.type}>{props.alert.msg}</Alert>
      )}
    </>
  );
};

export default SuccessMessage;
