import React from "react";
import {
  Grid,
  CardActionArea,
  Card,
  CardContent,
  Typography,
} from "@material-ui/core";
import useStyles from "../styles";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

let Data = ["Owner", "Student"];

const SignUpCard = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={4} justifyContent="center">
        {Data.map((data) => (
          <Grid item md={20} sm={40} lg={60}>
            <CardActionArea>
              <Link to={`SignUpComp ${data}`}>
                <Card
                  className={classes.Card}
                  style={{ width: "100%", height: "100%" }}
                >
                  <Button variant="contained" appearance="ghost">
                    <Typography
                      variant="body1"
                      align="center"
                      style={{
                        color: "black",
                        margin: "1rem 0",
                      }}
                    >
                      I'm A {data}
                    </Typography>
                  </Button>
                </Card>
              </Link>
            </CardActionArea>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default SignUpCard;
