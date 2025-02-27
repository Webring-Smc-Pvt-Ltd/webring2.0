import { Box, Text, VStack, HStack, Image, Flex } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

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
      <VStack w="100%" maxW="1823px" spacing="20px" align="flex-start">
        <Text
          fontSize="16px"
          fontWeight="700"
          letterSpacing="40%"
          color="#26241C"
          fontFamily="Yantramanav"
        >
          TESTIMONIALS
        </Text>
        <Text
          fontSize={{ base: "40px", lg: "60px" }}
          fontWeight="900"
          lineHeight="72px"
          color="#FED904"
          fontFamily="Yantramanav"
          w="100%"
          maxW="1823px"
        >
          Don't take our word for it
        </Text>
      </VStack>

      {/* Slider Section */}
      <Box w="100%" maxW="1721px" mx="auto" overflow="hidden">
        <Swiper
          slidesPerView={1}
          spaceBetween={50} // Adjust spacing between slides
          breakpoints={{
            768: { slidesPerView: 2, spaceBetween: 50 },
            1024: { slidesPerView: 2.5, spaceBetween: 50 },
            1440: { slidesPerView: 3, spaceBetween: 50 },
          }}
          navigation={true}
          pagination={{ clickable: true }}
          modules={[Pagination, Navigation]}
          style={{ padding: "20px 0px" }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <Box
                bg="#131313"
                w="678px"
                h="481px"
                borderRadius="20px"
                p="40px"
                boxShadow="0px 5.42px 18.98px 0px #2427291A"
                mx="auto"
              >
                {/* Quote */}
                <Text
                  fontSize="30px"
                  fontWeight="700"
                  lineHeight="38px"
                  color="#F8F8F6"
                  fontFamily="DM Sans"
                  mb="20px"
                >
                  "{testimonial.quote}"
                </Text>

                {/* Feedback */}
                <Text
                  fontSize="24px"
                  fontWeight="400"
                  lineHeight="40px"
                  color="#B7B39F"
                  fontFamily="DM Sans"
                  mb="40px"
                >
                  {testimonial.feedback}
                </Text>

                {/* User Info */}
                <Flex align="center">
                  <Image
                    src={testimonial.image}
                    w="81px"
                    h="81px"
                    borderRadius="full"
                    boxShadow="0px 5.42px 18.98px 0px #2427291A"
                    mr="20px"
                  />
                  <VStack align="flex-start" spacing="2px">
                    <Text
                      fontSize="24px"
                      fontWeight="700"
                      color="#F8F8F6"
                      fontFamily="DM Sans"
                    >
                      {testimonial.name}
                    </Text>
                    <Text
                      fontSize="24px"
                      fontWeight="400"
                      color="#B7B39F"
                      fontFamily="DM Sans"
                    >
                      {testimonial.role}
                    </Text>
                  </VStack>
                </Flex>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};

export default Testimonials;
