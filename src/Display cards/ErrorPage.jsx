import { Container, Typography } from "@mui/material";
import React from "react";

const Error = () => {
  return (
    <>
      <Container>
        <Typography variant="h1" align="center" style={{ fontWeight: "bold" }}>
          404
        </Typography>
        <Typography variant="h5" align="center">
          Not Found Any PG 😔😔
        </Typography>
      </Container>
    </>
  );
};

export default Error;
