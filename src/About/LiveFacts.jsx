import React from "react";
import { Card, CardContent, Grid, Typography } from "@material-ui/core";
const data = [
  { number: "23K", text: "Happy People" },
  { number: "30K", text: "Customers" },
  { number: "100K", text: "Available PG's" },
  { number: "120", text: "Cities Covered" },
];
const LiveFacts = () => {
  return (
    <>
      <Grid
        container
        spacing={6}
        justifyContent="center"
        style={{ marginTop: "2rem", paddingBottom: "3rem" }}
      >
        {data.map((list) => (
          <Grid item md={3} xs={6}>
            <Card style={{ borderRadius: "1rem" }}>
              <CardContent>
                <Typography
                  variant="h4"
                  component="div"
                  style={{ fontWeight: "bold" }}
                >
                  {list.number}
                </Typography>
                <Typography variant="button">{list.text}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default LiveFacts;
