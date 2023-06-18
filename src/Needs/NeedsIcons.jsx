import React from "react";
import { Wifi, FitnessCenter, LiveTv } from "@material-ui/icons";
import DinnerDiningIcon from "@mui/icons-material/DinnerDining";
import SportsGymnasticsIcon from "@mui/icons-material/SportsGymnastics";
import PedalBikeIcon from "@mui/icons-material/PedalBike";
import { Grid, Typography } from "@material-ui/core";

const NeedsIcons = () => {
  return (
    <>
      <Grid
        container
        spacing={3}
        justifyContent="center"
        style={{ marginTop: "1rem", border: "3px solid #EEEEEE" }}
      >
        <Grid item xs={4} sm={4} md={4} align="center">
          <Typography variant="button">
            <Wifi style={{ marginRight: "0.2rem" }} />
            Free Wifi
          </Typography>
        </Grid>
        <Grid item xs={4} sm={4} md={4} align="center">
          <Typography variant="button">
            <FitnessCenter style={{ marginRight: "0.2rem" }} />
            Gym
          </Typography>
        </Grid>
        <Grid item xs={4} sm={4} md={4} align="center">
          <Typography variant="button">
            <DinnerDiningIcon style={{ marginRight: "0.2rem" }} />
            Breakfast
          </Typography>
        </Grid>
        <Grid item xs={4} sm={4} md={4} align="center">
          <Typography variant="button">
            <LiveTv style={{ marginRight: "0.2rem" }} />
            Tv
          </Typography>
        </Grid>
        <Grid item xs={4} sm={4} md={4} align="center">
          <Typography variant="button">
            <SportsGymnasticsIcon style={{ marginRight: "0.2rem" }} />
            Fitness Center
          </Typography>
        </Grid>
        <Grid item xs={4} sm={4} md={4} align="center">
          <PedalBikeIcon style={{ marginRight: "0.2rem" }} />
          <Typography variant="button">Free Parking</Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default NeedsIcons;
