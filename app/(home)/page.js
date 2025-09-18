import React from "react";
import Presentation from "./components/home";
import Experiencie from "./components/experiencie";

export default function Home() {
  return (
    <div>
      <div className="lg:mt-15">
        <Presentation />
      </div>
      <div className="mt-20 lg:mt-30">
        <Experiencie />
      </div>
    </div>
  );
}
