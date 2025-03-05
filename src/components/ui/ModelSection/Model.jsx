import { Box, Flex, Text, Image, Grid } from "@chakra-ui/react";

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
      w="100%"
      maxW="1920px"
      h="auto"
      px={{ base: "20px", xl: "100px" }}
      py={{ base: "30px", xl: "50px" }}
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        w="100%"
        maxW="1721px"
        bg="#14140F"
        borderRadius="10px"
        p={{ base: "20px", xl: "50px" }}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        {/* Left Side Text */}
        <Box textAlign="center" mb="30px">
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
        <Grid
          templateColumns={{
            base: "repeat(1, minmax(0, 1fr))",
            md: "repeat(2, minmax(0, 1fr))",
            lg: "repeat(3, minmax(0, 1fr))",
          }}
          gap="20px"
          w="100%"
        >
          {steps.map((step, index) => (
            <Flex
              key={index}
              w="100%"
              maxW="255px"
              h="100px"
              bg="white"
              borderRadius="10px"
              alignItems="center"
              justifyContent="flex-start"
              p="20px"
              boxShadow="md"
              position="relative"
              mx="auto"
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
              {/* Connector Circle (Hidden on small screens) */}
              {index !== steps.length - 1 && (
                <Box
                  display={{ base: "none", md: "block" }}
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
        </Grid>
      </Box>
    </Flex>
  );
};

export default OurModelSection;
