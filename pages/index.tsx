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
        <meta
          name="description"
          content="Colin Knowles - Full Stack Developer"
        />
        <meta
          property="og:title"
          content="Colin Knowles - Full Stack Developer"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="card.png" />
        <meta property="og:url" content="https://knowlesc.github.io/" />
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
