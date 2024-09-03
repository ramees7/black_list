// import React from "react";
// import { MdOutlineShoppingCart } from "react-icons/md";

// export default function DiscoverList() {
//   return (
//     <div>
//       <div>
//         <h2 className="text-center py-1 bg-[#537cd9] w-fit text-white px-4 mx-auto text-md rounded-lg mb-4">
//           Fraud, scams, and bad business practices.
//         </h2>
//         <h1 className="text-4xl font-bold mx-auto text-center">
//           Discover Bangladesh Blacklist
//         </h1>
//       </div>
//       <div className="pt-16 grid grid-cols-12 gap-5">
//         <div className="col-span-6 md:col-span-4 rounded-lg lg:col-span-3 h-[270px] w-full border-2">
//             <div className=" text-8xl bg-black text-white h-[200px] flex justify-center items-center w-full">
//                 <MdOutlineShoppingCart/>
//             </div>
//             <div className="h-[70px] items-center flex justify-center">
//                 <h1 className="text-center font-semibold">E-Commerce Fraud</h1>
//             </div>
//         </div>
        
//       </div>
//     </div>
//   );
// }



import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegStar } from "react-icons/fa"; // Example additional icon

export default function DiscoverList() {
  return (
    <div>
      <div>
        <h2 className="text-center py-1 bg-[#537cd9] w-fit text-white px-4 mx-auto text-md rounded-lg mb-4">
          Fraud, scams, and bad business practices.
        </h2>
        <h1 className="text-4xl font-bold mx-auto text-center">
          Discover Bangladesh Blacklist
        </h1>
      </div>
      <div className="pt-16 grid grid-cols-12 gap-5">
        <div className="col-span-6 md:col-span-4 rounded-lg lg:col-span-3 h-[270px] w-full border-2 relative group">
          <div className="bg-black text-white h-[200px] flex justify-center items-center w-full transition-opacity duration-300 group-hover:opacity-20">
            <MdOutlineShoppingCart className="text-8xl" />
          </div>
          <div className="absolute inset-0 flex justify-center h-[200px] items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <FaRegStar className="text-6xl text-yellow-500" /> {/* Replace with your icon */}
          </div>
          <div className="h-[70px] items-center flex justify-center">
            <h1 className="text-center font-semibold">E-Commerce Fraud</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
