import React from "react";
import Footer from "../Footer/Footer";
import { Container, Grid, Typography } from "@material-ui/core";

let types = ["Company Policy", "Customer Policy", "Safety Policy"];

const Policy = () => {
  return (
    <>
      <Container>
        <Container style={{ marginTop: "2rem" }}>
          <Typography variant="h4" align="center">
            Privacy Policy
          </Typography>
          <hr style={{ marginTop: "2rem" }} />
        </Container>

        <Container>
          <Grid container justifyContent="center">
            {types.map((type) => (
              <Grid item>
                <Typography
                  varaint="body1"
                  style={{ marginTop: "2rem", fontWeight: "bold" }}
                >
                  {type}
                </Typography>
                <Typography
                  variant="button"
                  paragraph
                  style={{ marginTop: "1rem" }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                  deleniti amet enim quis est dicta harum quo? Minima amet
                  placeat labore aliquam, et asperiores? Alias voluptatibus
                  molestiae amet earum veniam. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Quam deleniti amet enim quis est
                  dicta harum quo? Minima amet placeat labore aliquam, et
                  asperiores? Alias voluptatibus molestiae amet earum
                  veniam.Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Quam deleniti amet enim quis est dicta harum quo? Minima
                  amet placeat labore aliquam, et asperiores? Alias voluptatibus
                  molestiae amet earum veniam.
                </Typography>
                <hr style={{ marginTop: "1rem" }} />
              </Grid>
            ))}
          </Grid>
        </Container>
        <Footer />
      </Container>
    </>
  );
};

export default Policy;
