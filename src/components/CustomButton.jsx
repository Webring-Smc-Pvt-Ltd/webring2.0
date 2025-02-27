import { Button } from "@chakra-ui/react";

const CustomButton = ({ text, onClick, width = "175px", height = "56px" }) => {
  return (
    <Button
      bg="#FED904"
      color="#26241C"
      fontFamily="Poppins"
      fontWeight="500"
      fontSize="20px"
      lineHeight="24px"
      borderRadius="4px"
      w="175px"
      h="56px"
      _hover={{ bg: "yellow.500" }}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
