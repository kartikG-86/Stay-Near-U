import React from "react";
import MailIcon from "@mui/icons-material/Mail";
import Link from "@mui/material/Link";
import { Instagram, LinkedIn } from "@material-ui/icons";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@material-ui/core";
import useStyles from "../styles";


let cardsData = [
  {
    name: "Kartik Goyal",
    imageUrl:
      "https://images.unsplash.com/photo-1610088441520-4352457e7095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1lbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
    profession: "Developer",
    mailId: "kartikgoyal0852@gmail.com",
    mailHref: "mailto:kartikgoyal0852@gmail.com",
    instaId: "https://www.instagram.com/its__k_g/",
    linkdlnId: "https://www.linkedin.com/in/kartikgoyal08/",
  },
  {
    name: "Dheeraj Baghel",
     imageUrl: "/Images/Dheeraj.png",
    profession: "Developer",
    mailId: "dheerajbaghel1987@gmail.com",
    mailHref: "mailto:dheerajbaghel1987@gmail.com",
    instaId: "https://www.instagram.com/dheeraj_1987_/",
    linkdlnId: "https://www.linkedin.com/in/dheeerajbaghel1987/",
  },
  {
    name: "Deepanshu",
     imageUrl: "./Images/Deepanshu.jpg",
    profession: "Developer",
    mailId: "deepanshua380@gmail.com",
    mailHref: "mailto:deepanshua380@gmail.com",
    instaId: "https://www.instagram.com/deepanshu_380",
    linkdlnId: "https://www.linkedin.com/in/deepanshu380/",
  },
];
const Members = () => {
  const classes = useStyles();
  return (
    <>
      <Typography
        variant="h4"
        style={{ marginBottom: "2rem", fontWeight: "bold" }}
      >
        Founders
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {cardsData.map((data) => (
          <Grid item xs={12} md={4}>
            <Card>
              <CardMedia
                className={classes.cardMedias}
                image={data.imageUrl}
                title="Members Image"
              />

              <CardContent align="left">
                <Typography variant="h5" style={{ fontWeight: "bold" }}>
                  {data.name}
                </Typography>
                <Typography variant="body1">{data.profession}</Typography>
                <Link
                  href={data.mailHref}
                  style={{ color: "black", textDecoration: "none" }}
                >
                  <Typography variant="body1">
                    <MailIcon style={{ marginRight: "0.5rem" }} />
                    {data.mailId}
                  </Typography>
                </Link>
                <Typography>
                  <IconButton>
                    <Link href={data.instaId}>
                      <Instagram style={{ color: "#fa7e1e" }} />
                    </Link>
                  </IconButton>
                  <IconButton>
                    <Link href={data.linkdlnId}>
                      <LinkedIn style={{ color: "#0A66C2" }} />
                    </Link>
                  </IconButton>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Members;
