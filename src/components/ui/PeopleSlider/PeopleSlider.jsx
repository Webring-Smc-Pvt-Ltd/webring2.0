import { Box, Text, VStack, HStack, Image, Button, IconButton } from "@chakra-ui/react";

import { useState } from "react";
// import { ArrowLeftIcon } from "@chakra-ui/icons";
  

const testimonials = [
  {
    name: "Daniyal Sultan",
    position: "Founder & CEO",
    image: "/CEOdp.png",
    text: "Webring provides the best services for web development. Would love to work with you on additional projects.",
    description: "Webring’s Premier Web Development Services are Here to Help You Unlock Web Excellence. Together, let's work on more projects!"
  },
  {
    name: "Ayesha Khan",
    position: "CTO",
    image: "/awab.png",
    text: "Exceptional attention to detail and professionalism in web solutions. Highly recommended!",
    description: "Their expertise in web development is truly remarkable. We are excited to collaborate further."
  },
  {
    name: "Ali Raza",
    position: "Project Manager",
    image: "/adil.png",
    text: "Great experience working with Webring. Their dedication to quality is outstanding.",
    description: "The team’s commitment and skillset are top-notch. Looking forward to future projects!"
  }
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <Box maxW="1923px" mx="auto" py="50px" px={{ base: "20px", lg: "175px" }}>
      <HStack spacing={10} justify="center">
        {/* Left Arrow */}
        {/* <IconButton
          icon={<ArrowLeftIcon />}
          aria-label="Previous"
          onClick={prevSlide}
          size="lg"
          bg="#FED904"
          borderRadius="full"
        /> */}
 
 


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
              fontSize={{ base: "30px", lg: "40px" }}
              fontWeight="500"
              lineHeight="48px"
              letterSpacing="-2px"
              position="absolute"
              top="157px"
              left="173px"
              w="936px"
            >
              {testimonials[currentIndex].text}
            </Text>

            {/* Simple Text */}
            <Text
              fontSize={{ base: "18px", lg: "25px" }}
              fontWeight="400"
              lineHeight="40px"
              position="absolute"
              top="280px"
              left="173px"
              w="967px"
            >
              {testimonials[currentIndex].description}
            </Text>

            {/* Profile Section */}
            <HStack position="absolute" top="405px" left="175px" align="center">
              <Box w="90px" h="90px" borderRadius="full" overflow="hidden">
                <Image src={testimonials[currentIndex].image} alt="Profile" objectFit="cover" w="full" h="full" />
              </Box>
              <VStack color="#F8F8F6" ml={5} gap={0} align="flex-start">
                <Text fontSize="18px" fontWeight="500">{testimonials[currentIndex].name}</Text>
                <Text fontSize="16px" fontWeight="400">{testimonials[currentIndex].position}</Text>
              </VStack>
            </HStack>
          </Box>
        </Box>

        {/* Right Arrow */}
        {/* <IconButton
          icon={<FaArrowRight />}
          aria-label="Next"
          onClick={nextSlide}
          size="lg"
          bg="#FED904"
          borderRadius="full"
        /> */}
        
      </HStack>
    </Box>
  );
};

export default TestimonialSlider;
