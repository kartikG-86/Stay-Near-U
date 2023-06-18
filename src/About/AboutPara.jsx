import React from "react";
import { Grid, Typography } from "@material-ui/core";
const AboutPara = () => {
  return (
    <>
      <Grid
        container
        spacing={1}
        justifyContent="center"
        style={{ marginBottom: "4rem" }}
      >
        <Grid item md={6} xs={12}>
          <Typography align="center" variant="body1" paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            deleniti amet enim quis est dicta harum quo? Minima amet placeat
            labore aliquam, et asperiores? Alias voluptatibus molestiae amet
            earum veniam. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quam deleniti amet enim quis est dicta harum quo? Minima amet
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default AboutPara;
