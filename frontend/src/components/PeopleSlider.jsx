import { Box, Text, VStack, HStack, Image, Button, Flex } from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";

const testimonials = [
  {
    text: "Webring provides the best services for web development. Would love to work with you on additional projects.",
    subtext: "Webring’s Premier Web Development Services are Here to Help You Unlock Web Excellence. Together, let's work on more projects!",
    name: "Daniyal Sultan",
    position: "Founder & CEO",
    image: "/CEOdp.png"
  },
  {
    text: "Advancing Digital Innovation: The Strategic Vision of Your Web Development Firm with Our CTO",
    subtext: "Advancing Your Digital Path: Investigate Cutting-Edge Web Solutions with Our CTO's Strategic Perspective at Your Web Development Company",
    name: "Adil Waqar",
    position: "CTO",
    image: "/adilll.png"
  },
  {
    text: "Managing Projects for Success as Your Web Development Project Manager: Navigating Digital Excellence",
    subtext: "Guiding Web Development Success: Taking Charge of Projects and Getting Them Done Right as Your Committed Project Manager",
    name: "Muhammad Ibrahim",
    position: "Director",
    image: "/.png"
  }
];

const TestimonialSlider = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <Box maxW="1920px" mx="auto" py="50px" px={{ base: "20px", lg: "100px" }}>
      <Flex justify="center" align="center" wrap="nowrap" gap={5}>
        {/* Left Arrow */}
        <Box w="38px" h="38px" bg="#FED904" borderRadius="50px" display="flex" alignItems="center" justifyContent="center" cursor="pointer" onClick={prevSlide}>
          <FontAwesomeIcon icon={faArrowLeft} color="#000" />
        </Box>

        {/* Slider Container */}
        <Box w={{ base: "100%", lg: "80%" }} maxW="1570px" h={{ base: "auto", lg: "571px" }} display="flex" justifyContent="center">
          {/* Black Box */}
          <Box
            w="100%"
            bg="#000000"
            borderRadius="15px"
            position="relative"
            p={{ base: "20px", lg: "50px" }}
            color="#F8F8F6"
            textAlign={{ base: "center", lg: "left" }}
          >
            <Flex align="center" justify="space-between" direction={{ base: "column", lg: "row" }}>
              <Button bg="#FED904" color="#F8F8F6" borderRadius="10px" px={6} py={2}>
                LinkedIn
              </Button>
            </Flex>

            {/* Heading */}
            <Text fontSize={{ base: "24px", lg: "44px" }} fontWeight="500" lineHeight={{ base: "32px", lg: "48px" }} mt={{ base: "20px", lg: "40px" }}>
              {testimonials[index].text}
            </Text>

            {/* Subtext */}
            <Text fontSize={{ base: "16px", lg: "23.63px" }} fontWeight="400" lineHeight={{ base: "24px", lg: "40px" }} mt={4}>
              {testimonials[index].subtext}
            </Text>

            {/* Profile Section */}
            <HStack mt={6} spacing={4} justify={{ base: "center", lg: "flex-start" }}>
              <Box w="80px" h="80px" borderRadius="full" overflow="hidden">
                <Image src={testimonials[index].image} alt="Profile" objectFit="cover" w="full" h="full" />
              </Box>
              <VStack align={{ base: "center", lg: "flex-start" }} spacing={1}>
                <Text fontSize="18px" fontWeight="500">{testimonials[index].name}</Text>
                <Text fontSize="16px" fontWeight="400">{testimonials[index].position}</Text>
              </VStack>
            </HStack>
          </Box>
        </Box>

        {/* Right Arrow */}
        <Box w="38px" h="38px" bg="#FED904" borderRadius="50px" display="flex" alignItems="center" justifyContent="center" cursor="pointer" onClick={nextSlide}>
          <FontAwesomeIcon icon={faArrowRight} color="#000" />
        </Box>
      </Flex>
    </Box>
  );
};

export default TestimonialSlider;
