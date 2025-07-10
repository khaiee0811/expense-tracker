import {
  Flex,
  Box,
} from "@chakra-ui/react"
import ExpenseLogger from "@/components/ExpenseSummary";
import Header from "@/components/Header";
import Head from "next/head";

export default function Dashboard() {
  return(
    <>
        <Header/>
        <Flex height="85vh" p={6} gap={6} px="5em">
            {/* Summary */}
            <Box
                flex="1"
                bg="teal.200"
                border="1px solid teal"
                display="flex"
                justifyContent="center"
                height="100%"
                p="1em"
            >
                <ExpenseLogger/>
            </Box>

            {/* Right side column */}
            <Flex direction="column" flex="1" gap={6}>
                <Box
                    bg="blue.200"
                    border="1px solid blue"
                    height="50%"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    Top Right Box
                </Box>
                <Box
                    bg="blue.300"
                    border="1px solid blue"
                    height="50%"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    Bottom Right Box
                </Box>
            </Flex>
        </Flex>
    </>
  );
}