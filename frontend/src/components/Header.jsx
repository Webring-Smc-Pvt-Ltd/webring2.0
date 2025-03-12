import { useState, useEffect } from "react";
import {
  Box,
  Flex,
  HStack,
  Link,
  Image,
  VStack,
  Text,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faCaretDown,
  faMobileAlt,
  faCode,
  faBullhorn,
  faGamepad,
  faPen,
  faPaintBrush,
  faShoppingCart,
  faClipboardList,
  faUsers,
  faBrain,
  faRobot,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";
import CustomButton from "/src/components/CustomButton";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isAiDropdownOpen, setIsAiDropdownOpen] = useState(false);

  const navItems = [
    "Home",
    "Services",
    "Industries",
    "Technologies",
    "Insights",
    "Portfolio",
    "AI Services",
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const services = [
    { name: "App Development", icon: faMobileAlt, link: "/services/app-development" },
    { name: "Web Development", icon: faCode, link: "/services/web-development" },
    { name: "Social Media Marketing", icon: faBullhorn, link: "/services/social-media-marketing" },
    { name: "Graphic Designing", icon: faPaintBrush, link: "/services/graphic-designing" },
    { name: "Game Development", icon: faGamepad, link: "/services/game-development" },
    { name: "Content Writing", icon: faPen, link: "/services/content-writing" },
    { name: "Performance Marketing", icon: faClipboardList, link: "/services/performance-marketing" },
    { name: "Shopify Store Development", icon: faShoppingCart, link: "/services/shopify-development" },
    { name: "Web Development Consultancy", icon: faUsers, link: "/services/web-consultancy" },
  ];

  const aiServices = [
    { name: "AI Chatbots", icon: faRobot, link: "/ai/chatbots" },
    { name: "Machine Learning", icon: faBrain, link: "/ai/machine-learning" },
    { name: "Data Analytics", icon: faChartLine, link: "/ai/data-analytics" },
  ];

  const navigate = useNavigate();

  return (
    <Box
      w="100%"
      h="80px"
      maxW="1920px"
      px={{ base: "20px", md: "50px", lg: "100px" }}
      py="10px"
      position="absolute"
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
        <Flex display={{ base: "none", md: "flex" }} w="auto" h="100%" gap="30px" align="center">
          <HStack spacing="30px">
            {navItems.map((item) => (
              <Box
                key={item}
                position="relative"
                onMouseEnter={() => {
                  if (item === "Services") setIsServicesDropdownOpen(true);
                  if (item === "AI Services") setIsAiDropdownOpen(true);
                }}
                onMouseLeave={() => {
                  if (item === "Services") setIsServicesDropdownOpen(false);
                  if (item === "AI Services") setIsAiDropdownOpen(false);
                }}
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
                    {item} {["Services", "AI Services"].includes(item) && <FontAwesomeIcon icon={faCaretDown} />}
                  </Link>
                </Box>

                {/* Services Dropdown Menu */}
                {item === "Services" && isServicesDropdownOpen && (
                  <Box
                    position="absolute"
                    top="100%"
                    left="0"
                    bg="rgb(245, 239, 233)"
                    w="800px"
                    borderRadius="8px"
                    boxShadow="md"
                    p="20px"
                    zIndex="1000"
                    display="grid"
                    gridTemplateColumns="1fr 1fr 1fr"
                    gap="20px"
                  >
                    {services.map((service) => (
                      <Flex
                        key={service.name}
                        align="center"
                        cursor="pointer"
                        p="12px"
                        borderRadius="8px"
                        _hover={{ bg: "#FFD700" }}
                        onClick={() => navigate(service.link)}
                      >
                        <FontAwesomeIcon icon={service.icon} style={{ marginRight: "10px" }} />
                        <Text fontSize="15px" fontWeight="500" whiteSpace="nowrap">
                          {service.name}
                        </Text>
                      </Flex>
                    ))}
                  </Box>
                )}

                {/* AI Services Dropdown Menu */}
                {item === "AI Services" && isAiDropdownOpen && (
                  <Box
                    position="absolute"
                    top="100%"
                    left="0"
                    bg="rgb(245, 239, 233)"
                    w="300px"
                    borderRadius="8px"
                    boxShadow="md"
                    p="15px"
                    zIndex="1000"
                    display="grid"
                    gridTemplateColumns="1fr"
                    gap="10px"
                  >
                    {aiServices.map((service) => (
                      <Flex
                        key={service.name}
                        align="center"
                        cursor="pointer"
                        p="10px"
                        borderRadius="6px"
                        _hover={{ bg: "#FFD700" }}
                        onClick={() => navigate(service.link)}
                      >
                        <FontAwesomeIcon icon={service.icon} style={{ marginRight: "8px" }} />
                        <Text fontSize="15px" fontWeight="500" whiteSpace="nowrap">
                          {service.name}
                        </Text>
                      </Flex>
                    ))}
                  </Box>
                )}
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
