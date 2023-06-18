import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItemText,
  ListItemIcon,
  ListItemButton,
  IconButton,
} from "@mui/material";
import MenuOpenOutlinedIcon from "@mui/icons-material/MenuOpenOutlined";

const Pages = ["Home", "About Us", "Contact Us", "Policy", "Login", "Sign up"];
let DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <React.Fragment>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          {Pages.map((page, index) => (
            <ListItemButton onClick={() => setOpenDrawer(!openDrawer)}>
              <ListItemIcon>
                <ListItemText>{page}</ListItemText>
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
