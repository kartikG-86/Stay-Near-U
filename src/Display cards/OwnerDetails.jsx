import { Avatar, Typography } from "@material-ui/core";
import { Button, Container, Grid } from "@mui/material";
import React, { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";

const OwnerDetails = (prop) => {
  let [click, setClick] = useState(false);

  console.log(prop.name);
  let handleClick = () => {
    setClick(!click);
  };
  return (
    <>
      <Container
        maxWidth="md"
        align="center"
        style={{ background: "#EEEEEE", margin: "2rem 0", padding: "1rem" }}
      >
        <Grid container spacing={1} align="center">
          <Grid item md={2} xs={2}>
            <Avatar style={{background:"black"}}>
              <PersonIcon style={{color:"white"}}/>
            </Avatar>
          </Grid>

          <Grid item md={4} xs={5}>
            <Typography
              variant="body1"
              style={{ fontWeight: "bold", marginTop: "0.5rem" }}
            >
              {prop.owner}
            </Typography>
          </Grid>

          <Grid item md={4} xs={5}>
            <Button onClick={handleClick} style={{color:"black"}}>
              {click ? prop.contact : "Contact"}
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default OwnerDetails;
