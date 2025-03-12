import Header2 from "../components/Header2";
import {
  Box,
  Flex,
  HStack,
  Link,
  Button,
  Image,
  IconButton,
  VStack,
  Text
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown,faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import HeroBanner2 from "../components/HeroBanner2";
import Skills2 from "../components/Skills2";

const ServicesPage=()=>{
    return(
        <>
       <Box as="header" bg="white" px="100px" py="20px" width="100%" height="110px">
            <Flex justify="space-between" align="center">
              {/* Logo */}
              <Image src="/logo2.png" alt="Webring Logo" width="104px" height="70px" />
      
              {/* Navigation Links */}
              <HStack spacing="50px" height="24px" gap="50px">
                {['Home', 'About', 'Services', 'Portfolio', 'Blog'].map((item) => (
                  <Text
                    key={item}
                    fontFamily="DM Sans"
                    fontWeight="500"
                    fontSize="18px"
                    lineHeight="100%"
                    color="#26241C"
                    cursor="pointer"
                  >
                    {item}
                  </Text>
                ))}
                <FontAwesomeIcon icon={faCaretDown} />
              </HStack>
      
              {/* Search and Button */}
              <HStack spacing="20px" width="177px" height="44px" gap="20px">
                  <FontAwesomeIcon icon={faMagnifyingGlass} style={{ width: "28px", height: "28px" }} />
                
                <Button
                  width="129px"
                  height="44px"
                  bg="#FFD700"
                  color="#26241C"
                  fontFamily="Poppins"
                  fontWeight="400"
                  fontSize="16px"
                  lineHeight="19.2px"
                >
                  Contact Us
                </Button>
              </HStack>
            </Flex>
          </Box>

          <HeroBanner2 />
          <Skills2 />
        </>
        




          

    );
        
    
}
export default ServicesPage;