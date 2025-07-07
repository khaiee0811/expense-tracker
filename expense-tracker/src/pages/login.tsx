import {
    Box,
    Flex,
    Heading,
    Input,
    FormControl,
    FormLabel,
    Button,
} from "@chakra-ui/react"

export default function Login() {
    return(
        <Flex height="100vh">
            {/* Left: Image banner */}
            <Box flex="1" backgroundColor="teal.400">

            </Box>

            {/* Right: Login Box */}
            <Flex
                flex="1"
                justifyContent="center"
                alignItems="center"
                bg="gray.50"
            >
                <Box border="1px solid black" p="4em" pb="2em" borderRadius={10}>
                    <Heading mb={8}>Login</Heading>
                    <FormLabel>Email</FormLabel>
                    <Input mb={8}></Input>
                    <FormLabel>Password</FormLabel>
                    <Input mb={7}></Input>
                    <Flex justify="center" mb={10}>
                        <Button width="100px" colorScheme="green">Login</Button>
                    </Flex>
                    <Flex justify="center">
                        <Button fontSize="14px" variant="link">Sign Up</Button>
                    </Flex>
                </Box>
            </Flex>
        </Flex>
    ); 
}
