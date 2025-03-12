import { Box, Flex, Image, Text, Button } from "@chakra-ui/react";

const services = [
  {
    title: "Development",
    description:
      "We are a full-service leading Web & App Development company offering a wide range of digital solutions.",
    logo: "/webring.png",
  },
  {
    title: "Consulting",
    description:
      "We are a full-service leading Microsoft Consulting Services company offering a wide range of digital solutions.",
    logo: "/asture.png",
  },
];

const ServicesSection = () => {
  return (
    <Flex
      w="100%"
      maxW="1920px"
      mx="auto"
      gap={{ base: "30px", md: "50px", xl: "117px" }}
      px={{ base: "20px", md: "50px", xl: "100px" }}
      py={{ base: "30px", md: "40px", xl: "50px" }}
      flexDirection={{ base: "column", md: "row" }}
      justifyContent="center"
      alignItems="center"
      flexWrap="wrap"
    >
      {services.map((service, index) => (
        <Flex
          key={index}
          w={{ base: "100%", md: "48%", lg: "799px" }}
          h="auto"
          bg="#F8F8F6"
          borderRadius="22px"
          p={{ base: "20px", md: "30px" }}
          alignItems="center"
          flexDirection={{ base: "column", md: "row" }}
          boxShadow="md"
        >
          <Image
            src={service.logo}
            alt={service.title}
            w={{ base: "200px", md: "284px" }}
            h={{ base: "180px", md: "270px" }}
            borderRadius="18px"
            mb={{ base: "20px", md: "0" }}
            mr={{ md: "30px" }}
          />
          <Box textAlign={{ base: "center", md: "left" }}>
            <Text
              fontFamily="Yantramanav"
              fontWeight="900"
              fontSize={{ base: "30px", md: "40px", lg: "50px" }}
              lineHeight={{ base: "40px", md: "50px", lg: "60px" }}
              color="#26241C"
            >
              {service.title}
            </Text>
            <Text
              fontFamily="Yantramanav"
              fontWeight="400"
              fontSize={{ base: "18px", md: "20px", lg: "24px" }}
              lineHeight={{ base: "24px", md: "26px", lg: "28.8px" }}
              color="#4F4B3B"
              mt="10px"
            >
              {service.description}
            </Text>
            {service.title === "Consulting" && (
              <Button
                mt="20px"
                bg="yellow.400"
                color="black"
                _hover={{ bg: "yellow.500" }}
              >
                Learn More
              </Button>
            )}
          </Box>
        </Flex>
      ))}
    </Flex>
  );
};

export default ServicesSection;
