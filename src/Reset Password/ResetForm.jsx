import React from "react";
import { Box, TextField, Button } from "@material-ui/core";

const ResetForm = (prop) => {
  return (
    <>
      <Box
        component="form"
        onSubmit={prop.resetFunction}
        noValidate
        sx={{ mt: 1 }}
      >
        <TextField
          margin="normal"
          required
          variant="outlined"
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
        />

        <TextField
          margin="normal"
          required
          variant="outlined"
          fullWidth
          id="password"
          label="Enter New Password"
          type="password"
          name="password"
          autoComplete="current-password"
          autoFocus
        />

        <TextField
          margin="normal"
          required
          variant="outlined"
          fullWidth
          type="password"
          id="confirmPassword"
          label="Confirm Password"
          name="confirmPassword"
          autoComplete="current-password"
          autoFocus
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          style={{
            backgroundColor: "green",
            color: "white",
            marginTop: "2rem",
          }}
        >
          Reset Password
        </Button>
      </Box>
    </>
  );
};

export default ResetForm;
