import { Box, Image, Text, HStack } from "@chakra-ui/react";
import { useRef } from "react";

const techLogos = [
  { name: "Javascript", src: "/javascript.png" },
  { name: "WordPress", src: "/wordpress.png" },
  { name: "Flutter", src: "/flutter.png" },
  { name: "Shopify", src: "/shopify.png" },
  { name: "Android", src: "/android.png" },
  { name: "Amazon", src: "/amazon.png" },
  { name: "React", src: "/react.png" },
  { name: "Mongo DB", src: "/mongodb.png" },
  { name: "Laravel", src: "/laravel.png" }
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
    <Box 
      w="100%" 
      maxW="1923px" 
      h="auto" 
      mx="auto" 
      px={{ base: "10px", sm: "20px", md: "50px" }} 
      display="flex" 
      alignItems="center" 
      justifyContent="center"
      overflowX="hidden"
    >
      <Box position="relative" w="100%" overflow="hidden">
        <HStack
          ref={scrollRef}
          spacing={{ base: "10px", md: "20px" }}
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
          w="100%"
          pb={{ base: "10px", md: "20px" }} // Prevents horizontal scrollbars
        >
          {techLogos.map((logo, index) => (
            <Box
              key={index}
              w={{ base: "250px", sm: "280px", md: "330px" }}
              h={{ base: "150px", md: "200px" }}
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
                w={logo.name === "Amazon" ? { base: "150px", md: "220px" } : { base: "100px", md: "134px" }}
                h={logo.name === "Amazon" ? { base: "40px", md: "65px" } : { base: "70px", md: "92px" }}
              />
              <Text fontSize={{ base: "14px", md: "18px" }} fontWeight="500" pt={{ base: 4, md: 8 }}>
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
