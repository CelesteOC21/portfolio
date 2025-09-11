import React from "react";
import Presentation from "./components/home";
import Experiencie from "./components/experiencie";

export default function Home() {
  return (
    <div>
      <div className="w-full flex justify-center py-16 mt-20" id="/">
        <p className="text-3xl md:text-4xl  lg:text-6xl font-bold">
          Hi, I'm Celeste
        </p>
      </div>
      <div className="mt-20 mb-40">
        <Presentation />
      </div>
      <div className="mt-20 mb-40">
        <Experiencie />
      </div>
    </div>
  );
}
