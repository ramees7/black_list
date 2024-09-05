import React, { useEffect } from "react";
import AboutLanding from "../components/About/AboutLanding";
import WhyUs from "../components/About/WhyUs";

export default function About() {
  const handleToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    handleToTop();
  }, []);
  return (
    <div>
      <AboutLanding />
      <div className="xl:px-48 lg:px-20 md:px-12 px-10 bg-white py-20">
        <WhyUs />
      </div>
    </div>
  );
}
