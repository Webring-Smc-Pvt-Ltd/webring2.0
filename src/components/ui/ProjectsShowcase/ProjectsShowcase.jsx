import { Box, Text, VStack, HStack, Image, Flex } from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

const projects = [
  { title: "App Development", image: "/app.png" },
  { title: "Web Development", image: "/web.png" },
  { title: "Social Media Marketing", image: "/social.png" },
  { title: "Graphic Designing", image: "/seo.png" },
  { title: "Game Development", image: "/uiux.png" },
  { title: "Content Writing", image: "/ecommerce.png" },
];

const ProjectShowcase = () => {
  return (
    <Box bg="#F8F8F6" maxW="100%" py="50px" px={{ base: "20px", lg: "100px" }}>
      <Flex direction={{ base: "column", lg: "row" }} justify="space-between" align="start">
        
        {/* Left Text Section */}
        <VStack align="flex-start" spacing="20px" w={{ base: "100%", lg: "429px" }} flexShrink={0}>
          <Text fontSize="16px" fontWeight="700" letterSpacing="10px" color="#FED904">
            PROJECTS
          </Text>
          <Text fontSize={{ base: "35px", lg: "55px" }} fontWeight="800" lineHeight="85px" color="#26241C">
            Showcase of our recognized work
          </Text>
          <Text fontSize="20px" fontWeight="400" lineHeight="28px" color="#4F4B3B" pt={10}>
            Our collaborative approach ensures that we truly understand our clients' unique requirements and challenges.
          </Text>

          {/* Custom Horizontal Line */}
          <Box w="100%" h="1px" bg="#C6C3B3" mt={5}/>

          <VStack align="flex-start" spacing="10px" pt={10}>
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
        <Box flex="1" overflowX="auto" py="10px" ml={200}>
          <HStack spacing="20px" minW="fit-content">
            {projects.map((project, index) => (
              <Box
                key={index}
                w="346px"
                h="595px"
                bg="#000"
                borderRadius="10px"
                position="relative"
                flexShrink="0"
              >
                <Text
                  fontSize="38px"
                  fontWeight="500"
                  color="#FFFFFF"
                  position="absolute"
                  top="34.7px"
                  left="25px"
                  w="239px"
                >
                  {project.title}
                </Text>
                <Image
                  src={project.image}
                  alt={project.title}
                  w="341px"
                  h="320px"
                  position="absolute"
                  top="224.7px"
                  left="50%"
                  transform="translateX(-50%)"
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
