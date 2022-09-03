import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "../components/Header";
import { MainSection } from "../components/Main";

const Home: NextPage = () => {
  return (
    <div className="app">
      <Head>
        <title>Colin Knowles</title>
        <meta name="description" content="Welcome to my personal site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <MainSection />
    </div>
  );
};

export default Home;
