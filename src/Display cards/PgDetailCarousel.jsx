import React from "react";
import Carousels from "./Carousels";
import { Container } from "@material-ui/core";

const PgDetailCarousel = (prop) => {
  return (
    <>
      <Container>
        <Carousels imageUrl={prop.image} />
      </Container>
    </>
  );
};

export default PgDetailCarousel;
