import { Box, Text, VStack, HStack, Image, Flex } from "@chakra-ui/react";

const teamMembers = [
  { name: "Member 1", image: "/member1.png" },
  { name: "Member 2", image: "/member2.png" },
  { name: "Member 3", image: "/member3.png" },
  { name: "Member 4", image: "/member4.png" },
];

const TeamShowcase = () => {
  return (
    <Box
      w="1923px"
      h="817px"
      maxW="100%"
      px={{ base: "20px", lg: "100px" }}
      py="50px"
      display="flex"
      flexDirection="column"
      gap="80px"
      bg="#F8F8F6"
    >
      {/* Text Section (Left Aligned) */}
      <VStack w="1723px" h="171px" spacing="20px" align="flex-start">
        <Text
          fontSize="16px"
          fontWeight="700"
          letterSpacing="40%"
          color="#26241C"
          fontFamily="Yantramanav"
        >
          OUR TEAM
        </Text>
        <Text
          fontSize={{ base: "40px", lg: "60px" }}
          fontWeight="900"
          lineHeight="72px"
          color="#FED904"
          fontFamily="Yantramanav"
          w={{ base: "100%", lg: "639px" }}
        >
          Our Team Behind the Studio
        </Text>
      </VStack>

      {/* Image Grid */}
      <Flex
        w="1723px"
        h="466px"
        gap="70px"
        flexWrap="wrap"
        justify="center"
        align="center"
      >
        {teamMembers.map((member, index) => (
          <Image
            key={index}
            src={member.image}
            alt={member.name}
            w="377.68px"
            h="466.68px"
            objectFit="cover"
          />
        ))}
      </Flex>
    </Box>
  );
};

export default TeamShowcase;
