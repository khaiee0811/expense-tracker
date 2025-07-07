import {
    Box,
    Heading,
    Flex,
    Button,
    Link,
} from "@chakra-ui/react";

export default function Header() {
    return(
        <Box 
            padding="2em" 
            px="5em"
            fontSize="20px" 
            fontWeight="bold"
        >
            <Flex justifyContent="space-between" alignItems="center">
                <Heading>Expenses Tracker</Heading>
                <Link href="/login">
                    <Button 
                        border="2px solid black" 
                        borderRadius="5px" 
                        width="75px"
                    >
                        Login
                    </Button>
                </Link>
            </Flex>
        </Box>
    );
}