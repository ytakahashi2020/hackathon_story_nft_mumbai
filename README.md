## Getting Started

Create a project using this example:

```bash
npx thirdweb create --template next-typescript-starter
```

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

On `pages/_app.tsx`, you'll find our `ThirdwebProvider` wrapping your app, this is necessary for our [hooks](https://portal.thirdweb.com/react) and
[UI Components](https://portal.thirdweb.com/ui-components) to work.

### Deploy to IPFS

Deploy a copy of your application to IPFS using the following command:

```bash
yarn deploy
```

## Learn More

To learn more about thirdweb and Next.js, take a look at the following resources:

- [thirdweb React Documentation](https://docs.thirdweb.com/react) - learn about our React SDK.
- [thirdweb TypeScript Documentation](https://docs.thirdweb.com/typescript) - learn about our JavaScript/TypeScript SDK.
- [thirdweb Portal](https://docs.thirdweb.com) - check our guides and development resources.
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.

You can check out [the thirdweb GitHub organization](https://github.com/thirdweb-dev) - your feedback and contributions are welcome!

## Join our Discord!

For any questions, suggestions, join our discord at [https://discord.gg/thirdweb](https://discord.gg/thirdweb).


# 仕様

## 1 AIによる画像生成について

## 2 zksyncEra Testnetの課題と現状

### 1 作成済みURL

zksync Era Testnetで作成したURLはこちらです。

NFT画像の表示とメタマスクによるclaimを行います。
https://zksync-era-testnet-garelly.vercel.app/

### 2 スマートウォレットについて

thirdwebのアカウントアブストラクション作成のコントラクトである「Simple Wallet Factory (beta)」がzksyncEra Testnetで未対応。

https://thirdweb.com/thirdweb.eth/AccountFactory

そのため、この機能はmumbaiで作ることとしました。

### 3 ローカルウォレットについて

ローカルウォレットの実装は可能でしたが、ガスレストランザクションで未対応箇所があったため、mumbaiで作りました。

当初考えていた構成は次のようになります。

#### 1. thirdwebの機能を使い、ローカルウォレット作成　⇨　可能

#### 2. OpenZeppelin Defenderによるリレイヤー・オートタスクの作成　⇨ 可能

#### 3. thirdwebによるフォワーダー使用　⇨　zksyncEra Testnet 未対応

![](images/1.png)
https://github.com/thirdweb-dev/ozdefender-autotask?ref=blog.thirdweb.com


