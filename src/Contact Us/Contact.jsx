import React from "react";
import { Container, Grid, useMediaQuery, useTheme } from "@material-ui/core";
import ContactHeading from "./ContactHeading";
import ContactForm from "./ContactForm";
import Maps from "./Maps";

const Contact = () => {
  //   const [contact, setContact] = useState(false);

  //   let handleContact = () => {
  //     setContact(true);
  //   };

  const theme = useTheme();

  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <main style={{ marginBottom: "3rem" }}>
        <Container component="main" maxWidth="md" style={{ marginTop: "3rem" }}>
          <ContactHeading />
          <Grid
            container
            spacing={2}
            justifyContent="center"
            style={{ marginTop: "2rem" }}
          >
            {!isMatch ? (
              <>
                <Grid item md={6}>
                  <ContactForm />
                </Grid>
                <Grid item md={6}>
                  <img
                    src="https://images.unsplash.com/photo-1599687351724-dfa3c4ff81b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2lybCUyMHdpdGglMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      marginTop: "1.5rem",
                      marginLeft: "2rem",
                    }}
                  />
                </Grid>
              </>
            ) : (
              <>
                <Grid item>
                  <ContactForm />
                </Grid>
              </>
            )}
          </Grid>
        </Container>
        <Container style={{ marginTop: "3rem" }}>
          <Maps />
        </Container>
      </main>
    </>
  );
};

export default Contact;
