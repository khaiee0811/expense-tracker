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
} from "@chakra-ui/react"

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { login } = useAuth();
    const router = useRouter();
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        const success = login(email, password);
        if (success) {
            router.push("/dashboard");
        }
        else {
            setError("Invalid username or password");
        }
    }

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
                    <Flex justify="center" mb={10}>
                        <Button width="100px" colorScheme="green" onClick={handleSubmit}>Login</Button>
                    </Flex>
                    <Flex justify="center">
                        <Button fontSize="14px" variant="link">Sign Up</Button>
                    </Flex>
                </Box>
            </Flex>
        </Flex>
    ); 
}
