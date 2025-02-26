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
      w={{ base: "100%", xl: "1923px" }}
      h={{ base: "auto", xl: "430px" }}
      mx="auto"
      gap={{ base: "50px", xl: "117px" }}
      px={{ base: "20px", xl: "100px" }}
      py={{ base: "30px", xl: "50px" }}
      flexDirection={{ base: "column", md: "row" }}
      justifyContent="center"
      alignItems="center"
    >
      {services.map((service, index) => (
        <Flex
          key={index}
          w={{ base: "100%", md: "799px" }}
          h={{ base: "auto", xl: "330px" }}
          bg="#F8F8F6"
          borderRadius="22px"
          p="30px"
          alignItems="center"
          boxShadow="md"
        >
          <Image
            src={service.logo}
            alt={service.title}
            w="284px"
            h="270px"
            borderRadius="18px"
            mr="30px"
          />
          <Box textAlign="left">
            <Text fontFamily="Yantramanav" fontWeight="900" fontSize="50px" lineHeight="60px" color="#26241C">
              {service.title}
            </Text>
            <Text fontFamily="Yantramanav" fontWeight="400" fontSize="24px" lineHeight="28.8px" color="#4F4B3B" mt="10px">
              {service.description}
            </Text>
            {service.title === "Consulting" && (
              <Button mt="20px" bg="yellow.400" color="black" _hover={{ bg: "yellow.500" }}>
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