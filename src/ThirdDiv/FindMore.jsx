import React from "react";
import { Container, Grid, useMediaQuery, useTheme } from "@material-ui/core";
import useStyles from "../styles";
import MainHeading from "./MainHeading";
import Para from "./Para";
import FindButton from "./FindButton";

const FindMore = (prop) => {
  const classes = useStyles();
  const theme = useTheme();

  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <main
        className={classes.FindDiv}
        style={{ backgroundColor: prop.check ? "#8B8000" : "#fff59e" }}
      >
        <Container maxWidth="lg">
          <div>
            <Grid container spacing={2} justifyContent="center">
              {isMatch ? (
                <>
                  <Grid item style={{ marginTop: "1rem" }}>
                    <MainHeading />
                    <Para />
                    <FindButton />
                  </Grid>
                </>
              ) : (
                <>
                  <Grid
                    item
                    xs={12}
                    md={8}
                    sm={6}
                    style={{ marginTop: "2rem" }}
                  >
                    <MainHeading />
                    <Para />
                    <FindButton />
                  </Grid>

                  <Grid item md={4}>
                    <img
                      className={classes.FindDivImg}
                      style={{ maxWidth: "100%", maxHeight: "90%" }}
                      src="https://img.freepik.com/free-vector/cute-people-playing-laptop-cartoon-vector-icon-illustration-people-technology-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-4043.jpg?w=740&t=st=1684736430~exp=1684737030~hmac=eb0ab9f09031d4f0f2abe0b4a3ced25e7b871ecd9460612d58ec23203db4c5fa"
                    />
                  </Grid>
                </>
              )}
            </Grid>
          </div>
        </Container>
      </main>
    </>
  );
};

export default FindMore;
