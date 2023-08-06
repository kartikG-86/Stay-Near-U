import React from "react";
import Lottie from "lottie-react";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WifiIcon from "@mui/icons-material/Wifi";
import TableRestaurantIcon from "@mui/icons-material/TableRestaurant";
import KitchenIcon from "@mui/icons-material/Kitchen";
import ChairIcon from "@mui/icons-material/Chair";
import LocalLaundryServiceIcon from "@mui/icons-material/LocalLaundryService";
import DinnerDiningIcon from "@mui/icons-material/DinnerDining";
import ElectricalServicesIcon from "@mui/icons-material/ElectricalServices";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import { Grid, Typography } from "@material-ui/core";
import HotTubIcon from "@mui/icons-material/HotTub";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import ElevatorIcon from "@mui/icons-material/Elevator";
import wifi from "./icons/wifi.json";
import Almirah from "./icons/Almirah.json";
import water from "./icons/water.json";
import Lift from "./icons/Lift.json";
import Geyser from "./icons/Geyser.json";
import Chair from "./icons/Chair.json";
import Food from "./icons/Food.json";
import Ac from "./icons/Ac.json";
import Refrigerator from "./icons/Refrigerator.json";
import WashingMachine from "./icons/WashingMachine.json";
import PowerBackup from "./icons/PowerBackup.json";
import Table from "./icons/Table.json";
import Parking from "./icons/Parking.json";
import Gym from "./icons/Gym.json";
import Microwave from "./icons/Microwave.json";
import RoomClean from "./icons/RoomClean.json";

const Facilities = (prop) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: { Almirah },
    rendererSettings: { preserveAspectRation: "xMidYMid slice" },
  };
  return (
    <>
      <Grid container spacing={4} justifyContent="center">
        {prop.facilities.map((facility, index) => (
          <Grid item md={3} xs={6} align="center">
            {facility == "AC/Non AC" || facility == "Fully AC" ? (
              <div style={{ width: "4rem" }}>
                <Lottie animationData={Ac} loop={true} />
              </div>
            ) : facility == "WiFi" ? (
              <div style={{ width: "4rem", height: "4rem" }}>
                <Lottie animationData={wifi} loop={true} />
              </div>
            ) : facility == "Almirah" ? (
              <div style={{ width: "4rem" }}>
                <Lottie animationData={Almirah} loop={true} />
              </div>
            ) : facility == "Table" ? (
              <div style={{ width: "4rem" }}>
                <Lottie animationData={Table} loop={true} />
              </div>
            ) : facility == "Common Fridge" ? (
              <div style={{ width: "2.8rem" }}>
                <Lottie animationData={Refrigerator} loop={true} />
              </div>
            ) : facility == "Chair" ? (
              <div style={{ width: "4rem" }}>
                <Lottie animationData={Chair} loop={true} />
              </div>
            ) : facility == "Laundry" ? (
              <div style={{ width: "4rem" }}>
                <Lottie animationData={WashingMachine} loop={true} />
              </div>
            ) : facility == "Food" ||
              facility == "With/Without Food" ||
              facility == "Food - Veg Only" ? (
              <div style={{ width: "4rem" }}>
                <Lottie animationData={Food} loop={true} />
              </div>
            ) : facility == "Common Washing machine" ? (
              <div style={{ width: "4rem" }}>
                <Lottie animationData={WashingMachine} loop={true} />
              </div>
            ) : facility == "Power Backup" ? (
              <div style={{ width: "5rem" }}>
                <Lottie animationData={PowerBackup} loop={true} />
              </div>
            ) : facility == "Geyser" ? (
              <div style={{ width: "4rem" }}>
                <Lottie animationData={Geyser} loop={true} />
              </div>
            ) : facility == "Water Purifier" ? (
              <div style={{ width: "4rem" }}>
                <Lottie animationData={water} loop={true} />
              </div>
            ) : facility == "Lift" ? (
              <div style={{ width: "5rem" }}>
                <Lottie animationData={Lift} loop={true} />
              </div>
            ) : facility == "Parking" ? (
              <div style={{ width: "4rem" }}>
                <Lottie animationData={Parking} loop={true} />
              </div>
            ) : facility == "Room Cleaning Service" ? (
              <div style={{ width: "4rem" }}>
                <Lottie animationData={RoomClean} loop={true} />
              </div>
            ) : facility == "Microwave" ? (
              <div style={{ width: "5.5rem" }}>
                <Lottie animationData={Microwave} loop={true} />
              </div>
            ) : facility == "Gym" ? (
              <div style={{ width: "4rem" }}>
                <Lottie animationData={Gym} loop={true} />
              </div>
            ) : (
              <></>
            )}
            <Typography
              variant="body1"
              style={{ marginTop: "1rem", fontWeight: "bold" }}
            >
              {facility}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Facilities;
