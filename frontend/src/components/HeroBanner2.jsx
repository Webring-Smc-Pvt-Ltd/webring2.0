import React from "react";
import { Box, Text } from "@chakra-ui/react";

const HeroBanner2 = () => {
  return (
    <Box
      width="100%"
      height="543px"
      backgroundImage="url('/.png')"
      backgroundSize="cover"
      backgroundPosition="center"
      position="relative"
      
      display="flex"
      justifyContent="center"
      alignItems="center"
     
    >
      <Box position="relative">
        <Text
          fontFamily="Yantramanav"
          fontWeight="700"
          fontSize="96px"
          lineHeight="120%"
          letterSpacing="0%"
          color="#F6F8F8"
          textAlign="center"
        >
          Services
        </Text>
      </Box>
    </Box>
  );
};

export default HeroBanner2;
