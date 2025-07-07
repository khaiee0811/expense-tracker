import {
  Box,
  Flex,
  Heading,
} from "@chakra-ui/react"
import ExpenseLogger from "@/components/ExpenseLogger";
import Header from "@/components/Header";

export default function Home() {
  return(
    <>
      <Header></Header>
      <Flex height="100vh" justify="center" padding="2em">
        <ExpenseLogger/>
      </Flex>
    </>
  );
}