import React from "react";
import Presentation from "./components/home";
import Experiencie from "./components/experiencie";

export default function Home() {
  return (
    <div>
      <div className="w-full flex justify-center py-16 mt-15 lg:mt-30" id="/">
        <p className="text-3xl md:text-4xl  lg:text-6xl font-bold">
          Hi, I'm Celeste
        </p>
      </div>
      <div className="lg:mt-15">
        <Presentation />
      </div>
      <div className="mt-20 lg:mt-30">
        <Experiencie />
      </div>
    </div>
  );
}
