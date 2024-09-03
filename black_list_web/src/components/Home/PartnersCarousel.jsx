import React, { useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

export default function PartnersCarousel() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [itemsToShow, setItemsToShow] = useState(3); // Default to 3 items for large screens

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    // Determine how many items to show based on the screen size
    if (windowWidth >= 1024) {
      setItemsToShow(3); // 3 items for large screens and above (lg and up)
    } else if (windowWidth >= 768) {
      setItemsToShow(2); // 2 items for medium screens (md)
    } else {
      setItemsToShow(1); // 1 item for small screens (sm)
    }

    return () => window.removeEventListener("resize", handleResize);
  }, [windowWidth]);

  const logos = [
    "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
    "https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg",
    "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg",
    "https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg",
    "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
    "https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg",
    "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg",
    "https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 >= logos.length ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? logos.length - 1 : prevIndex - 1
    );
  };

  const getVisibleLogos = () => {
    const endIndex = currentIndex + itemsToShow;
    if (endIndex <= logos.length) {
      return logos.slice(currentIndex, endIndex);
    } else {
      // Wrap around case: combine the remaining items from the start
      return [
        ...logos.slice(currentIndex, logos.length),
        ...logos.slice(0, endIndex - logos.length),
      ];
    }
  };

  return (
    <div className="relative w-full mx-auto overflow-hidden py-8">
      <h1 className="text-4xl font-semibold text-center mb-8">Our Partners</h1>
      <div className="flex items-center justify-center space-x-4">
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className="text-3xl hover:text-gray-500 transition"
        >
          <MdChevronLeft />
        </button>

        {/* Carousel Images */}
        <div className="w-full">
          <div className="flex space-x-4 items-center justify-center w-full">
            {getVisibleLogos().map((logo, index) => (
              <div
                key={index}
                className="w-full h-40 flex items-center justify-center"
              >
                <img
                  src={logo}
                  alt={`Partner logo ${index}`}
                  className=" h-full transition-all duration-500 ease-in-out w-[280px]"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="text-3xl hover:text-gray-500 transition"
        >
          <MdChevronRight />
        </button>
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center mt-7 space-x-2">
        {logos.map((_, idx) => (
          <div
            key={idx}
            className={`w-2 h-2 rounded-full ${
              idx === currentIndex ? "bg-gray-800" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
