import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import Footer from "../components/Footer";

export default function LayoutRoutes() {
  const [showHeaderNav, setShowHeaderNav] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (prevScrollPos > currentScrollPos) {
        setShowHeaderNav(true);
      } else {
        setShowHeaderNav(false);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <div>
      <BrowserRouter>
        <div
          className={`sticky top-0 w-full z-50 transition-transform duration-1000 xl:px-48 lg:px-36 md:px-12 px-5 bg-white ${
            showHeaderNav ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <Navbar />
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
