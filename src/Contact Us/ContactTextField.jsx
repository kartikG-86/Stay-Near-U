import React from "react";
import { TextField } from "@mui/material";

const ContactTextField = (prop) => {
  return (
    <>
      <TextField
        margin="normal"
        required
        variant="outlined"
        fullWidth
        id={prop.id}
        label={prop.label}
        name={prop.name}
        autoComplete={prop.auto}
      />
    </>
  );
};

export default ContactTextField;
