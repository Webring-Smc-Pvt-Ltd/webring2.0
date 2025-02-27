import { Box, Text, VStack, HStack, Image, Button, IconButton } from "@chakra-ui/react";
// import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";



const TestimonialSlider = () => {
  return (
    <Box maxW="1923px" mx="auto" py="50px" px={{ base: "20px", lg: "175px" }}>
      <HStack spacing={10} justify="center">
        {/* Left Arrow */}
        {/* <IconButton
          aria-label="Previous"
          icon={<ArrowLeftIcon boxSize={6} />}
          borderRadius="full"
          bg="#FFFBE6"
          boxSize={14}
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
              fontSize={{ base: "30px", lg: "44px" }}
              fontWeight="500"
              lineHeight="48px"
              letterSpacing="-2px"
              position="absolute"
              top="157px"
              left="173px"
              w="936px"
            >
              Webring provides the best services for web development. Would love to work with you on additional projects.
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
              Webring’s Premier Web Development Services are Here to Help You Unlock Web Excellence. Together, let's work on more projects!
            </Text>

            {/* Profile Section */}
            <HStack position="absolute" top="423px" left="277px" spacing={4} align="center">
              <Box w="108px" h="108px" borderRadius="full" overflow="hidden">
                <Image src="/CEOdp.png" alt="Profile" objectFit="cover" w="full" h="full" />
              </Box>
              <VStack align="flex-start" spacing={1}>
                <Text fontSize="18px" fontWeight="500">Daniyal Sultan</Text>
                <Text fontSize="16px" fontWeight="400">Founder & CEO</Text>
              </VStack>
            </HStack>
          </Box>
        </Box>

        {/* Right Arrow */}
        {/* <IconButton
          aria-label="Next"
          icon={<ArrowRightIcon boxSize={6} />}
          borderRadius="full"
          bg="#FFFBE6"
          boxSize={14}
        /> */}
      </HStack>
    </Box>
  );
};

export default TestimonialSlider;
