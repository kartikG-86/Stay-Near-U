import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import FilterBox from "./FilterBox";
import CardData from "./PgsData";
import useStyles from "../styles";
import { Link, useParams } from "react-router-dom";
import VerifiedIcon from "@mui/icons-material/Verified";
import Carousels from "./Carousels";
import PgDetail from "./PgDetail";
import db from '../firebase';
const FilterFeature = (prop) => {
  console.log("New                 College");
  const classes = useStyles();
  const [filter, setFilter] = useState(false);
  
  // CardData = db.collection('Pgs').doc();
  const [CardsData, setCardData] = useState(CardData);

  //   useEffect(() => {
  //   // Function to fetch the collection and store it in the state
  //   const fetchCollection = async () => {
  //     try {
  //       const collectionRef = db.collection('Pgs'); // Replace with your actual collection name
  //       const snapshot = await collectionRef.get();
  //       const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  //       setCardData(data);
  //     } catch (error) {
  //       console.error('Error fetching collection:', error);
  //     }
  //   };

  //   fetchCollection();
  //   console.log(CardsData);
  // }, []);

  //  const [filterData, setFilterData] = useState([]);
  // const [minPrice, setMinPrice] = useState("");
  // const [maxPrice, setMaxPrice] = useState("");
  // const [sort, setSort] = useState("");
  // const [tenateType, setTenateType] = useState("");
  // const [roomType, setRoomType] = useState("");
  // const [furnishing, setFurnishing] = useState("");

  // console.log("MinPrice : ", minPrice);
  // console.log("maxPrice : ", maxPrice);
  // console.log("Sort : ", sort);
  // console.log("Tenate Type : ", tenateType);
  // console.log("roomType : ", roomType);
  // console.log("Furnishing : ", furnishing);

  const handleFilter = () => {
    setFilter(!filter);
  };

  const param = useParams();

  const collegeName = (param.name + param.city).toLowerCase();

  // let CardsData = CardData.filter(
  //   (card) => card.collegeName.split(" ").join("").toLowerCase() === collegeName
  // );

  // if (
  //   minPrice != "" ||
  //   maxPrice != "" ||
  //   sort != "" ||
  //   tenateType != "" ||
  //   roomType != "" ||
  //   furnishing != ""
  // ) {
  //   console.log("Hello I am Hereeeeeeeeeeeeeeeeeeee");
  //   CardsData = CardsData.filter((item) => {
  //     if (tenateType == "Boys") {
  //       return item.TenateType.length == 1 && item.TenateType[0] == "Boys";
  //     } else if (tenateType == "Girls") {
  //       return item.TenateType.length == 1 && item.TenateType[0] == "Girls";
  //     } else {
  //       return item.TenateType.length == 2;
  //     }
  //   });
  //   console.log("New Card Dataa", CardsData);
  // }

  const [details, setDetails] = useState(false);
  const [Pgname, setPgname] = useState("");

  const handleDetails = (pgname) => {
    setDetails(!details);
    setPgname(pgname);
  };

  return (
    <>
      <main>
        <Container>
          <Container align="center" style={{ margin: "3rem 0" }}>
            <Typography variant="h5">
              Search PG's by Filters
              <FilterListIcon
                style={{
                  color: prop.check ? "white" : "black",
                  marginLeft: "1rem",
                }}
              />
            </Typography>
          </Container>

          <Container maxWidth="md" style={{ marginBottom: "3rem" }}>
            <FilterBox
              // setFurnishing={setFurnishing}
              // setMaxPrice={setMaxPrice}
              // setMinPrice={setMinPrice}
              // setSort={setSort}
              // setTenateType={setTenateType}
              // setRoomType={setRoomType}
              CardData={CardData}
              setCardData={setCardData}
            />
          </Container>
        </Container>

        <Container>
          <Grid container spacing={4} justifyContent="center">
            {CardsData.map((card) =>
              card.collegeName.split(" ").join("").toLowerCase() ===
              collegeName ? (
                <Grid
                  item
                  xs={12}
                  md={4}
                  style={{ marginBottom: "1rem" }}
                  onClick={() => handleDetails(card.pgName)}
                >
                  <CardActionArea>
                    {/* <Link
                      to={`/${card.collegeName}/${card.pgName}/details`}
                      style={{ textDecoration: "none", color: "black" }}
                    > */}
                    <Card
                      style={{
                        borderTopLeftRadius: "4rem",
                        borderBottomRightRadius: "4rem",
                      }}
                    >
                      {/* <CardMedia
                        className={classes.cardMedia}
                        image={card.imageUrl.bedroom}
                        title="Random Image"
                      /> */}
                      <CardMedia>
                        <Carousels imageUrl={card.imageUrl} height="16rem" />
                      </CardMedia>
                      <CardContent align="left">
                        <VerifiedIcon
                          style={{ color: "Green", marginRight: "0.5rem" }}
                        />
                        <Typography
                          variant="button"
                          style={{ fontWeight: "bold" }}
                        >
                          {card.pgName}
                        </Typography>

                        <Typography
                          variant="h6"
                          style={{ marginTop: "0.7rem" }}
                        >
                          {card.price.length > 1
                            ? `₹ ` +
                              card.price[card.price.length - 1] +
                              `/bed  -  `
                            : ""}
                          ₹ {card.price[0]}
                          {card.OccupancyType[0] === "Single Room"
                            ? "/room"
                            : "/bed"}
                        </Typography>
                        <Grid
                          container
                          spacing={2}
                          justifyContent="center"
                          style={{ marginTop: "1rem" }}
                        >
                          {card.OccupancyType.map((type) => (
                            <Grid
                              item
                              md={4}
                              style={{ fontWeight: "bold", padding: "1rem" }}
                            >
                              {type}
                            </Grid>
                          ))}
                        </Grid>
                      </CardContent>
                    </Card>
                    {/* </Link> */}
                  </CardActionArea>
                </Grid>
              ) : (
                <></>
              )
            )}
          </Grid>
          {details && (
            <PgDetail
              Pgname={Pgname}
              setDetails={setDetails}
              details={details}
            />
          )}
        </Container>
      </main>
    </>
  );
};

export default FilterFeature;
