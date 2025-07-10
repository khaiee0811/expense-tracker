import {
    Box,
    Heading,
    Flex,
    Button,
    Link,
} from "@chakra-ui/react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/router";

export default function Header() {
    const { user, logout } = useAuth();
    const router = useRouter();

    const handleLogout = () => {
        logout();
        router.push("/");
    }

    return(
        <Box 
            padding="2em" 
            px="5em"
            fontSize="20px" 
            fontWeight="bold"
        >
            <Flex justifyContent="space-between" alignItems="center">
                <Heading>Expenses Tracker</Heading>
                {user? (
                    <Button
                        onClick={handleLogout}
                        border="2px solid black"
                        borderRadius="5px"
                        width="75px"
                    >
                        Logout
                    </Button>
                ) : (
                    <Link href="/login">
                        <Button 
                            border="2px solid black" 
                            borderRadius="5px" 
                            width="75px"
                        >
                            Login
                        </Button>
                    </Link>
                )
                }
            </Flex>
        </Box>
    );
}