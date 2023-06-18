import { Container, Grid, Typography } from "@material-ui/core";
import React from "react";

const commonDetails = [
  {
    type: "Meal Type",
    ans: "Breakfast , Lunch , Dinner",
  },
  {
    type: "Meal Offerings",
    ans: " Punjabi , South Indian , North Indian , others",
  },
  {
    type: "Total Beds",
    ans: "42",
  },
  ,
];

const CommonDetails = (prop) => {
  return (
    <>
      <Container
        maxWidth="md"
        style={{
          border: "1px solid grey",
          borderRadius: "1rem",

          marginTop: "1rem",
          padding: "1rem",
        }}
      >
        <Grid container spacing={1}>
          {commonDetails.map((detail) => (
            <Grid item md={5} xs={12} style={{ margin: "1rem" }}>
              <Typography variant="body1" style={{ fontWeight: "bold" }}>
                {detail.type}
              </Typography>
              <Typography variant="body2">{detail.ans}</Typography>
            </Grid>
          ))}
          <Grid item md={5} xs={12} style={{ margin: "1rem" }}>
            <Typography variant="body1" style={{ fontWeight: "bold" }}>
              Lock In Period
            </Typography>
            <Typography variant="body2">{prop.lockInPeriod}</Typography>
          </Grid>
          <Grid item md={5} xs={12} style={{ margin: "1rem" }}>
            <Typography variant="body1" style={{ fontWeight: "bold" }}>
              Notice Period
            </Typography>
            <Typography variant="body2">{prop.noticePeriod}</Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default CommonDetails;
