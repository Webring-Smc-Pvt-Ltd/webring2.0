import { Box, Text, VStack, HStack, Image, Flex } from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

const projects = [
  { title: "App Development", image: "/app.png" },
  { title: "Web Development", image: "/web.png" },
  { title: "Social Media Marketing", image: "/social.png" },
  { title: "Graphic Designing", image: "/graphic-designing.png" },
  { title: "Game Development", image: "/game-development.png" },
  { title: "Content Writing", image: "/ecommerce.png" },
];

const ProjectShowcase = () => {
  return (
    <Box bg="#F8F8F6" maxW="100%" py="50px" px={{ base: "20px", lg: "100px" }}>
      <Flex 
        direction={{ base: "column", lg: "row" }} 
        justify="space-between" 
        align={{ base: "center", lg: "start" }} 
        gap={{ base: "50px", lg: "0" }}
      >
        
        {/* Left Text Section */}
        <VStack 
          align={{ base: "center", lg: "flex-start" }} 
          textAlign={{ base: "center", lg: "left" }} 
          spacing="20px" 
          w={{ base: "100%", lg: "429px" }} 
          flexShrink={0}
        >
          <Text fontSize="16px" fontWeight="700" letterSpacing="0.5rem" color="#FED904">
            PROJECTS
          </Text>
          <Text fontSize={{ base: "28px", md: "40px", lg: "55px" }} fontWeight="800" lineHeight={{ base: "40px", lg: "85px" }} color="#26241C">
            Showcase of our recognized work
          </Text>
          <Text fontSize="20px" fontWeight="400" lineHeight="28px" color="#4F4B3B" pt={4}>
            Our collaborative approach ensures that we truly understand our clients' unique requirements and challenges.
          </Text>

          {/* Custom Horizontal Line */}
          <Box w="100%" h="1px" bg="#C6C3B3" mt={5}/>

          <VStack align="flex-start" spacing="10px" pt={6}>
            {[
              "Managed Services and Products",
              "Flexibility and Adaptability",
              "Competitive Advantage",
            ].map((item, index) => (
              <HStack key={index}>
                <FaCheckCircle color="#FED904"/>
                <Text fontSize="18px" fontWeight="400" color="#4F4B3B">
                  {item}
                </Text>
              </HStack>
            ))}
          </VStack>
        </VStack>

        {/* Slider Section */}
        <Box flex="1" overflowX={{ base: "auto", lg: "hidden" }} py="10px" ml={{ base: "0", lg: "50px" }} maxW="100%">
          <HStack spacing="20px" minW="fit-content" overflowX={{ base: "auto", lg: "visible" }} px={{ base: "10px", lg: "0" }}>
            {projects.map((project, index) => (
              <Box
                key={index}
                w={{ base: "250px", md: "300px", lg: "346px" }}
                h={{ base: "450px", md: "500px", lg: "595px" }}
                bg="#000"
                borderRadius="10px"
                position="relative"
                flexShrink="0"
              >
                <Text
                  fontSize={{ base: "24px", md: "30px", lg: "38px" }}
                  fontWeight="500"
                  color="#FFFFFF"
                  position="absolute"
                  top="34.7px"
                  left="25px"
                  w="80%"
                >
                  {project.title}
                </Text>
                <Image
                  src={project.image}
                  alt={project.title}
                  w="90%"
                  h="auto"
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  objectFit="contain"
                />
              </Box>
            ))}
          </HStack>
        </Box>
      </Flex>
    </Box>
  );
};

export default ProjectShowcase;
