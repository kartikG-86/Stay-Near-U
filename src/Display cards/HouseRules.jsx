import { Container, Grid } from "@mui/material";
import { Box, Flex, Text } from "@chakra-ui/layout";
import React from "react";

const HouseRules = (props) => {
  return (
    <>
      <Box>
        {props.houseRules.length && (
          <Text
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              marginTop: "5rem",
            }}
          >
            House Rules:
          </Text>
        )}
        <Flex flexWrap="wrap" style={{ cursor: "pointer" }}>
          {props.houseRules?.map((item) => (
            <Text
              key={item}
              style={{
                fontWeight: "bold",
                color: "blue",
                fontSize: "1rem",
                padding: "10px",
                background: "#EEEEEE",
                margin: "10px",
                borderRadius: "5px",
              }}
              //   fontWeight="bold"
              //   color="blue.400"
              //   fontSize="l"
              //   p="2"
              //   bg="gray.200"
              //   m="1"
              //   borderRadius="5"
            >
              {item}
            </Text>
          ))}
        </Flex>
      </Box>
    </>
  );
};

export default HouseRules;
