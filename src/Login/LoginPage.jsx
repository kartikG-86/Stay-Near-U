import React, { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginHeading from "./Heading";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import SuccessMessage from "./SuccessMessage";
// import { useDispatch, useSelector } from "react-redux";
// import { loginUser } from "../api";

import LoginForm from "./LoginForm";

const LoginPage = (prop) => {
  const [alert, setAlert] = useState(null);
  const [backendError, setBackendError] = useState(null);

  const navigate = useNavigate();
  // const dispatch = useDispatch();

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
    // dispatch(loginUser(data));
    
    showAlert("You are Successfully Logged In 😊😊", "success");
  };
  // const { isLoading, error, isAuthenticated } = useSelector(
  //   (state) => state.users
  // );

  // useEffect(() => {
  //   if (error) {
  //     setBackendError(error);
  //   }
  //   if (isAuthenticated) {
  //     navigate("/");
  //   }
  // }, [error, isAuthenticated]);

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
