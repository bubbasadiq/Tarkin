import HeroSection from "../components/HeroSection.jsx";
import FoodSupply from "../components/FoodSupply.jsx";
import FarmInventory from "../components/FarmInventory.jsx";
import WhyTarkin from "../components/WhyTarkin.jsx";
import Partners from "../components/Partners.jsx";
import Faqs from "../components/Faq.jsx";
import Newsletter from "../components/Newsletter.jsx";
import Footer from "../components/Footer";
import Head from "next/head.js";


export default function Home() {
  return (
    <>
       <Head>
      <meta charset="UTF-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Tarkin</title>
        <link rel="icon" href="logo.svg" />
      </Head>
      <HeroSection />
      <FoodSupply />
      <FarmInventory />
      <WhyTarkin />
      <Partners />
      <Faqs />
      <Newsletter />
      <Footer />
    </>
  )
}