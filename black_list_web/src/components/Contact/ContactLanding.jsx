// import React from "react";
// import { IoIosArrowForward } from "react-icons/io";
// import { Link } from "react-router-dom";
// import contactBg from '../../assets/images/contact_banner.jpg'

// export default function ContactLanding() {
//   return (
//     <div
//       className="xl:px-48 lg:px-20 md:px-12 px-10 "
//       style={{
//         backgroundImage: `url(${contactBg})`,
//         backgroundSize: "cover",
//         height: "200px",
//       }}
//     >
//       <div className="absolute inset-0 bg-black opacity-25 h-[300px]"></div>

//       <div className="relative z-10  h-[80%] flex items-center lg:justify-normal justify-center">
//         <h1 className="lg:text-6xl text-5xl font-semibold text-yellow-500 lg:text-left text-center">
//         Contact
//         </h1>
//       </div>
//       <div className="relative z-10 text-center h-[20%] flex items-end border-0 lg:justify-normal justify-center">
//         <div className="px-4 py-3 flex items-center gap-x-2  border-0 bg-white w-fit rounded-tr-md rounded-tl-md">
//           <Link to={"/"}>
//             <h2 className="text-black hover:text-yellow-500 hover:cursor-pointer">
//               Home
//             </h2>
//           </Link>
//           <IoIosArrowForward className="text-yellow-500" />
//           <h2 className="text-gray-500">Contact</h2>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import contactBg from "../../assets/images/contact_banner.jpg";

export default function ContactLanding() {
  return (
    <>
      {/* Banner Section */}
      <div
        className="relative xl:px-48 lg:px-20 md:px-12 px-10"
        style={{
          backgroundImage: `url(${contactBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "200px",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-25 h-full"></div>
        <div className="relative z-10 h-[80%] flex items-center lg:justify-normal justify-center">
          <h1 className="lg:text-6xl text-5xl font-semibold text-yellow-500 lg:text-left text-center">
            Contact
          </h1>
        </div>
        <div className="relative z-10 text-center h-[20%] flex items-end border-0 lg:justify-normal justify-center">
          <div className="px-4 py-3 flex items-center gap-x-2 border-0 bg-white w-fit rounded-tr-md rounded-tl-md">
            <Link to={"/"}>
              <h2 className="text-black hover:text-yellow-500 hover:cursor-pointer">
                Home
              </h2>
            </Link>
            <IoIosArrowForward className="text-yellow-500" />
            <h2 className="text-gray-500">Contact</h2>
          </div>
        </div>

        {/* Contact Form Overlay */}
        <div className="absolute w-full left-[65%] transform -translate-x-1/2 bottom-[-500px] max-w-xl bg-white shadow-lg rounded-lg p-10 z-20 hidden lg:block">
          <h2 className="text-3xl font-semibold mb-6 text-center">
            Send a message
          </h2>
          <form className="space-y-6">
            {/* Name Field */}
            <div className="flex flex-col">
              <label className="text-gray-700 mb-2" htmlFor="name">
                Name *
              </label>
              <input
                type="text"
                id="name"
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
              />
            </div>

            {/* Email & Phone Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label className="text-gray-700 mb-2" htmlFor="email">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-gray-700 mb-2" htmlFor="phone">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>

            {/* Message Field */}
            <div className="flex flex-col">
              <label className="text-gray-700 mb-2" htmlFor="message">
                Message *
              </label>
              <textarea
                id="message"
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="5"
                placeholder="Write your message here"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-colors"
              >
                Send Message <IoIosArrowForward className="inline ml-2" />
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Space to push content down after form overlay */}
      {/* <div className="h-[250px]">
        <div className="col-span-12 lg:col-span-6">
          <div className="flex md:justify-normal justify-center">
            <h2 className="text-center py-1 bg-[#537cd9] w-fit text-white px-4 text-md rounded-lg mb-2">
              About us
            </h2>
          </div>
          <h1 className="text-4xl font-semibold mb-4 md:text-start text-center">
            Report to Help Fight Fraud!
          </h1>
          <h6 className="mt-2 text-gray-500 mb-5 md:text-start text-center">
            Bangladesh Blacklist is a cybercrime and fraud reporting platform
            for the general public and private organization helping Bangladesh
            Government’s efforts to improve cybersecurity. Our role is to help
            Digital Bangladesh become more safe and secure.
          </h6>
          <div className="md:block hidden">
            <div className=" bg-yellow-500 w-fit font-semibold text-lg text-gray-600 rounded hidden lg:block"></div>
          </div>
        </div>
      </div> */}
    </>
  );
}
