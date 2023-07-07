import React from "react";
import Button from "@mui/material/Button";
import { Center } from "@chakra-ui/layout";

const Buttons = (prop) => {
  return (
    <>
      <Button
        variant="h6"
        color="secondary"
        style={{
          marginLeft: prop.mrg,
          marginRight: "8px",
          justifyContent: Center,
          color: "white",
          backgroundColor: prop.backColor,
          borderRadius: "1rem",
        }}
        onClick={prop.click}
      >
        {prop.text}
      </Button>
    </>
  );
};

export default Buttons;
