import { Box, Text, VStack, HStack, Image, Flex } from "@chakra-ui/react";
import { useRef } from "react";

const testimonials = [
  {
    name: "Sophia Moore",
    role: "CEO at Webflow Agency",
    image: "/sophia.png",
    quote: "The best Webflow Templates",
    feedback:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
  },
  {
    name: "Adam Smith",
    role: "Webflow Developer",
    image: "/adam.png",
    quote: "BRIX Templates is the #1",
    feedback:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
  },
  {
    name: "Mike Warren",
    role: "Developer at BRIX",
    image: "/mike.png",
    quote: "Webflow is the best",
    feedback:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
  },
];

const Testimonials = () => {
  const sliderRef = useRef(null);

  const handleWheelScroll = (event) => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += event.deltaY;
    }
  };

  return (
    <Box
      w="100%"
      maxW="1920px"
      mx="auto"
      px={{ base: "20px", lg: "100px" }}
      py="50px"
      bg="#F8F8F6"
      overflow="hidden"
    >
      {/* Header Section */}
      <VStack w="100%" maxW="1823px" spacing="20px" align={{ base: "center", lg: "flex-start" }} textAlign={{ base: "center", lg: "left" }}>
        <Text
          fontSize="16px"
          fontWeight="700"
          letterSpacing="8px"
          color="#26241C"
          fontFamily="Yantramanav"
        >
          TESTIMONIALS
        </Text>
        <Text
          fontSize={{ base: "32px", md: "50px", lg: "60px" }}
          fontWeight="900"
          lineHeight={{ base: "40px", md: "60px", lg: "72px" }}
          color="#FED904"
          fontFamily="Yantramanav"
          w="100%"
          maxW="1823px"
        >
          Don't take our word for it
        </Text>
      </VStack>

      {/* Slider Section */}
      <Box w="100%" maxW="1721px" mt={10} overflow="hidden">
        <Flex
          ref={sliderRef}
          overflowX="auto"
          scrollBehavior="smooth"
          onWheel={handleWheelScroll}
          sx={{
            '&::-webkit-scrollbar': {
              display: 'none',
            },
          }}
          gap={{ base: "10px", md: "20px" }}
          px={{ base: "10px", lg: "0" }}
        >
          {testimonials.map((testimonial, index) => (
            <Box
              key={index}
              bg="#131313"
              minW={{ base: "90%", md: "678px" }}
              maxW={{ base: "90%", md: "678px" }}
              h={{ base: "auto", md: "481px" }}
              borderRadius="20px"
              p="40px"
              boxShadow="0px 5.42px 18.98px 0px #2427291A"
              mx="10px"
            >
              {/* Quote */}
              <Text
                fontSize={{ base: "22px", md: "30px" }}
                fontWeight="700"
                lineHeight="38px"
                color="#F8F8F6"
                fontFamily="DM Sans"
                mb="20px"
                ml={{ base: "0", md: "10px" }}
                textAlign={{ base: "center", md: "left" }}
              >
                "{testimonial.quote}"
              </Text>

              {/* Feedback */}
              <Text
                fontSize={{ base: "18px", md: "27px" }}
                fontWeight="400"
                lineHeight={{ base: "30px", md: "40px" }}
                color="#B7B39F"
                fontFamily="DM Sans"
                mb="40px"
                ml={{ base: "0", md: "10px" }}
                textAlign={{ base: "center", md: "left" }}
              >
                {testimonial.feedback}
              </Text>

              {/* User Info */}
              <Flex align="center" justify={{ base: "center", md: "flex-start" }}>
                <Image
                  src={testimonial.image}
                  w="81px"
                  h="81px"
                  borderRadius="full"
                  boxShadow="0px 5.42px 18.98px 0px #2427291A"
                  mr="20px"
                />
                <VStack align={{ base: "center", md: "flex-start" }} spacing="2px">
                  <Text
                    fontSize="24px"
                    fontWeight="700"
                    color="#F8F8F6"
                    fontFamily="DM Sans"
                  >
                    {testimonial.name}
                  </Text>
                  <Text
                    fontSize="20px"
                    fontWeight="400"
                    color="#B7B39F"
                    fontFamily="DM Sans"
                  >
                    {testimonial.role}
                  </Text>
                </VStack>
              </Flex>
            </Box>
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default Testimonials;
