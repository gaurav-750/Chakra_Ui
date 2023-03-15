import {
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Spacer,
  HStack,
} from "@chakra-ui/react";

const Navbar = () => {
  return (
    <>
      <Flex as="nav" p="10px" bg="gray.100" alignItems="center">
        <Heading as="h3">Chakra Tasks</Heading>
        <Spacer />

        <HStack spacing="20px">
          <Box fontWeight="bold" p="10px">
            G
          </Box>
          <Text color="tomato">gauravsomani52750@gmail.com</Text>
          <Button colorScheme="purple">Logout</Button>
        </HStack>
      </Flex>

      {/* <Flex bg="gray.300" justify="space-between" wrap="wrap" gap={2}>
        <Box w="150px" h="100px" bg="tomato">
          1
        </Box>
        <Box w="150px" h="100px" bg="blue.300">
          2
        </Box>
        <Box textAlign="center" w="150px" h="100px" bg="green">
          3
        </Box>
        <Box w="150px" h="100px" bg="yellow">
          4
        </Box>
      </Flex> */}
    </>
  );
};

export default Navbar;
