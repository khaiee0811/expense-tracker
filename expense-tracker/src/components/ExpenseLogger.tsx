import {
    Box,
    Heading,
} from "@chakra-ui/react";

export default function ExpenseLogger() {
    return(
        <Box 
            border="1px solid black" 
            padding="2em"
            borderRadius="15px"
            width="500px"
            textAlign="center"
        >
            <Heading fontSize="28px" fontWeight="bold">Expenses Tracker</Heading>
        </Box>
    )
}