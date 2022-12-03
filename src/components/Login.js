import React from "react";
import { useState } from "react";
import { ConnectKitButton } from "connectkit";
import { useAccount } from "wagmi";
import { Container } from "@chakra-ui/react";

export default function Login() {
  const [isConnected, setConnected] = useState(false);
  const { address } = useAccount();

  return (
    <Container>
      {address}
      <ConnectKitButton.Custom>
        {({ isConnected, show, ensName }) => {
          if (isConnected) {
            setConnected(true);
          } else {
            setConnected(false);
          }

          return (
            <div className="login" onClick={show}>
              {isConnected ? ensName ?? "Logout" : "Login"}
              <div className="bar"></div>
            </div>
          );
        }}
      </ConnectKitButton.Custom>
    </Container>
  );
}

const Container = styled.div`
  width: 300px;
  height: 50px;
  border: 1px solid black;
`;
