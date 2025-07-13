import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/router";
import {
    Box,
    Flex,
    Heading,
    Input,
    FormControl,
    FormLabel,
    Button,
    Text,
    Link,
} from "@chakra-ui/react"

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();


    return(
        <Flex height="100vh">
            {/* Left: Image banner */}
            <Box flex="1" backgroundColor="teal.400">

            </Box>

            {/* Right: Register Box */}
            <Flex
                flex="1"
                justifyContent="center"
                alignItems="center"
                bg="gray.50"
            >
                <Box border="1px solid black" p="4em" pb="2em" borderRadius={10}>
                    <Heading mb={8}>Sign Up</Heading>
                    <FormLabel>Email</FormLabel>
                    <Input 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        mb={8}
                    />
                    <FormLabel>Password</FormLabel>
                    <Input 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        mb={7}
                    />
                    <FormLabel>Confirm Password</FormLabel>
                    <Input 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        mb={7}
                    />
                    {error && (
                    <Text color="red.500" mb={4} textAlign="center">
                        {error}
                    </Text>
                    )}
                    <Flex justify="center" mb={10}>
                        <Button width="100px" colorScheme="green">Sign Up</Button>
                    </Flex>
                    <Flex justify="center">
                        <Link href="/login">
                            <Button fontSize="14px" variant="link">Already have an account?</Button>
                        </Link>
                    </Flex>
                </Box>
            </Flex>
        </Flex>
    ); 
}
