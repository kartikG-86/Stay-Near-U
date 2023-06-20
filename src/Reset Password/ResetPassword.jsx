import React from "react";
import { Box, Container, CssBaseline, Typography } from "@material-ui/core";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ResetForm from "./ResetForm";

const defaultTheme = createTheme();

const ResetPassword = (prop) => {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs" style={{ marginTop: "3rem" }}>
          <CssBaseline />

          <Box
            style={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {" "}
            <Typography variant="h5">Reset Password</Typography>
            <Typography
              paragraph
              variant="button"
              style={{ textTransform: "none", marginTop: "2rem" }}
              align="center"
            >
              A strong password is:
              <br />
              &#x2022; At least 12 characters long but 14 or more is better.
              <br />
              &#x2022; A combination of uppercase letters, lowercase letters,
              numbers, and symbols.
              <br />
              &#x2022; Not a word that can be found in a dictionary or the name
              of a person, character, product, or organization.
              <br />
              &#x2022;Significantly different from your previous passwords.
            </Typography>
          </Box>

          <ResetForm resetFunction={prop.resetFunction} />
        </Container>
      </ThemeProvider>
    </>
  );
};

export default ResetPassword;
