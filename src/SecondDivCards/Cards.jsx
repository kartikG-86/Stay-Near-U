import React, { useEffect, useState } from "react";
import db from '../firebase'
import {
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
} from "@mui/material";
import useStyles from "../styles";
// import CardData from "./CardsData";
import { LocationOnOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";
import CardData from "./CardsData";

const Cards = (prop) => {
  const classes = useStyles();

    const [CardsData, setCardData] = useState(CardData);

  //   useEffect(() => {
  //   // Function to fetch the collection and store it in the state
  //   const fetchCollection = async () => {
  //     try {
  //       const collectionRef = db.collection('Cards'); // Replace with your actual collection name
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
  return (
    <>
      <Grid container spacing={4} justifyContent="center">
        {CardsData.map((page, index) => (
          <Grid item xs={12} sm={6} md={4} onClick={prop.openCard}>
            <Link
              to={`/cards/${page.CollegeName}/${page.CollegeCity}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <CardActionArea>
                <Card
                  style={{
                    borderTopLeftRadius: "2rem",
                    borderBottomRightRadius: "2rem",
                  }}
                >
                  <CardMedia
                    className={classes.cardMedia}
                    image={page.imageUrl}
                    title="Random Image"
                  />

                  <CardContent align="left">
                    <Typography variant="body2" component="div">
                      {page.CollegeName} {page.CollegeCity}{" "}
                      {`(${page.AvailablePGs} PG's)`}
                    </Typography>
                    <LocationOnOutlined
                      fontSize="small"
                      style={{
                        color: "green",
                        display: "inline-block",
                        paddingTop: "5px",
                      }}
                    />
                    <Typography variant="button">{page.Country}</Typography>
                  </CardContent>
                </Card>
              </CardActionArea>
            </Link>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Cards;
