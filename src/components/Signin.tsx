import React from "react";
import { ConnectKitButton } from "connectkit";
import { useAccount } from "wagmi";
import { Button, Container, Heading } from "@chakra-ui/react";

export default function Login() {
  const { address } = useAccount();
  return (
    <Container>
      <Heading as="h6" size="xs">
      {address}
      </Heading>
      <ConnectKitButton.Custom>
        {({ isConnected, show, ensName }) => {
          return (
            <Button onClick={show} >
              {isConnected ? ensName ?? "Logout" : "Login"}
            </Button>
          );
        }}
      </ConnectKitButton.Custom>
    </Container>
  );
}
