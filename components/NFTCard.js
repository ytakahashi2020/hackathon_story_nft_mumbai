import { ThirdwebNftMedia } from "@thirdweb-dev/react";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export const NFTCard = ({ nft }) => {
  return (
    <Link href={`/nft/${nft.metadata.id}`}>
      <div className={styles.NFTCard}>
        <ThirdwebNftMedia metadata={nft.metadata} width="100%" height="100%" />
        <h3>{nft.metadata.name}</h3>
      </div>
    </Link>
  );
};
