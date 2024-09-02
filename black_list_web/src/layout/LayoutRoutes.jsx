import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";

export default function LayoutRoutes() {
  return (
    <div>
      <BrowserRouter>
        <div className="xl:px-48 lg:px-36 md:px-12 px-5 bg-white">
          <Navbar />
        </div>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/*" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
