import { Container, Typography } from "@material-ui/core";
import React from "react";
import SocialLinkIcons from "./SocialLinkIcons";

const SocialLinks = () => {
  return (
    <>
      <Container style={{ marginTop: "3rem" }}>
        <Typography variant="h5" align="center" style={{ fontWeight: "bold" }}>
          Social Links
        </Typography>

        <Container style={{ marginTop: "3rem" }}>
          <SocialLinkIcons />
        </Container>
      </Container>
    </>
  );
};

export default SocialLinks;
