import Navbar from "../components/Navbar.jsx";
import HeroSection from "../components/HeroSection.jsx";
import SupportFarmers from "../components/SupportFarmers.jsx";
import Blog from "../components/Blog.jsx";
import Footer from "../components/Footer.jsx";
import Model from "../components/Model.jsx";
import HelpingFarmers from "../components/helpingFarmers.jsx";
import WhatWeDo from "../components/whatWeDO.jsx";
import WhyUS from "../components/whyUs.jsx";
import Partners from "../components/partners.jsx";
import Faq from "../components/faq.jsx";
import NewsLetter from "../components/newsLetterSignUp.jsx";
import AboutHero from "../components/About/heroSection.jsx";
import AboutMain from "../components/About/aboutMain.jsx";
import Values from "../components/About/values.jsx";

export default function Home() {
  return (
    <>
      <Navbar />
      <AboutHero />
      <AboutMain/>
      <Values/>
      <NewsLetter/>
      <Footer />
    </>
  )
}
