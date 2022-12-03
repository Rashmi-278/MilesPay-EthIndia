import { Container, Flex, Heading } from "@chakra-ui/react";
import React, { useContext } from "react";
import { AppContext } from "../pages/_app";

export default function TextTrxxack() {
  const { appState, setAppState } = useContext(AppContext);
  return (
    <Container>
      <Flex>
        <Heading>{appState}</Heading>
      </Flex>
    </Container>
  );
}
