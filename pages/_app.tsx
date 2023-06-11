import type { AppProps } from "next/app";
import { ThirdwebProvider, localWallet, metamaskWallet, smartWallet } from "@thirdweb-dev/react";
import "../styles/globals.css";
import { ZksyncEraTestnet } from "@thirdweb-dev/chains";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "mumbai";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider 
      activeChain={ZksyncEraTestnet}
      supportedWallets={[
        metamaskWallet(),
        localWallet(),
      ]}
      sdkOptions={{
        gasless: {
          openzeppelin: {
            relayerUrl: "https://api.defender.openzeppelin.com/autotasks/53210486-233c-4445-b43f-7e2336082c80/runs/webhook/9b4a6556-3f26-4b6a-8638-3c305d501266/Lu46Fsk62w8Lcss1Ys1VfV"
          }
        }
      }}
      >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
