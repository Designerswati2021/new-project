// import Head from "next/head";
// import Image from "next/image";
import Header from "../components/header";
import Banner from "../components/banner";
import About from "../components/about";
import Services from "../components/services";
import Features from "../components/features";
import Steps from "../components/steps";
import Footer from "../components/footer";
// import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <main>
        <Header />
        <Banner />
        <About />
        <Services />
        <Features />
        <Steps />
        <Footer />
      </main>
    </div>
  );
}
