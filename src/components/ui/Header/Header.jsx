import { useState, useEffect } from "react";
import { Box, Flex, HStack, Link, Button, Image } from "@chakra-ui/react";
import CustomButton from "/src/components/CustomButton";

const Header = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navItems = ["Home", "Services", "Industries", "Technologies", "Insights", "Portfolio"];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setIsVisible(false); // Hide header when scrolling down
      } else {
        setIsVisible(true); // Show header when scrolling up
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <Box
      w="100%"
      h="106px"
      px="100px"
      py="10px"
      position="fixed"
      top={isVisible ? "0" : "-120px"} // Hide the header by shifting it up
      left="0"
      zIndex="1000"
      transition="top 0.3s ease-in-out" // Smooth transition effect
       // Optional: Semi-transparent background
       // Optional: Blur effect for a modern look
    >
      <Flex align="center" justify="space-between" w="100%" h="100%">
        {/* Logo Section */}
        <HStack spacing={2}>
          <Image src="/logo.png" alt="Webring Logo" width="104px" height="70px" />
        </HStack>

        {/* Links & Button Container */}
        <Flex w="864px" h="86px" gap="51px" align="center" justify="center">
          {/* Navigation Links Box */}
          <HStack w="638px" h="86px" spacing="30px" display={{ base: "none", md: "flex" }}>
            {navItems.map((item) => (
              <Box
                key={item}
                px={3}
                height="106px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                borderTop={activeLink === item ? "3px solid #FED904" : "none"}
                onClick={() => setActiveLink(item)}
                cursor="pointer"
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
