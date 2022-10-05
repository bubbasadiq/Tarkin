import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import NewsLetter from "../components/newsLetterSignUp.jsx";
import ContactUs from "../components/contactUs/contactus.jsx";

export default function Home() {
  return (
    <>
      <Navbar />
      <ContactUs />
     
      <NewsLetter/>
      <Footer />
    </>
  )
}
