import type { AppProps } from "next/app";
import { ThirdwebProvider, localWallet, metamaskWallet, smartWallet } from "@thirdweb-dev/react";
import "../styles/globals.css";
import { ZksyncEraTestnet } from "@thirdweb-dev/chains";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
// const activeChain = "mumbai";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider 
      activeChain={ZksyncEraTestnet}
      supportedWallets={[
        metamaskWallet(),
        localWallet(),
      ]}
      >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
