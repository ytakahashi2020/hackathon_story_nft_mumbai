import {
  useContractEvents,
  useNFT,
  useContract,
  ThirdwebNftMedia,
} from "@thirdweb-dev/react";
import { useRouter, router } from "next/router";
import styles from "../../styles/Home.module.css";
import { NFT_CONTRACT_ADDRESS } from "../../const/addresses";

const NFTDetailPage = () => {
  const { id } = useRouter().query;
  const { contract } = useContract(NFT_CONTRACT_ADDRESS);
  const { data: nft, isLoading: isLoadingNFT } = useNFT(contract, id);
  const { data: events, isLoading: isLoadingEvents } = useContractEvents(
    contract,
    "Transfer",
    {
      queryFilter: {
        filters: {
          tokenId: id,
        },
        order: "desc",
      },
    }
  );

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {/* <h3>NFT Dtail Page</h3> */}
        <div className={styles.nftInfo}>
          <div className={styles.nftInfoHeader}>
            <button onClick={() => router.back()} className={styles.backButton}>
              Back
            </button>
            <h1>{nft?.metadata.name}</h1>
            <div className={styles.description}>
              {`${nft?.metadata.description.substring(0, 300)}.....`}
            </div>

            {/* <div>
              <span>Traits:</span>
              {nft?.metadata?.attributes?.map((attribute, index) => (
                <span key={index} className={styles.trait}>
                  <strong>{attribute.trait_type}: </strong>
                  {attribute.value}
                </span>
              ))}
            </div> */}
          </div>
          <div className={styles.nftImgWrapper}>
            {!isLoadingNFT && (
              <ThirdwebNftMedia
                metadata={nft.metadata}
                width="100%"
                height="auto"
                maxWidth="600px"
                maxHeight="600px"
              />
            )}
          </div>
        </div>

        <div className={styles.nftHistory}>
          {/* <h3>History:</h3>
          {!isLoadingEvents && (
            <div>
              {events?.map((event, index) => (
                <div key={index} className={styles.nftHistoryItem}>
                  <div>
                    <span className={styles.nftHistoryCaption}>From: </span>
                    {event.data.from}
                  </div>
                  <div className={styles.nftHistoryCaption}>
                    <span className={styles.nftHistoryCaption}>To: </span>
                    {event.data.to}
                  </div>
                </div>
              ))}
            </div>
          )} */}
          {/* <div className={styles.nftHistoryItem}>
            <div>
              <span className={styles.nftHistoryCaption}>From: </span>
              0x0000000000000000000000000000
            </div>
            <div className={styles.nftHistoryCaption}>
              <span className={styles.nftHistoryCaption}>To: </span>
              x0000000000000000000000000000
            </div>
          </div>

          {!events && <span>No onchain history yet.</span>} */}
        </div>
      </div>
    </main>
  );
};

export default NFTDetailPage;
