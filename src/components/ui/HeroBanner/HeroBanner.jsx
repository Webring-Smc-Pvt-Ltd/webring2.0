import { Box, Button, Text, VStack } from "@chakra-ui/react";

const HeroBanner = () => {
  return (
    <Box
      w="1920px"
      h="916px"
      position="relative"
      backgroundImage="url('/pic.png')" // Update this path
      backgroundSize="cover"
      backgroundPosition="center"
    >
      <Box
        w="970px"
        h="439px"
        position="absolute"
        top="227.63px"
        left="99.37px"
        display="flex"
        flexDirection="column"
      >
        {/* Text and Button Wrapper */}
        <VStack align="start" spacing="40px">
          {/* Empowerment Text */}
          <Text
            fontFamily="Syne"
            fontWeight="600"
            fontSize="22px"
            lineHeight="22.94px"
            letterSpacing="6.83px"
            color="#FED904"
            textTransform="uppercase"
          >
            Empowerment
          </Text>

          {/* Main Heading */}
          <Text
            fontFamily="Yantramanav"
            fontWeight="500"
            fontSize="130px"
            lineHeight="168.59px"
            letterSpacing="-2.73px"
            color="white"
          >
            One Stop Solution
          </Text>

          {/* Description */}
          <Text
            fontFamily="DM Sans"
            fontWeight="400"
            fontSize="32px"
            lineHeight="51.2px"
            letterSpacing="0%"
            color="white"
            w="970px"
          >
            We are a full-service leading Web & App Development company offering a wide range of digital solutions.
          </Text>

          {/* Call-to-Action Button */}
          <Button
            w="242px"
            h="82px"
            borderRadius="5.38px"
            p="20px 32px"
            bg="#FED904"
            color="black"
            fontSize="22px"
            fontWeight="600"
            _hover={{ bg: "yellow.500" }}
            top={20}
          >
            Let's Talk →
          </Button>
        </VStack>
      </Box>
    </Box>
  );
};

export default HeroBanner;
