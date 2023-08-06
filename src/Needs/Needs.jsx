import React from "react";
import { useMediaQuery, useTheme, Container, Grid } from "@material-ui/core";
import NeedsHeading from "./NeedsHeading";
import NeedsContent from "./NeedContent";
import NeedsIcons from "./NeedsIcons";

const Needs = () => {
  const theme = useTheme();

  const isMatch = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <>
      <main style={{ paddingTop: "4rem" }}>
        <Container>
          <Grid container spacing={2} justifyContent="center">
            {isMatch ? (
              <>
                <Grid item sm={4} md={4} lg={6}>
                  <img
                    src="https://media.istockphoto.com/id/1149521187/photo/full-furnished-living-room.jpg?b=1&s=170667a&w=0&k=20&c=Lcy5eeT5wpyP3EEU1ZeKLEa3E35-FdCFbqWm139EiE8="
                    style={{ maxWidth: "100%", height: "100%" }}
                  />
                </Grid>
                <Grid item sm={8} md={8} lg={6}>
                  <NeedsHeading />
                  <NeedsContent />
                  <NeedsIcons />
                </Grid>
              </>
            ) : (
              <>
                <Grid item>
                  <NeedsHeading />
                  <NeedsContent />
                  <NeedsIcons />
                </Grid>
              </>
            )}
          </Grid>
        </Container>
      </main>
    </>
  );
};

export default Needs;
