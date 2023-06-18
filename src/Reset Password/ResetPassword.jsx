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
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Dignissimos unde deleniti ad temporibus
            </Typography>
          </Box>

          <ResetForm resetFunction={prop.resetFunction} />
        </Container>
      </ThemeProvider>
    </>
  );
};

export default ResetPassword;
