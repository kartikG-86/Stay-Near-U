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
      <Container maxWidth="sm" style={{marginBottom:"2rem"}}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item md={2} sm={2} >
            
              <Facebook fontSize="large" style={{ color: "#3b5998" }} />
            
          </Grid>
          <Grid item md={2} sm={2} >
            
              <Twitter fontSize="large" style={{ color: "#00acee" }} />
            
          </Grid>
          <Grid item md={2} sm={2} >
            
              <Instagram fontSize="large" style={{ color: "#fa7e1e" }} />
     
          </Grid>
          <Grid item md={2} sm={2} >
            
              <LinkedIn fontSize="large" style={{ color: "#0A66C2" }} />
       
          </Grid>
          <Grid item md={2} sm={2} >
         
              <YouTube fontSize="large" style={{ color: "#c4302b" }} />
     
          </Grid>
          <Grid item md={2} sm={2} >
         
              <Pinterest fontSize="large" style={{ color: "#c8232c" }} />

          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default SocialLinkIcons;
