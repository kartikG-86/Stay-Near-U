//import logo from './logo.svg';
import "./auth.css";
// import {GoogleLogin} from '@react-oauth/google';
// import jwt_decode from "jwt-decode";
import {useGoogleLogin} from '@react-oauth/google';
import axios from "axios"
import GoogleIcon from "@mui/icons-material/Google";
import { Button, Container } from "@mui/material";

function Auth() {
  const login = useGoogleLogin({
    onSuccess: async (respose) => {
      try {
        const res = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${respose.access_token}`,
            },
          }
        );

        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    },
  });

  return (
    <Container maxWidth="lg" align="center">
      <button onClick={login} style={{ padding: "1rem" }}>
        <GoogleIcon style={{ marginRight: "1rem" }} className="Auth-logo" />
        Continue with Google
      </button>
    </Container>
  );
}

export default Auth;
