import { Container, Flex, Heading } from "@chakra-ui/react";
import React, { useContext } from "react";
import { AppContext } from "../pages/_app";
import UpdateForm from "./updateform";

export default function TextTrxxack() {
  const { appState, setAppState } = useContext(AppContext);
  return (
    <Container>
      <Flex>
        <Heading>{appState}</Heading>
      </Flex>
      <UpdateForm /> // set isDone as true after this
    </Container>
  );
}
