import React, { useContext } from "react";
import { ConnectKitButton } from "connectkit";
import { useAccount } from "wagmi";
import { Button, Container, Heading, Stack } from "@chakra-ui/react";

import { AppContext } from "../pages/_app";

export default function Login() {
  const { address } = useAccount();
  const { appState, setAppState } = useContext(AppContext);

  console.log(appState);
  return (
    <Stack
      flex={{ base: 1, md: 0 }}
      justify={"flex-end"}
      direction={"row"}
      spacing={6}
    >
      <Container>
        <Heading as="h6" size="xs">
          {address}
        </Heading>
        <ConnectKitButton.Custom>
          {({ isConnected, show, ensName }) => {
            setAppState(address);

            return (
              <Button onClick={show} color={"blue.500"}>
                {isConnected ? ensName ?? "Logout" : "Login"}
              </Button>
            );
          }}
        </ConnectKitButton.Custom>
      </Container>
    </Stack>
  );
}
