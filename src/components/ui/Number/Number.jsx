import { Box, Flex, Text } from "@chakra-ui/react";

const StatsSection = () => {
  return (
    <Box
      w="100%"
      maxW="1922px"
      px={{ base: "20px", md: "50px", lg: "100px" }}
      py={{ base: "30px", md: "40px", lg: "50px" }}
      mx="auto"
    >
      <Flex
        justify={{ base: "center", md: "space-between" }}
        align="center"
        wrap="wrap"
        gap={{ base: "40px", md: "80px", lg: "134px" }}
      >
        {/* Active Users */}
        <StatBox number="5M+" title="Active Users Worldwide">
          Delivering seamless digital experiences through cutting-edge web and mobile apps.
        </StatBox>

        {/* Rated for Excellence */}
        <StatBox number="4.8" title="Rated for Excellence">
          Trusted by users and clients for delivering high-quality, reliable solutions.
        </StatBox>

        {/* Industries Transformed */}
        <StatBox number="100+" title="Industries Transformed">
          We’ve left a mark across 100+ sectors with scalable websites, innovative mobile applications and Shopify stores.
        </StatBox>
      </Flex>
    </Box>
  );
};

// Reusable StatBox Component
const StatBox = ({ number, title, children }) => {
  return (
    <Flex
      direction="column"
      align="center"
      w={{ base: "100%", md: "320px" }}
      h="auto"
      textAlign="center"
    >
      <Text
        fontFamily="Yantramanav"
        fontWeight="900"
        fontSize={{ base: "40px", md: "50px", lg: "60px" }}
        lineHeight={{ base: "50px", md: "60px", lg: "72px" }}
        color="#FED904"
      >
        {number}
      </Text>

      <Text
        fontFamily="Yantramanav"
        fontWeight="700"
        fontSize={{ base: "20px", md: "22px", lg: "24px" }}
        lineHeight={{ base: "24px", md: "26px", lg: "28.8px" }}
        color="#26241C"
      >
        {title}
      </Text>

      <Text
        fontFamily="Yantramanav"
        fontWeight="400"
        fontSize={{ base: "16px", md: "18px" }}
        lineHeight={{ base: "20px", md: "21.6px" }}
        textAlign="center"
        w={{ base: "100%", md: "320px" }}
      >
        {children}
      </Text>
    </Flex>
  );
};

export default StatsSection;
