import React from "react";

export default function WhyUs() {
  return (
    <div className="pb-16">
      <div>
        <h2 className="text-center py-1 bg-[#537cd9] w-fit text-white px-4 mx-auto text-md rounded-lg mb-4">
          Why us?
        </h2>
        <h1 className="text-4xl font-bold mx-auto text-center">
          The Power of Bangladesh Maldives
        </h1>
      </div>
      <div className="grid grid-cols-12 gap-6 pt-12">
        <div className="col-span-12 lg:col-span-6 flex justify-center items-center">
          <img
            src="https://bdblacklist.com/wp-content/uploads/2024/05/About.jpg"
            alt="whyus img"
          />
        </div>
        <div className="col-span-12 lg:col-span-6">
          <div className="flex md:justify-normal justify-center">
            <h2 className="text-center py-1 bg-[#537cd9] w-fit text-white px-4 text-md rounded-lg mb-2">
              What our users say
            </h2>
          </div>
          <h1 className="text-4xl font-semibold mb-4 md:text-start text-center">
            Users Experiences
          </h1>
          <h6 className="mt-2 text-gray-500 mb-5 md:text-start text-center">
            We can't resolve your individual report, but we use reports to
            investigate and bring cases against fraud, scams, and bad business
            practices.
          </h6>
          <div className="md:block hidden">
            <div className="flex gap-x-4 ">
              <button
                // onClick={prevSlide}
                className="p-4 bg-yellow-500 rounded-lg"
              >
                {/* <FaArrowLeft /> */}
              </button>
              <button
                // onClick={nextSlide}
                className="p-4 bg-yellow-500 rounded-lg"
              >
                {/* <FaArrowRight /> */}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
