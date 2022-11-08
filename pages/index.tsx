import type { NextPage } from "next";
import Head from "next/head";
import { Footer } from "../components/Footer";
import { MainSection } from "../components/Main";
import { Navigation } from "../components/Navigation";
import { Splash } from "../components/Splash";

const Home: NextPage = () => {
  return (
    <div className="app">
      <Head>
        <title>Colin Knowles</title>
        <meta name="description" content="Welcome to my personal site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Splash />
      <Navigation />
      <MainSection />
      <Footer />
    </div>
  );
};

export default Home;
