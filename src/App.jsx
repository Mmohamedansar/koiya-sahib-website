import { useState } from "react";
import { ToastProvider } from "./components/ToastContext.jsx";
import FloatingWhatsApp from "./components/FloatingWhatsApp.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import CorrugatedDivider from "./components/CorrugatedDivider.jsx";
import Stats from "./components/Stats.jsx";
import About from "./components/About.jsx";
import Products from "./components/Products.jsx";
import Brands from "./components/Brands.jsx";
import Quote from "./components/Quote.jsx";
import DeliveryAreas from "./components/DeliveryAreas.jsx";
import Contact from "./components/Contact.jsx";
import EnquiryStrip from "./components/EnquiryStrip.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  const [quotePrefill, setQuotePrefill] = useState("");

  return (
    <ToastProvider>
      <FloatingWhatsApp />
      <Header />
      <main>
        <Hero />
        <CorrugatedDivider />
        <Stats />
        <About />
        <Products onRequestQuote={setQuotePrefill} />
        <Brands />
        <Quote prefill={quotePrefill} />
        <DeliveryAreas />
        <Contact />
        <EnquiryStrip />
      </main>
      <Footer />
    </ToastProvider>
  );
}
