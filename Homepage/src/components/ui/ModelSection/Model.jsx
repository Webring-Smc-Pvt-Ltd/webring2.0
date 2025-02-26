import { Box, Flex, Text, Image } from "@chakra-ui/react";

const steps = [
  { title: "Brainstorming Ideas", icon: "/brainstorm.png" },
  { title: "Product Design", icon: "/design.png" },
  { title: "Front-End Development", icon: "/frontend.png" },
  { title: "SEO Optimization", icon: "/seo.png" },
  { title: "Back-End Development", icon: "/backend.png" },
  { title: "Digital Marketing", icon: "/marketing.png" },
];

const OurModelSection = () => {
  return (
    <Flex
      w={{ base: "100%", xl: "1923px" }}
      h={{ base: "auto", xl: "700px" }}
      px={{ base: "20px", xl: "100px" }}
      py={{ base: "30px", xl: "50px" }}
      flexDirection={{ base: "column", xl: "row" }}
      alignItems="center"
      justifyContent="center"
     
    >
      <Box
        w={{ base: "100%", xl: "1721px" }}
        h={{ base: "auto", xl: "600px" }}
        bg="#14140F"
        borderRadius="10px"
        p={{ base: "20px", xl: "50px" }}
        display="flex"
        flexDirection={{ base: "column", xl: "row" }}
        alignItems={{ base: "center", xl: "flex-start" }}
      >
        {/* Left Side Text */}
        <Box w={{ base: "100%", xl: "267px" }} mr={{ xl: "50px" }}>
          <Text fontSize="16px" fontWeight="700" letterSpacing="40%" color="#FED904">
            OUR MODEL
          </Text>
          <Text fontSize={{ base: "40px", xl: "60px" }} fontWeight="900" color="#F8F8F6">
            How we do
          </Text>
          <Text fontSize={{ base: "18px", xl: "24px" }} fontWeight="400" opacity="0.8" color="#F8F8F6">
            Save time and money with our powerful method.
          </Text>
        </Box>

        {/* Diagram */}
        <Flex w={{ base: "100%", xl: "1165px" }} flexWrap="wrap" justifyContent="center" gap="20px">
          {steps.map((step, index) => (
            <Flex
              key={index}
              w={{ base: "100%", md: "255px" }}
              h="100px"
              bg="white"
              borderRadius="10px"
              alignItems="center"
              justifyContent="flex-start"
              p="20px"
              boxShadow="md"
              position="relative"
            >
              {/* Icon */}
              <Flex
                w="50px"
                h="50px"
                bg="#FFFBE6"
                borderRadius="10px"
                alignItems="center"
                justifyContent="center"
                mr="20px"
              >
                <Image src={step.icon} alt={step.title} w="30px" h="30px" />
              </Flex>
              {/* Text */}
              <Text fontSize="18px" fontWeight="500" color="#26241C">
                {step.title}
              </Text>
              {/* Connector Circle */}
              {index !== steps.length - 1 && (
                <Box
                  w="20px"
                  h="20px"
                  borderRadius="50%"
                  bg="#FFFFFF"
                  border="2px solid white"
                  position="absolute"
                  right="-10px"
                  top="40px"
                >
                  <Box w="10px" h="10px" borderRadius="50%" bg="#FED904" mt={1} ml={1} />
                </Box>
              )}
            </Flex>
          ))}
        </Flex>
      </Box>
    </Flex>
  );
};

export default OurModelSection;
