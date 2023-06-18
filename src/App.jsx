import React, { useEffect } from "react";

import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Navbar/NavBar";
import MainPage from "./MainPage";
import Contact from "./Contact Us/Contact";

import SignUp from "./SignUp/SignUp";
import LoginPage from "./Login/LoginPage";
import FilterFeature from "./Display cards/FilterFeature";
import Policy from "./Policy/Policy";
import About from "./About/About";
import PgDetail from "./Display cards/PgDetail";

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
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cards/:name/:city" element={<FilterFeature />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/aboutUs" element={<About />} />
        <Route path="/:Collegename/:pgName/details" element={<PgDetail />} />
      </Routes>
    </>
  );
};

export default App;
