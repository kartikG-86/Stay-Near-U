import React from "react";
import {
  Grid,
  CardActionArea,
  Card,
  CardContent,
  Typography,
} from "@material-ui/core";
import useStyles from "../styles";
let Data = ["Owner", "Student"];

const SignUpCard = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={4} justifyContent="center">
        {Data.map((data) => (
          <Grid item md={6} sm={6} lg={6}>
            <CardActionArea>
              <Card
                className={classes.Card}
                style={{ width: "100%", height: "100%" }}
              >
                <CardContent>
                  <Typography
                    variant="body1"
                    align="center"
                    style={{ color: "green", margin: "1rem 0" }}
                  >
                    I'm A {data}
                  </Typography>
                </CardContent>
              </Card>
            </CardActionArea>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default SignUpCard;
