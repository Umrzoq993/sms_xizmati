import React from "react";
import HeroSection from "../components/HeroSection";
import WhyChooseUs from "../components/WhyChooseUs";
import Benefits from "../components/Benefits";
import UsageSteps from "../components/UsageSteps";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyChooseUs />
      <Benefits />
      <UsageSteps />
      <ContactForm />
      <Footer />
    </>
  );
}
