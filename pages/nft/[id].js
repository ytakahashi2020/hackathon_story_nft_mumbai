import {
  useContractEvents,
  useNFT,
  useContract,
  ThirdwebNftMedia,
} from "@thirdweb-dev/react";
import { useRouter, router } from "next/router";
import styles from "../../styles/Home.module.css";
import { NFT_CONTRACT_ADDRESS } from "../../const/addresses";

const NFTDtailPage = () => {
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
    <div className={styles.container}>
      <h3>NFT Dtail Page</h3>
      <button onClick={() => router.back()}>Back</button>
      <h1>{nft?.metadata.name}</h1>
      {!isLoadingNFT && (
        <ThirdwebNftMedia
          metadata={nft.metadata}
          width="250px"
          height="250px"
        />
      )}
      <div>
        <h3>Traits:</h3>
        {nft?.metadata.attributes.map((attribute, index) => (
          <div key={index}>
            <strong>{attribute.trait_type}: </strong>
            {attribute.value}
          </div>
        ))}
      </div>
      <div>
        <h3>History:</h3>
        {!isLoadingEvents && (
          <div>
            {events.map((event, index) => (
              <div key={index}>
                <strong>From: </strong>
                {event.data.from}
                <strong>To: </strong>
                {event.data.to}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NFTDtailPage;
