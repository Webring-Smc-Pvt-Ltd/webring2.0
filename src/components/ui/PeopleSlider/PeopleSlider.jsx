import { Box, Text, VStack, HStack, Image, Button } from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
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
    <Box maxW="1923px" mx="auto" py="50px" px={{ base: "20px", lg: "175px" }}>
      <HStack spacing={10} justify="center">
        {/* Left Arrow */}
        <Box w="38px" h="38px" minW="38px" minH="38px" bg="#FED904" borderRadius="full" display="flex" alignItems="center" justifyContent="center" cursor="pointer" onClick={prevSlide}>
          <FontAwesomeIcon icon={faArrowLeft} color="#000" />
        </Box>

        {/* Slider Container */}
        <Box w={{ base: "100%", lg: "1570px" }} h="571px" display="flex" justifyContent="center">
          {/* Black Box */}
          <Box
            w={{ base: "100%", lg: "1262px" }}
            h="566px"
            bg="#000000"
            borderRadius="15px"
            position="relative"
            p={10}
            color="#F8F8F6"
          >
            {/* LinkedIn Button */}
            <Button
              bg="#FED904"
              color="#F8F8F6"
              borderRadius="10px"
              px={6}
              py={2}
              position="absolute"
              top="90px"
              left="173px"
            >
              LinkedIn
            </Button>

            {/* Heading */}
            <Text
              fontSize={{ base: "30px", lg: "44px" }}
              fontWeight="500"
              lineHeight="48px"
              letterSpacing="-2px"
              position="absolute"
              top="157px"
              left="173px"
              w="936px"
            >
              {testimonials[index].text}
            </Text>

            {/* Simple Text */}
            <Text
              fontSize={{ base: "18px", lg: "23.63px" }}
              fontWeight="400"
              lineHeight="40px"
              position="absolute"
              top="320px"
              left="173px"
              w="967px"
            >
              {testimonials[index].subtext}
            </Text>

            {/* Profile Section */}
            <HStack position="absolute" top="423px" left="277px" spacing={4} align="center">
              <Box w="108px" h="108px" borderRadius="full" overflow="hidden">
                <Image src={testimonials[index].image} alt="Profile" objectFit="cover" w="full" h="full" />
              </Box>
              <VStack align="flex-start" spacing={1}>
                <Text fontSize="18px" fontWeight="500">{testimonials[index].name}</Text>
                <Text fontSize="16px" fontWeight="400">{testimonials[index].position}</Text>
              </VStack>
            </HStack>
          </Box>
        </Box>

        {/* Right Arrow */}
        <Box w="38px" h="38px" minW="38px" minH="38px" bg="#FED904" borderRadius="full" display="flex" alignItems="center" justifyContent="center" cursor="pointer" onClick={nextSlide}>
          <FontAwesomeIcon icon={faArrowRight} color="#000" />
        </Box>
      </HStack>
    </Box>
  );
};

export default TestimonialSlider;