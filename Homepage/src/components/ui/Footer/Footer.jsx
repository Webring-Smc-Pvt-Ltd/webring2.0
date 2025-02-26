import { Box, Flex, VStack, HStack, Text, Input, Button, Link, Image } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      as="footer"
      bg="#14140F"
      color="white"
      py={10}
      px={{ base: 6, md: 20 }}
      w="1923px"
      h="812px"
    >
      {/* Main Footer Content */}
      <Flex direction={{ base: "column", md: "row" }} justify="space-between" maxW="1523px" mx="auto" py={6} borderBottomWidth="1px" borderColor="gray.700">
        {/* Left Section */}
        <VStack align="start" spacing={4} whiteSpace="pre-line">
          {/* Logo */}
          <Box>
            <Image src="/logo.png" alt="Webring Logo" w="105px" h="69px" />
          </Box>
          {/* Description */}
          <Text fontSize="18px" fontWeight="400" color="#F8F8F6" mt={5}>
            We offer unparalleled expertise and dedicated {"\n"}support to drive your business toward{"\n"} sustained growth and success.
          </Text>
          {/* Input & Button */}
          <HStack spacing={2} w="350px" h="46px">
            <Input placeholder="Enter Your Email" bg="gray.800" border="none" _focus={{ bg: "gray.700" }} />
            <Button bg="yellow.400" color="black" _hover={{ bg: "yellow.500" }}>
              Get Started
            </Button>
          </HStack>
        </VStack>
        {/* Right Section */}
        <VStack align="start" spacing={4} maxW="538px">
          <Text fontWeight="bold" fontSize="lg" color="#F8F8F6">Let's Embark On Something Exceptional Together.</Text>
          <Text fontSize="sm" whiteSpace="pre-line">
            Our team of IT specialists is eager to collaborate with you,{"\n"} offering tailored insights and solutions designed to meet your{"\n"} unique business needs.
          </Text>
          <Button bg="yellow.400" color="black" _hover={{ bg: "yellow.500" }}>
            Get an appointment now
          </Button>
          <HStack spacing={6} mt={4} >
            <VStack color="#F8F8F6">
              <Text fontWeight="bold">2 Mins</Text>
              <Text fontSize="xs">Response Time</Text>
            </VStack>
            <VStack color="#F8F8F6">
              <Text fontWeight="bold">99%</Text>
              <Text fontSize="xs">Client Satisfaction</Text>
            </VStack>
            <VStack color="#F8F8F6">
              <Text fontWeight="bold">22+ Years</Text>
              <Text fontSize="xs">Field Experience</Text>
            </VStack>
          </HStack>
        </VStack>
      </Flex>

      {/* Services, Company & Contact Info Section */}
      <Flex wrap="wrap" maxW="1523px" mx="auto" justify="space-between" py={6} borderBottomWidth="1px" borderColor="gray.700">
        {/* Services Section - Adjusted Layout */}
        <Box w="404px" h="296px" ml="20px" fontSize="16px" >
          <Flex justify="space-between">
            <VStack align="start" color="#F8F8F6">
              <Text mt="20px" fontWeight="bold">Services</Text>
              <Link  mt="20px" color="white">Web Development</Link>
              <Link mt="20px" color="white">App Development</Link>
              <Link mt="20px" color="white">Game Development</Link>
            </VStack>
            <VStack align="start">
              <Text fontWeight="bold" visibility="hidden">Hidden</Text> {/* Spacer */}
              <Link mt="40px" color="white">Graphic Designing</Link>
              <Link mt="20px" color="white">Social Media Marketing</Link>
              <Link mt="20px" color="white">Content Writing</Link>
            </VStack>
          </Flex>
        </Box>
 {/* Company Section - Adjusted Layout */}
        <Box w="227px" h="238px" fontSize="16px"  >
          <Flex justify="space-between">
            <VStack  align="start">
              <Text mt="20px" fontWeight="bold" color="#F8F8F6">Company</Text>
              <Link mt="20px"color="white">About Us</Link>
              <Link mt="20px"color="white">Contact Us</Link>
              <Link mt="20px"color="white">Services</Link>
            </VStack>
            <VStack  align="start">
              <Text fontWeight="bold" visibility="hidden">Hidden</Text> {/* Spacer */}
              <Link mt="40px"color="white">Blog</Link>
              <Link mt="20px"color="white">Team</Link>
              <Link mt="20px"color="white">Partners</Link>
            </VStack>
          </Flex>
        </Box>

       
        

        {/* Contact Info Section */}
        <VStack fontSize="16px"align="start" color="#F8F8F6">
          <Text mt="20px" fontWeight="bold">Phone</Text>
          <Text mt="25px">+92 319 6780744</Text>
          <Text fontWeight="bold" mt={10}>Mail</Text>
          <Text mt="20px">info@webring.ltd</Text>
        </VStack>
      </Flex>

      {/* Copyright */}
      <Text fontSize="xs" textAlign="center" mt={10} color="#F8F8F6" ml="1183.11px">
        © 2024 All rights reserved by Webring.ltd
      </Text>
    </Box>
  );
};

export default Footer;
