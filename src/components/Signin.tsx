import React from "react";
import { ConnectKitButton } from "connectkit";
import { useAccount } from "wagmi";
import { Container } from "@chakra-ui/react";

export default function Login() {
  const { address } = useAccount();
  return (
    <Container>
        <div>
        <ConnectKitButton.Custom>
          {({ isConnected, show, ensName }) => {

            return (
              <div className="login" onClick={show}>
                {isConnected ? ensName ?? "Logout" : "Login"}
                <div className="bar"></div>
              </div>
            );
          }}
        </ConnectKitButton.Custom>
      </div>
    </Container>
  );
}
