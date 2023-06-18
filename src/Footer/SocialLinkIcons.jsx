import { Container, Grid, IconButton } from "@material-ui/core";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Pinterest,
  Twitter,
  YouTube,
} from "@material-ui/icons";
import React from "react";

const SocialLinkIcons = () => {
  return (
    <>
      <Container maxWidth="sm">
        <Grid container spacing={6} justifyContent="center">
          <Grid item md={2} sm={2} align="center">
            <IconButton>
              <Facebook fontSize="large" style={{ color: "#3b5998" }} />
            </IconButton>
          </Grid>
          <Grid item md={2} sm={2} align="center">
            <IconButton>
              <Twitter fontSize="large" style={{ color: "#00acee" }} />
            </IconButton>
          </Grid>
          <Grid item md={2} sm={2} align="center">
            <IconButton>
              <Instagram fontSize="large" style={{ color: "#fa7e1e" }} />
            </IconButton>
          </Grid>
          <Grid item md={2} sm={2} align="center">
            <IconButton>
              <LinkedIn fontSize="large" style={{ color: "#0A66C2" }} />
            </IconButton>
          </Grid>
          <Grid item md={2} sm={2} align="center">
            <IconButton>
              <YouTube fontSize="large" style={{ color: "#c4302b" }} />
            </IconButton>
          </Grid>
          <Grid item md={2} sm={2} align="center">
            <IconButton>
              <Pinterest fontSize="large" style={{ color: "#c8232c" }} />
            </IconButton>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default SocialLinkIcons;
