import React from "react";
import NavBarItems from "./NavBarItems";
import { Container } from "@material-ui/core";

const NavBar = (prop) => {
  return (
    <NavBarItems
      func={prop.openFun}
      login={prop.openLoginPage}
      check={prop.check}
      handledark={prop.handledark}
      openContact={prop.openContact}
    />
  );
};

export default NavBar;
