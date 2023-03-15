import { Box, Container, Heading, Text } from "@chakra-ui/react";

export default function Dashboard() {
  const boxStyles = {
    p: "10px",
    bg: "purple.300",
    color: "white",
    m: 10,
    textAlign: "center",
    ":hover": {
      color: "black",
      bg: "blue.300",
    },
  };

  return (
    <Container maxW={600}>
      <Heading my={30}>Chakra Ui</Heading>
      <Text ml={20} color="blue">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
        illo?
      </Text>

      <Box my={30} p={10} bg="orange.300">
        <Text color="white">This is a Box</Text>
      </Box>

      <Box sx={boxStyles}>Hello, World!</Box>
    </Container>
  );
}
