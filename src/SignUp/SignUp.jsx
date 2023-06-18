import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
} from "@material-ui/core";

import CloseButton from "./CloseButton";
import SignUpHeading from "./SignUpHeading";
import SignUpCard from "./SignUpCard";
import LogInHeading from "./LogInHeading";
import { Link } from "react-router-dom";

const SignUp = (props) => {
  return (
    <>
      <div>
        <Dialog open={true}>
          <DialogTitle>
            <Link to="/">
              <CloseButton />
            </Link>
            <SignUpHeading />
          </DialogTitle>

          <DialogContent>
            <DialogContentText>
              <SignUpCard />
            </DialogContentText>
            <LogInHeading />
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default SignUp;
