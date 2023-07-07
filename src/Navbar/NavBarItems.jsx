import React, { useState } from "react";

import {
  AppBar,
  Toolbar,
  Typography,
  Tabs,
  Button,
  Tab,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import DrawerComp from "./DrawerComp";
import { HomeWorkOutlined } from "@material-ui/icons";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import Buttons from "./Buttons";
import { Link } from "react-router-dom";

const Pages = ["Home", "About Us", "Contact Us", "Policy"];

const NavBarItems = (prop) => {
  const theme = useTheme();

  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <AppBar
        position="relative"
        style={{ backgroundColor: prop.check ? "#272727" : "white" }}
      >
        <Toolbar>
          <HomeWorkOutlined style={{ color: "orange" }} />
          <Typography
            variant="h6"
            style={{ color: prop.check ? "white" : "#272727" }}
          >
            StayNearU
          </Typography>

          {isMatch ? (
            <>
              <DrawerComp />
            </>
          ) : (
            <>
              <Tabs
                style={{
                  marginLeft: "auto",
                  color: prop.check ? "white" : "#272727",
                }}
                indicateColor="secondary"
              >
                <Link style={{ color: "black", textDecoration: "none" }} to="/">
                  <Tab value="0" label="Home" />
                </Link>
                <Link
                  style={{ color: "black", textDecoration: "none" }}
                  to="/aboutUs"
                >
                  <Tab value="1" label="About Us" />
                </Link>
                <Link
                  to="/contactUs"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  <Tab value="2" label="Contact Us" />
                </Link>
                <Link
                  to="/policy"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  <Tab value="3" label="Policy" />
                </Link>
              </Tabs>

              <Link
                style={{ color: "black", textDecoration: "none" }}
                to="/NewPg"
              >
                <Buttons text="List With Us" backColor="#9016928c" mrg="40px" />
              </Link>

              <Link
                style={{ color: "white", textDecoration: "none" }}
                to="/signUp"
              >
                <Buttons text="Sign Up" backColor="#388e3c" mrg="auto" />
              </Link>

              <Link
                style={{ color: "white", textDecoration: "none" }}
                to="/login"
              >
                <Buttons text="Login" backColor="#e53935" mrg="auto" />
              </Link>
            </>
          )}

          <Button>
            {prop.check ? (
              <LightModeIcon
                style={{ color: "White" }}
                onClick={prop.handledark}
              />
            ) : (
              <DarkModeIcon
                style={{ color: "black" }}
                onClick={prop.handledark}
              />
            )}
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBarItems;
