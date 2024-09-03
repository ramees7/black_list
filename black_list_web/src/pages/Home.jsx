import React from "react";
import HomeLanding from "../components/Home/HomeLanding";
import DiscoverList from "../components/Home/DiscoverList";

export default function Home() {
  return (
    <div>
      <HomeLanding />
      <div className="xl:px-48 lg:px-36 md:px-12 px-5 bg-white py-20">
        <DiscoverList />
      </div>
    </div>
  );
}
