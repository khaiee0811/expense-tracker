import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Input,
} from "@chakra-ui/react"
import Header from "@/components/Header";

export default function Home() {

  return(
    <>
      <Header></Header>
      <Flex 
        justify="left"
        align="center"
        height="80vh"
        px="10em"
      >
        <Box maxW="600px" textAlign="left">
          <Heading fontSize="80px" mb={4} whiteSpace="nowrap">Expense Tracker</Heading>
          <Text fontSize="20px" mb={3}>Your personalised expense tracking platform.</Text>
          <Input 
            variant="outline" 
            borderColor="gray.500" 
            mb={3}
            placeholder="What is your name?"
          />
          <Button 
            colorScheme="teal" 
            variant="solid"
          >
            Get Started
          </Button>
        </Box>
      </Flex>
    </>
  );
}