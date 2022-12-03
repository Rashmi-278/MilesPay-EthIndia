import React from "react";
import Orderform from "../components/Orderform";
import { Heading, Center, VStack } from "@chakra-ui/react";

export default function TextTrxxack() {
  return (
    <>
      <Center
        padding={10}
        bg="#edf3f8"
        _dark={{
          bg: "#111",
        }}
      >
        <VStack>
          <Heading as="h2" size="2xl">
            MilesPay
          </Heading>
          <Heading as="h4" size="l">
            Create Invoice
          </Heading>
        </VStack>
      </Center>
      <Orderform />
    </>
  );
}
