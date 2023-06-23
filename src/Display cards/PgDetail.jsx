import * as React from "react";
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
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import CloseButton from "./CloseBut";
import Slide from "@mui/material/Slide";

const PgDetail = (prop) => {
  const path = useParams();
  console.log(houseRules);

  console.log(path);
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  const handleClose = () => {
    prop.setDetails(!prop.details);
  };

  return (
    <>
      <Dialog
        fullScreen
        open={true}
        TransitionComponent={Transition}
        keepMounted
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <Container>
          <DialogTitle>
            <CloseButton handleClose={handleClose} />
          </DialogTitle>
          <DialogContent maxWidth="xl">
            <Container>
              {CardData?.map((pg) =>
                pg.pgName === prop.Pgname ? (
                  <>
                    <PgDetailCarousel image={pg.imageUrl} />

                    <PgMainDetails PG={pg} />
                    <Container>
                      <Price pg={pg} />
                    </Container>

                    <Container maxWidth="xl" component="div">
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
                    <Container maxWidth="xl" component="div">
                      <CommonDetails
                        noticePeriod={pg.NoticePeriod}
                        lockInPeriod={pg.LockInPeriod}
                        furnishing={pg.Furnishing}
                      />
                    </Container>

                    <Container>
                      <Typography
                        variant="h6"
                        style={{ marginTop: "2rem", fontWeight: "bold" }}
                      >
                        Facilities
                      </Typography>

                      <Container maxWidth="xl" style={{ marginTop: "2rem" }}>
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
          </DialogContent>
        </Container>
      </Dialog>
    </>
  );
};

export default PgDetail;
