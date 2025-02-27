import { Box, Flex, Image, Text } from "@chakra-ui/react";

const CustomITSection = () => {
  return (
    <Flex
      w={{ base: "100%", xl: "1923px" }}
      h={{ base: "auto", xl: "628px" }}
      mx="auto"
      gap={{ base: "50px", xl: "306px" }}
      px={{ base: "20px", xl: "100px" }}
      py={{ base: "30px", xl: "50px" }}
      flexDirection={{ base: "column", md: "row" }}
      alignItems="center"
    >
      <Box w={{ base: "100%", xl: "698px" }}>
        <Text
          fontFamily="Yantramanav"
          fontWeight="700"
          fontSize="16px"
          lineHeight="24px"
          letterSpacing="40%"
          color="#26241C"
        >
          WHO WE ARE
        </Text>
        <Text
          fontFamily="Yantramanav"
          fontWeight="900"
          fontSize={{ base: "40px", xl: "60px" }}
          lineHeight={{ base: "50px", xl: "72px" }}
          letterSpacing="0%"
          color="#FED904"
          mt="10px"
        >
          Custom IT Solutions for Your Business
        </Text>
        <Text
          fontFamily="Yantramanav"
          fontWeight="400"
          fontSize="20px"
          lineHeight="28px"
          letterSpacing="0%"
          color="#4F4B3B"
          mt="20px"
        >
          At Webring, we are committed to delivering value, innovation, and exceptional customer service to our clients, and we strive to be a trusted partner in their digital transformation journey.
        </Text>
        <Text
          fontFamily="Yantramanav"
          fontWeight="400"
          fontSize="20px"
          lineHeight="28px"
          letterSpacing="0%"
          color="#4F4B3B"
          mt="20px"
        >
          Introducing WeBring, your innovative digital solutions partner for the best IT & business solutions. Our digital solution agency listens carefully to your vision and creates tailored, unique strategies to elevate your online presence with its creative staffing. With dedicated creative staffing, open communication, and timely delivery, we go beyond expectations to bring your ideas to life.
        </Text>
      </Box>
      <Image
        src="/img.png"
        alt="IT Solutions"
        w={{ base: "100%", xl: "716px" }}
        h={{ base: "auto", xl: "528px" }}
        borderRadius="12px"
        objectFit="cover"
      />
    </Flex>
  );
};

export default CustomITSection;
