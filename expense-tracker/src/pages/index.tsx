import {
  Box,
  Flex,
  Heading,
} from "@chakra-ui/react"
import ExpenseLogger from "@/components/ExpenseLogger";

export default function Home() {
  return(
    <Flex height="100vh" justify="center" padding="7em">
      <ExpenseLogger/>
    </Flex>
  );
}