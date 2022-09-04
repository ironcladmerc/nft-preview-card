import type { NextPage } from "next";
import Head from "next/head";
import NftPreviewCard from "../components/NftPreviewCard";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-veryDarkBlueMain">
      <Head>
        <title>NFT Preview Card Component</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <NftPreviewCard />
    </div>
  );
};

export default Home;
