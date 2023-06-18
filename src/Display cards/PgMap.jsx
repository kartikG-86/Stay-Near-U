// import React, { useState } from "react";
// import { Container } from "@mui/material";
// import Maps from "../Contact Us/Maps";

// const NOMINATIM_BASE_URL =
//   "https://nominatim.openstreetmap.org/search?q=135+pilkington+avenue,+birmingham&format=xml&polygon_geojson=1&addressdetails=1";

// const PgMap = (prop) => {
//   let position;
//   const [listPlace, setListPlace] = useState([]);
//   const params = {
//     q: prop.address,
//     format: "json",
//     addressdetails: 1,
//     polygon_geojson: 0,
//   };

//   const queryString = new URLSearchParams(params).toString();
//   const requestOptions = {
//     method: "GET",
//     redirect: "follow",
//   };

//   fetch(`${NOMINATIM_BASE_URL}${queryString}`, requestOptions)
//     .then((response) => response.text())
//     .then((result) => {
//       console.log(JSON.parse(result)[0].address);
//       setListPlace(JSON.parse(result));
//     })
//     .catch((err) => console.log("err: ", err));

//   return (
//     <>
//       <Container>
//         {listPlace.size > 1 && <Maps position={listPlace[0]} />}
//       </Container>
//     </>
//   );
// };

// export default PgMap;
