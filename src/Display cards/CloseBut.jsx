import React from "react";
import { Close } from "@material-ui/icons";
import { Button } from "@material-ui/core";

const CloseButton = (prop) => {
  return (
    <>
      <Button
        onClick={prop.handleClose}
        style={{ color: "red", margin: "1rem -2rem" }}
      >
        <Close fontSize="large" />
      </Button>
    </>
  );
};

export default CloseButton;
