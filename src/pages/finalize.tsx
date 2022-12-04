import { Center, Container, Flex, Heading, VStack } from "@chakra-ui/react";
import React, { useContext } from "react";
import { AppContext } from "../pages/_app";
import UpdateForm from "./updateform";

export default function TextTrxxack() {
  const { appState, setAppState } = useContext(AppContext);
  return (
      <Center
        padding={10}
        height={'100vh'}
        bg="#edf3f8"
        _dark={{
          bg: "#111",
        }}
      >
        <VStack>
         
          {appState}
          </VStack>
      <UpdateForm /> 
    </Center>
  );
}

// set isDone to true as true after this