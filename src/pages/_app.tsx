import { ChakraProvider } from "@chakra-ui/react";
import {
  ConnectKitProvider,
  ConnectKitButton,
  getDefaultClient,
} from "connectkit";
import { WagmiConfig, createClient, chain, configureChains } from "wagmi";
import theme from "../theme";
import { AppProps } from "next/app";
import React, { useState } from "react";

export const AppContext = React.createContext(undefined);

// setup a wagmi client first
const chains = [chain.polygonMumbai];

const alchemyId = "L5y5rMAxy2S29WmJJkgz8x4iCkLzSEoV";

const client = createClient(
  getDefaultClient({
    appName: "Metropolis",
    alchemyId,
    chains,
  })
);

function MyApp({ Component, pageProps }: AppProps) {
  const [appState, setAppState] = useState({
    isWalletConnected: false
  })
  return (
    <ChakraProvider theme={theme}>
      <WagmiConfig client={client}>
        <ConnectKitProvider>
          <AppContext.Provider value={{appState, setAppState}}>
            <Component {...pageProps} />
          </AppContext.Provider>
        </ConnectKitProvider>
      </WagmiConfig>
    </ChakraProvider>
  );
}

export default MyApp;
