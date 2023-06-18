import React from "react";
import Carousels from "./Carousels";
import { Container } from "@material-ui/core";

const PgDetailCarousel = (prop) => {
  return (
    <>
      <Container maxWidth="md">
        <Carousels imageUrl={prop.image} height="25rem" />
      </Container>
    </>
  );
};

export default PgDetailCarousel;
