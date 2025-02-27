import { Box, Grid, Image, Text } from "@chakra-ui/react";

const techLogos = [
  { name: "Flutter", src: "/flutter.png" },
  { name: "Shopify", src: "/shopify.png" },
  { name: "Android", src: "/android.png" },
  { name: "Amazon", src: "/amazon.png" },
  { name: "React", src: "/react.png" },
];

const TechLogosSection = () => {
  return (
    <Box
      w="100vw"
      maxW="1923px"
      h="374px"
      mx="auto"
      px={{ base: "20px", md: "50px" }}
      display="flex"
      alignItems="center"
      justifyContent="center"
     
    >
      <Grid
        templateColumns={{
          base: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(5, 1fr)",
        }}
        gap="20px"
        w="100%"
        justifyContent="center"
      >
        {techLogos.map((logo, index) => (
          <Box
            key={index}
            w="330px"
            h="200px"
            borderRadius="10px"
            boxShadow="md"
            bg="white"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            transition="0.3s"
            _hover={{ boxShadow: "lg" }}
          >
            <Image
              src={logo.src}
              alt={logo.name}
              w={logo.name === "Amazon" ? "200px" : "134px"} 
              h={logo.name === "Amazon" ? "61px" : "92px"} 
            />
            <Text fontSize="18px" fontWeight="500" mt="10px">
              {logo.name}
            </Text>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default TechLogosSection;
