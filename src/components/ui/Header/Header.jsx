import { useState, useEffect } from "react";
import { Box, Flex, HStack, Link, Button, Image, IconButton, VStack } from "@chakra-ui/react";
import { FaBars, FaTimes } from "react-icons/fa";
import CustomButton from "/src/components/CustomButton";

const Header = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // AI Services dropdown
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false); // Services dropdown

  const navItems = ["Home", "Services", "Industries", "Technologies", "Insights", "Portfolio"];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <Box
      w="100%"
      h="80px"
      px={{ base: "20px", md: "50px", lg: "100px" }}
      py="10px"
      position="fixed"
      top={isVisible ? "0" : "-100px"}
      left="0"
      zIndex="1000"
      bg="transparent"
      transition="top 0.3s ease-in-out, background 0.3s ease-in-out"
    >
      <Flex align="center" justify="space-between" w="100%" h="100%">
        {/* Logo Section */}
        <HStack spacing={2}>
          <Image src="/logo.png" alt="Webring Logo" width="100%" height="60px" />
        </HStack>

        {/* Desktop Navigation */}
        <Flex
          display={{ base: "none", md: "flex" }}
          w="auto"
          h="100%"
          gap="30px"
          align="center"
          justify="center"
        >
          <HStack spacing="30px">
            {navItems.map((item) => (
              item === "Services" ? (
                <Box
                  key={item}
                  position="relative"
                  onMouseEnter={() => setIsServicesDropdownOpen(true)}
                  onMouseLeave={() => setIsServicesDropdownOpen(false)}
                >
                  <Box
                    px={3}
                    height="100%"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    borderTop={activeLink === item ? "3px solid #FED904" : "none"}
                    cursor="pointer"
                    py={6}
                  >
                    <Link
                      fontSize="18px"
                      fontWeight="600"
                      color={activeLink === item ? "#FED904" : "white"}
                      _hover={{ color: "#FED904" }}
                    >
                      {item}
                    </Link>
                  </Box>

                  {isServicesDropdownOpen && (
                    <Box
                      position="absolute"
                      top="100%"
                      left="0"
                      bg="black"
                      w="200px"
                      borderRadius="5px"
                      boxShadow="md"
                      p="10px"
                      zIndex="1000"
                    >
                      <VStack align="start" spacing="10px">
                        <Link color="white" _hover={{ color: "#FED904" }} href="/service1">Service 1</Link>
                        <Link color="white" _hover={{ color: "#FED904" }} href="/service2">Service 2</Link>
                        <Link color="white" _hover={{ color: "#FED904" }} href="/service3">Service 3</Link>
                      </VStack>
                    </Box>
                  )}
                </Box>
              ) : (
                <Box
                  key={item}
                  px={3}
                  height="100%"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  borderTop={activeLink === item ? "3px solid #FED904" : "none"}
                  onClick={() => setActiveLink(item)}
                  cursor="pointer"
                  py={6}
                >
                  <Link
                    fontSize="18px"
                    fontWeight="600"
                    color={activeLink === item ? "#FED904" : "white"}
                    _hover={{ color: "#FED904" }}
                  >
                    {item}
                  </Link>
                </Box>
              )
            ))}
          </HStack>

          {/* Get a Quote Button */}
          <CustomButton text="GET A QUOTE" onClick={() => alert("Quote Requested!")} />
        </Flex>
      </Flex>
    </Box>
  );
};
export default Header;
