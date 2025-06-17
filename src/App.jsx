import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  React.useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);

  return (
    <>
      <Navbar />
      <Home />
      <ScrollToTop />
    </>
  );
}
