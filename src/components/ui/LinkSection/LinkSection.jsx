import { Box, Image, Text, HStack } from "@chakra-ui/react";
import { useRef } from "react";

const techLogos = [
  { name: "Flutter", src: "/flutter.png" },
  { name: "Shopify", src: "/shopify.png" },
  { name: "Android", src: "/android.png" },
  { name: "Amazon", src: "/amazon.png" },
  { name: "React", src: "/react.png" },
  { name: "Node.js", src: "/flutter.png" },
  { name: "Python", src: "/shopify.png" },
  { name: "Docker", src: "/android.png" }
];

const TechLogosSection = () => {
  const scrollRef = useRef(null);
  let isDragging = false;
  let startX;
  let scrollLeft;

  const startDrag = (e) => {
    isDragging = true;
    startX = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft = scrollRef.current.scrollLeft;
  };

  const stopDrag = () => {
    isDragging = false;
  };

  const doDrag = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <Box w="100%" maxW="1923px" h="374px" mx="auto" px={{ base: "20px", md: "50px" }} display="flex" alignItems="center" justifyContent="center">
      <Box position="relative" w="100%" overflow="hidden">
        <HStack
          ref={scrollRef}
          spacing="20px"
          overflowX="auto"
          whiteSpace="nowrap"
          scrollBehavior="smooth"
          css={{
            '&::-webkit-scrollbar': { display: 'none' },
            '-ms-overflow-style': 'none',
            'scrollbar-width': 'none'
          }}
          onMouseDown={startDrag}
          onMouseLeave={stopDrag}
          onMouseUp={stopDrag}
          onMouseMove={doDrag}
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
              flexShrink="0"
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
        </HStack>
      </Box>
    </Box>
  );
};

export default TechLogosSection;
