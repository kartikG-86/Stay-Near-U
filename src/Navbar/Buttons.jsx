import React from "react";
import Button from "@mui/material/Button";

const Buttons = (prop) => {
  return (
    <>
      <Button
        variant="h6"
        color="secondary"
        style={{
          marginLeft: prop.mrg,
          color: "white",
          backgroundColor: prop.backColor,
          borderRadius: "2rem",
        }}
        onClick={prop.click}
      >
        {prop.text}
      </Button>
    </>
  );
};

export default Buttons;
