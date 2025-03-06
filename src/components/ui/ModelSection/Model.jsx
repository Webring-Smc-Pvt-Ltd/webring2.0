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
        flexDirection={{ base: "column", md: "row" }}
        justifyContent="space-between"
      >
        {/* Left Side Text */}
        <Box flex="1" mb={{ base: "30px", md: "0" }} pr={{ md: "50px" }}>
          <Text fontSize="16px" fontWeight="700" letterSpacing="10px" color="#FED904">
            OUR MODEL
          </Text>
          <Text fontSize={{ base: "40px", xl: "60px" }} fontWeight="900" color="#F8F8F6">
            How we do
          </Text>
          <Text fontSize={{ base: "18px", xl: "24px" }} fontWeight="400" opacity="0.8" color="#F8F8F6" pt={4}>
            Save time and money with<br/> our powerful method.
          </Text>
        </Box>

        {/* Right Side Diagram */}
        <Grid
          flex="1"
          templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
          gap="30px"
          w="100%"
          justifyItems="center"
          alignItems="center"
        >
          {/* Row 1 */}
          {steps.slice(0, 3).map((step, index) => (
            <Box key={index}>
              <Flex
                w="268px"
                h="100px"
                bg="white"
                borderRadius="10px"
                alignItems="center"
                justifyContent="flex-start"
                p="20px"
                boxShadow="md"
                mx="auto"
              >
                
                <Flex w="50px" h="50px" bg="#FFFBE6" borderRadius="10px" alignItems="center" justifyContent="center" mr="20px">
                  <Image src={step.icon} alt={step.title} w="30px" h="30px" />
                </Flex>
                <Text fontSize="18px" fontWeight="500" color="#26241C">{step.title}</Text>
              </Flex>
            </Box>
          ))}

          {/* Row 2 (Centered) */}
          <Box w="268px" h="152px" />
          {steps.slice(3, 5).map((step, index) => (
            <Box key={index}>
              <Flex
                w="268px"
                h="100px"
                bg="white"
                borderRadius="10px"
                alignItems="center"
                justifyContent="flex-start"
                p="20px"
                boxShadow="md"
                mx="auto"
              >
                <Flex w="50px" h="50px" bg="#FFFBE6" borderRadius="10px" alignItems="center" justifyContent="center" mr="20px">
                  <Image src={step.icon} alt={step.title} w="30px" h="30px" />
                </Flex>
                <Text fontSize="18px" fontWeight="500" color="#26241C">{step.title}</Text>
              </Flex>
            </Box>
          ))}

          {/* Row 3 (Single Box Centered) */}
          <Box w="268px" h="152px" />
          <Flex
            w="268px"
            h="100px"
            bg="white"
            borderRadius="10px"
            alignItems="center"
            justifyContent="flex-start"
            p="20px"
            boxShadow="md"
            mx="auto"
          >
            <Flex w="50px" h="50px" bg="#FFFBE6" borderRadius="10px" alignItems="center" justifyContent="center" mr="20px">
              <Image src={steps[5].icon} alt={steps[5].title} w="30px" h="30px" />
            </Flex>
            <Text fontSize="18px" fontWeight="500" color="#26241C">{steps[5].title}</Text>

            
          </Flex>
        </Grid>
      </Box>
    </Flex>
  );
};

export default OurModelSection;
