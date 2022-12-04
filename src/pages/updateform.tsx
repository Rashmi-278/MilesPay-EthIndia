import React from "react";
import { Heading, Center, VStack, HStack } from "@chakra-ui/react";
import Updateform from "../components/UpdateForm";
import Login from "../components/Signin";

export default function UpdateForm() {
  return (
    <>
      <Center
        padding={10}
        height={'100vh'}
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
          <Login></Login>
          <Updateform />

        </VStack>
      </Center>
    </>
  );
}
