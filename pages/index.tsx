import { ConnectWallet, Web3Button, useContract, useNFTs} from "@thirdweb-dev/react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { NFTCard } from "../components/NFTCard";
import { NFT_CONTRACT_ADDRESS } from "../const/addresses";
import Image from 'next/image'
 
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
    <main className={styles.main}>
      <span className={styles.headerWalletConnectButton}>
        <ConnectWallet 
          theme="dark"
          btnTitle="Connect Wallet"
        />
      </span>
      <div className={styles.container}>
        <section className={styles.mainvisual}>
          <div className={styles.mainvisualHeader}>
            <h1 className={styles.mainvisualTitle}>STORY NFT</h1>
            <p className={styles.mainvisualDescription}>
            Story NFT is a pioneering NFT that blends AI and crypto, using AI-generated attributes to create unique images for each NFT, ushering in an uncharted breed of NFTs.
            </p>
          </div>
          <div className={styles.mainvisualButtons}>
            <Web3Button 
              contractAddress={NFT_CONTRACT_ADDRESS}
              action={(contract) => contract.erc721.claim(1)}
            >Claim
            </Web3Button>
          </div>
        </section>

        <section>
          {/* <h3>Gallery</h3> */}
          <div className={styles.NFTGrid}>
          {!isLoadingNFTs && (
            nfts?.map((nft, index) => (
              <NFTCard key={index} nft={nft} />
            ) 
          ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;
