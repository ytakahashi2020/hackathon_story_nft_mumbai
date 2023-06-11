import { ConnectWallet, Web3Button, useContract, useNFTs} from "@thirdweb-dev/react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { NFTCard } from "../components/NFTCard";
import { NFT_CONTRACT_ADDRESS } from "../const/addresses";

const Home: NextPage = () => {
  const { contract } = useContract(NFT_CONTRACT_ADDRESS);
  const { data: nfts, isLoading: isLoadingNFTs } = useNFTs(
    contract,
    {
      count: 30,
      start: 0
    }
  )
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <ConnectWallet />
        aa
        <Web3Button 
          contractAddress={NFT_CONTRACT_ADDRESS}
          action={(contract) => contract.erc721.claim(1)}
        >Claim
        </Web3Button>
        <div>
          <h3>Gallery</h3>
          <div className={styles.NFTGrid}>
          {!isLoadingNFTs && (
            nfts?.map((nft, index) => (
              <NFTCard key={index} nft={nft} />
            ) 
          ))}
          </div>
        </div>
        
      </main>
    </div>
  );
};

export default Home;
