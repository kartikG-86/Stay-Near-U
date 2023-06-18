import React from "react";
import { Close } from "@material-ui/icons";
import { Button } from "@material-ui/core";

const CloseButton = (prop) => {
  return (
    <>
      <Button onClick={prop.closeFunction} style={{ color: "red" }}>
        <Close fontSize="large" />
      </Button>
    </>
  );
};

export default CloseButton;
