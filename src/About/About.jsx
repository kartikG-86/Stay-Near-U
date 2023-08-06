import React from "react";
import { Container } from "@material-ui/core";
import MainImage from "./MainImage";
import Heading from "./Heading";
import AboutPara from "./AboutPara";
import LiveFacts from "./LiveFacts";
import Members from "./Members";
import Footer from "../Footer/Footer";

const About = () => {
  return (
    <>
      <MainImage />
      <Container>
        <Heading text="About Us" align="center" margin="6rem" font="light" />
        <AboutPara />
      </Container>

      <Container style={{ marginBottom: "4rem" }}>
        <Members />
      </Container>

      <Container style={{ backgroundColor: "#f1f1f1", paddingTop: "3rem" }}>
        <Heading text="Live Facts" align="left" margin="2rem" font="bold" />
        <LiveFacts />
      </Container>
      <Footer />
    </>
  );
};

export default About;
