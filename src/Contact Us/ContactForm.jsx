import React from "react";
// import ContactTextField from "./ContactTextField";
import { Box, Button, Grid } from "@mui/material";

import Data from "./ContactFieldData";
import ContactTextField from "./ContactTextField";
const ContactForm = () => {
  return (
    <>
      <Box
        component="form"
        // onSubmit={prop.submitFunc}
        noValidate
        sx={{ mt: 1 }}
      >
        <Grid>
          <ContactTextField id="name" label="Name" name="name" auto="name" />
          <ContactTextField
            id="email"
            label="Email Address"
            name="email"
            auto="email"
          />
          <ContactTextField
            id="phone"
            label="Phone Number"
            name="phone"
            auto="phone"
          />
          <ContactTextField
            id="ques"
            label="Your Message"
            name="text"
            auto="text"
          />

          <Button
            type="submit"
            variant="contained"
            style={{
              backgroundColor: "green",
              color: "white",
              marginTop: "2rem",
              float: "right",
            }}
          >
            Submit
          </Button>
        </Grid>
      </Box>
    </>
  );
};

export default ContactForm;
