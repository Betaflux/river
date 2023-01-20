import Head from "next/head";
import Product from "../components/Product";

const Home = () => (
  <>
    <Head>
      <title>Create Next App</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className="font-bold"><Product/></main>
  </>
);

export default Home;
