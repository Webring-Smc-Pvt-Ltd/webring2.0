import { Box, Text, VStack, Flex, Image } from "@chakra-ui/react";

const teamMembers = [
  { name: "Member 1", image: "/member1.png" },
  { name: "Member 2", image: "/member2.png" },
  { name: "Member 3", image: "/member3.png" },
  { name: "Member 4", image: "/member4.png" },
];

const TeamShowcase = () => {
  return (
    <Box
      maxW="1920px"
      w="100%"
      minH="817px"
      px={{ base: "20px", lg: "100px" }}
      py="50px"
      display="flex"
      flexDirection="column"
      gap="50px"
      bg="#F8F8F6"
      mx="auto"
    >
      {/* Text Section */}
      <VStack w="100%" maxW="1723px" spacing="20px" align="flex-start">
        <Text fontSize="16px" fontWeight="700" letterSpacing="40%" color="#26241C">
          OUR TEAM
        </Text>
        <Text
          fontSize={{ base: "36px", lg: "60px" }}
          fontWeight="900"
          lineHeight={{ base: "44px", lg: "72px" }}
          color="#FED904"
          maxW="639px"
        >
          Our Team Behind the Studio
        </Text>
      </VStack>

      {/* Image Grid */}
      <Flex
        w="100%"
        maxW="1723px"
        flexWrap="wrap"
        align="center"
        gap="20px"
      >
        {teamMembers.map((member, index) => (
          <Image
            key={index}
            src={member.image}
            alt={member.name}
            w={{ base: "100%", md: "calc(50% - 20px)", lg: "377px" }}
            h={{ base: "auto", lg: "466px" }}
            objectFit="cover"
          />
        ))}
      </Flex>
    </Box>
  );
};

export default TeamShowcase;
