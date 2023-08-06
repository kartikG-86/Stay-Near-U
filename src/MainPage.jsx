import React from "react";
import NavBar from "./Navbar/NavBar";
import FirstMainDiv from "./FirstMainDiv/FirstMainDiv";
import SecondDivCards from "./SecondDivCards/SecondDivCards";
import FindMore from "./ThirdDiv/FindMore";
import Needs from "./Needs/Needs";
import Footer from "./Footer/Footer";

const MainPage = (prop) => {
  return (
    <>
      {/* <NavBar
        openFun={prop.openFun}
        openLoginPage={prop.openLoginPage}
        show={prop.show}
        handledark={prop.handledark}
        check={prop.check}
      /> */}
      <FirstMainDiv />
      <SecondDivCards openCard={prop.openCard} />
      <FindMore check={prop.check} />
      <Needs />
      <Footer />
    </>
  );
};

export default MainPage;
