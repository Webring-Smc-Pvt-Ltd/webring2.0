import { Box, Flex, Text } from "@chakra-ui/react";

const StatsSection = () => {
  return (
    <Box
      w="100vw"
      maxW="1922px"
      h="273px"
      px={{ base: "50px", md: "213px" }}
      py="50px"
      mx="auto"
    >
      <Flex justify="space-between" align="center" wrap="wrap" gap="134px">
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
      w="320px"
      h="151px"
      textAlign="center"
    >
      <Text
        fontFamily="Yantramanav"
        fontWeight="900"
        fontSize="60px"
        lineHeight="72px"
        letterSpacing="0%"
        color="#FED904"
      >
        {number}
      </Text>

      <Text
        fontFamily="Yantramanav"
        fontWeight="700"
        fontSize="24px"
        lineHeight="28.8px"
        letterSpacing="0%"
        color="#26241C"
      >
        {title}
      </Text>

      <Text
        fontFamily="Yantramanav"
        fontWeight="400"
        fontSize="18px"
        lineHeight="21.6px"
        letterSpacing="0%"
        textAlign="center"
        w="320px"
      >
        {children}
      </Text>
    </Flex>
  );
};

export default StatsSection;
