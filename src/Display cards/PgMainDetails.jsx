import { Button, Container, Typography } from "@material-ui/core";
import React from "react";

const PgMainDetails = (prop) => {
  return (
    <>
      <Container style={{ marginTop: "1rem" }} maxWidth="xl">
        <Typography variant="h5" style={{ fontWeight: "bold" }}>
          {prop.PG.pgName}
        </Typography>
        <Typography variant="body1">
          {prop.PG.OccupancyType.map((roomType, index, arr) => (
            <span style={{ marginRight: "0.5rem", fontWeight: "bold" }}>
              {arr[arr.length - index - 1]}
            </span>
          ))}

          {prop.PG.TenateType.map((gender) => (
            <Button
              style={{ margin: "1rem 0.5rem" }}
              variant="contained"
              color={gender === "Boys" ? "primary" : "success"}
              size="small"
            >
              {gender}
            </Button>
          ))}
        </Typography>
      </Container>
    </>
  );
};

export default PgMainDetails;
