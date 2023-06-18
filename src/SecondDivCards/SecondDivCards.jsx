import React from "react";
import { Container } from "@material-ui/core";

import Cards from "./Cards";
import Heading from "./Heading";

const SecondDivCards = (prop) => {
  return (
    <>
      <main>
        <div style={{ marginTop: "8rem" }}>
          <Container>
            <Heading />
            <Container maxWidth="md" style={{ marginTop: "3rem" }}>
              <Cards openCard={prop.openCard} />
            </Container>
          </Container>
        </div>
      </main>
    </>
  );
};

export default SecondDivCards;
