import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
} from "@mui/material";
import useStyles from "../styles";

const MainContent = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1622127922040-13cab637ee78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    imageContent: "PG For Boys",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1586105251261-72a756497a11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZXJuJTIwYmVkcm9vbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
    imageContent: "PG For Girls",
  },
];

const FirstMainDivCards = () => {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="md">
        <Grid container spacing={4} justifyContent="center">
          {MainContent.map((page, index) => (
            <Grid item xs={12} sm={6} md={4}>
              <CardActionArea>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={page.imageUrl}
                    title="Random Image"
                  />

                  <CardContent align="center">
                    <Typography variant="h5">{page.imageContent}</Typography>
                  </CardContent>
                </Card>
              </CardActionArea>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default FirstMainDivCards;
