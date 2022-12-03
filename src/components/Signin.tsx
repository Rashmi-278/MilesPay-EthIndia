import React, { useContext } from "react";
import { ConnectKitButton } from "connectkit";
import { useAccount } from "wagmi";
import { Container } from "@chakra-ui/react";

import { AppContext } from "../pages/_app";

export default function Login() {
  const { address } = useAccount();
  const { appState, setAppState } = useContext(AppContext);

  console.log(appState);
  return (
    <Container>
      <div>
        <ConnectKitButton.Custom>
          {({ isConnected, show, ensName }) => {
            setAppState(address);
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
