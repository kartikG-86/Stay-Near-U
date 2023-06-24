import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItemText,
  ListItemIcon,
  ListItemButton,
  IconButton,
  Typography,
} from "@mui/material";
import MenuOpenOutlinedIcon from "@mui/icons-material/MenuOpenOutlined";
import { Link } from "react-router-dom";

const Pages = ["Home", "About Us", "Contact Us", "Policy", "Login", "Sign up"];
const routeChange = [
  "/",
  "/aboutUs",
  "/contactUs",
  "/policy",
  "/login",
  "/signUp",
];
let DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <React.Fragment>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List
          style={{
            backgroundColor: "black",
            width: "10rem",
            height: "100vh",
            margin: "0rem",
          }}
        >
          {Pages.map((page, index) => (
            <ListItemButton onClick={() => setOpenDrawer(!openDrawer)}>
              <ListItemIcon>
                <Link
                  to={routeChange[index]}
                  style={{ textDecoration: "none" }}
                >
                  <ListItemText
                    style={{
                      color: "white",
                      borderBottom: "1px solid white",
                      paddingBottom: "0.5rem",

                      width: "8rem",
                    }}
                  >
                    <Typography align="center">{page}</Typography>
                  </ListItemText>
                </Link>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>

      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        style={{ marginLeft: "auto" }}
      >
        <MenuOpenOutlinedIcon />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;
