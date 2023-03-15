import { Box, Container, Heading, SimpleGrid, Text } from "@chakra-ui/react";

export default function Dashboard() {
  return (
    <>
      <SimpleGrid columns={4} margin={7} spacing={10} minChildWidth="250px">
        <Box bg="blue.200" height="200px"></Box>
        <Box bg="blue.200" height="200px"></Box>
        <Box bg="blue.200" height="200px"></Box>
        <Box bg="blue.200" height="200px"></Box>

        <Box bg="blue.200" height="200px"></Box>
        <Box bg="blue.200" height="200px"></Box>
        <Box bg="blue.200" height="200px"></Box>
        <Box bg="blue.200" height="200px"></Box>
      </SimpleGrid>
    </>
  );
}
