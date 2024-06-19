import { Container, Text, VStack, Box, Heading, Button, Flex, Image } from "@chakra-ui/react";
import StripeLogo from "../../public/stripe-logo.svg";
import { FaRocket, FaCreditCard, FaShieldAlt, FaUsers } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4} bg="purple.500">
      <VStack spacing={8} align="stretch">
        <Box textAlign="center" py={10} bg="gray.50" borderRadius="md">
          <Image src={StripeLogo} alt="Stripe Logo" mb={4} />
          <Heading as="h1" size="2xl" mb={4}>
            Welcome to Stripe
          </Heading>
          <Text fontSize="xl" mb={6}>
            The best payment processing platform for your business.
          </Text>
          <Button colorScheme="teal" size="lg" rightIcon={<FaRocket />}>
            Get Started
          </Button>
        </Box>

        <Box py={10}>
          <Heading as="h2" size="xl" mb={6} textAlign="center">
            Why Choose Us?
          </Heading>
          <Flex justify="space-around" wrap="wrap">
            <Box textAlign="center" p={5} shadow="md" borderWidth="1px" borderRadius="md" maxW="sm">
              <FaCreditCard size="3em" />
              <Heading as="h3" size="lg" mt={4} mb={2}>
                Easy Payments
              </Heading>
              <Text>
                Seamlessly accept payments online with our easy-to-use platform.
              </Text>
            </Box>
            <Box textAlign="center" p={5} shadow="md" borderWidth="1px" borderRadius="md" maxW="sm">
              <FaShieldAlt size="3em" />
              <Heading as="h3" size="lg" mt={4} mb={2}>
                Secure
              </Heading>
              <Text>
                Your transactions are secure with our top-notch security measures.
              </Text>
            </Box>
            <Box textAlign="center" p={5} shadow="md" borderWidth="1px" borderRadius="md" maxW="sm">
              <FaUsers size="3em" />
              <Heading as="h3" size="lg" mt={4} mb={2}>
                Customer Support
              </Heading>
              <Text>
                Our support team is here to help you 24/7 with any issues.
              </Text>
            </Box>
          </Flex>
        </Box>

        <Box py={10} textAlign="center">
          <Heading as="h2" size="xl" mb={6}>
            Join Thousands of Happy Customers
          </Heading>
          <Text fontSize="lg" mb={6}>
            See why businesses around the world trust Stripe for their payment processing needs.
          </Text>
          <Button colorScheme="teal" size="lg">
            Sign Up Now
          </Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;