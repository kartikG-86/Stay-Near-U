import React from "react";
import { Box, Grid} from "@material-ui/core";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const LoginForm = (prop) => {
  return (
    <>
      <Box
        component="form"
        onSubmit={prop.submitFunc}
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
          label="Password"
          name="password"
          type="password"
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
          Login
        </Button>
        <Grid container style={{ marginTop: "2rem" }}>
          <Grid item xs onClick={prop.handlereset}>
            <Link to={"/Reset"}>Forgot password?</Link>
          </Grid>
          <Link to={`/SignUp`}>
            <Grid item>{"Don't have an account? Sign Up"}</Grid>
          </Link>
        </Grid>
      </Box>
    </>
  );
};

export default LoginForm;
