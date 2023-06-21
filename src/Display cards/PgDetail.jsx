import React from "react";
import { useParams } from "react-router-dom";
import CardData, { houseRules } from "./PgsData";
import { Container, Typography } from "@material-ui/core";
import Carousels from "./Carousels";
import Button from "@mui/material/Button";
import CommonDetails from "./CommonDetails";
import Facilities from "./Facilities";
import PgDetailCarousel from "./PgDetailCarousel";
import PgMainDetails from "./PgMainDetails";
import PgMap from "./PgMap";
import HouseRules from "./HouseRules";
import OwnerDetails from "./OwnerDetails";
import Price from "./Price";

const PgDetail = () => {
  const path = useParams();
  console.log(houseRules);

  console.log(path);
  return (
    <>
      <Container style={{ marginTop: "3rem" }}>
        <Container maxWidth="md">
          {CardData?.map((pg) =>
            pg.pgName === path.pgName ? (
              <>
                <PgDetailCarousel image={pg.imageUrl} />

                <PgMainDetails PG={pg} />
                <Container>
                  <Price pg={pg} />
                </Container>

                <Container maxWidth="md" component="div">
                  <Typography
                    variant="h5"
                    style={{
                      marginTop: "2rem",
                      fontWeight: "bold",
                      fontSize: "1.8rem",
                    }}
                  >
                    Overview
                  </Typography>
                  <Typography
                    variant="h6"
                    style={{
                      marginTop: "1rem",
                      fontSize: "1.3rem",
                      fontWeight: "bold",
                    }}
                  >
                    Common Details
                  </Typography>
                </Container>
                <Container maxWidth="md" component="div">
                  <CommonDetails
                    noticePeriod={pg.NoticePeriod}
                    lockInPeriod={pg.LockInPeriod}
                  />
                </Container>

                <Container>
                  <Typography
                    variant="h6"
                    style={{ marginTop: "2rem", fontWeight: "bold" }}
                  >
                    Facilities
                  </Typography>

                  <Container maxWidth="md" style={{ marginTop: "2rem" }}>
                    <Facilities facilities={pg.Facilities} />
                  </Container>

                  <HouseRules houseRules={houseRules} />

                  <OwnerDetails
                    owner={pg.ownerName}
                    contact={pg.contactNumber}
                  />
                </Container>
              </>
            ) : (
              <></>
            )
          )}
        </Container>
      </Container>
    </>
  );
};

export default PgDetail;
