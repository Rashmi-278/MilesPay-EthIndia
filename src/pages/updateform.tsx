import React from "react";
import { Heading, Center, VStack } from "@chakra-ui/react";
import Updateform from "../components/UpdateForm";

export default function UpdateForm() {
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
            Update Invoice
          </Heading>
        </VStack>
      </Center>
      <Updateform />
    </>
  );
}
