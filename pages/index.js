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
import HomeNavBar from "../components/HomeNav.jsx";

export default function Home() {
  return (
    <>
      <HomeNavBar />
      <HeroSection />
      <WhatWeDo/>
      <WhyUS/>
      <Partners/>
      <Faq/>
      <NewsLetter/>
     
      <Footer />
    </>
  )
}
