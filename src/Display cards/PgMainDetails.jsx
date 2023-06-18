import { Button, Container, Typography } from "@material-ui/core";
import React from "react";

const PgMainDetails = (prop) => {
  return (
    <>
      <Container style={{ marginTop: "1rem" }}>
        <Typography variant="h5">{prop.PG.pgName}</Typography>
        <Typography variant="body1">
          {prop.PG.OccupancyType.map((roomType, index, arr) => (
            <span style={{ marginRight: "1rem" }}>
              {arr[arr.length - index - 1]}
            </span>
          ))}

          {prop.PG.TenateType.map((gender) => (
            <Button
              style={{ margin: "0 0.5rem" }}
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
