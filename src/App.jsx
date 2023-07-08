import React, { useEffect } from "react";

import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Navbar/NavBar";
import MainPage from "./MainPage";
import Contact from "./Contact Us/Contact";
import ResetPassword from "./Reset Password/ResetPassword";
import LoginPage from "./Login/LoginPage";
import FilterFeature from "./Display cards/FilterFeature";
import Policy from "./Policy/Policy";
import About from "./About/About";
import PgDetail from "./Display cards/PgDetail";
 import SignUpComp from "./SignUp/SignUpComp";
 import NewPg from "./SignUp/NewPg";

const App = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/contactUs" element={<Contact />} />
        <Route path="/signUp" element={<SignUpComp />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/reset" element={<ResetPassword />} />
        <Route path="/cards/:name/:city" element={<FilterFeature />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/aboutUs" element={<About />} />
        <Route path="/:Collegename/:pgName/details" element={<PgDetail />} />
        <Route path="/NewPg" element= {<NewPg />} />
      </Routes>
    </>
  );
};

export default App;
