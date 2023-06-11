import type { AppProps } from "next/app";
import { ThirdwebProvider, localWallet, metamaskWallet, smartWallet } from "@thirdweb-dev/react";
import "../styles/globals.css";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "mumbai";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider 
      activeChain={activeChain}
      supportedWallets={[
        metamaskWallet(),
        localWallet(),
        smartWallet({
          factoryAddress: process.env.NEXT_PUBLIC_FACTORY_ADDRESS!,
          thirdwebApiKey: process.env.NEXT_PUBLIC_API_KEY!,
          gasless: true,
          personalWallets:[
            metamaskWallet()
          ]
        })
      ]}
      sdkOptions={{
        gasless: {
          openzeppelin: {
            relayerUrl: "https://api.defender.openzeppelin.com/autotasks/e200a696-25ba-4c62-bc11-33707a1e724c/runs/webhook/9b4a6556-3f26-4b6a-8638-3c305d501266/T8PpSHE1DH2QCAW4BLADvo"
          }
        }
      }}
      >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
