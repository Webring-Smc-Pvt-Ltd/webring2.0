import { useState, useEffect } from "react";
import { Box, Flex, HStack, Link, Button, Image, VStack } from "@chakra-ui/react";
import CustomButton from "/src/components/CustomButton";

const Header = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navItems = ["Home", "Services", "Industries", "Technologies", "Insights", "Portfolio"];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <Box
      w="100%"
      h="80px"
      px={{ base: "20px", md: "100px" }}
      py="10px"
      position="fixed"
      top={isVisible ? "0" : "-100px"}
      left="0"
      zIndex="1000"
      transition="top 0.3s ease-in-out"
    >
      <Flex align="center" justify="space-between" w="100%" h="100%">
        {/* Logo Section */}
        <HStack spacing={2}>
          <Image src="/logo.png" alt="Webring Logo" width={{ base: "80px", md: "104px" }} height={{ base: "50px", md: "70px" }} />
        </HStack>

        {/* Navigation Links */}
        <HStack
          spacing="30px"
          display={{ base: "flex" }}
          align="center"
          justifyContent="center"
          wrap="wrap"
          ml={700}
        >
          {navItems.map((item) => (
            <Box
              key={item}
              px={3}
              py={6}
              display="flex"
              alignItems="center"
              justifyContent="center"
              borderTop={activeLink === item ? "3px solid #FED904" : "none"}
              onClick={() => setActiveLink(item)}
              cursor="pointer"
            >
              <Link
                fontSize={{ base: "14px", md: "18px" }}
                fontWeight="600"
                color={activeLink === item ? "#FED904" : "white"}
                _hover={{ color: "#FED904" }}
              >
                {item}
              </Link>
            </Box>
          ))}
        </HStack>

        {/* Get a Quote Button */}
        <Box>
          <CustomButton text="GET A QUOTE" onClick={() => alert("Quote Requested!")} />
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
