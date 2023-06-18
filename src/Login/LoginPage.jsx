import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginHeading from "./Heading";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import SuccessMessage from "./SuccessMessage";

import LoginForm from "./LoginForm";

const LoginPage = (prop) => {
  const [alert, setAlert] = useState(null);

  const navigate = useNavigate();

  let showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
      navigate("/");
    }, 1200);
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });

    showAlert("You are Successfully Logged In 😊😊", "success");
  };
  return (
    <>
      <SuccessMessage alert={alert} />
      <Container component="main" maxWidth="xs" style={{ marginTop: "3rem" }}>
        <Box
          style={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <LoginHeading />
          <LoginForm
            submitFunc={handleSubmit}
            // loginClose={prop.loginClose}
            // handlereset={prop.handlereset}
          />
        </Box>
      </Container>
    </>
  );
};

export default LoginPage;
