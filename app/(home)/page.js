import React from "react";
import Presentation from "./components/home";
import Experiencie from "./components/experiencie";

export default function Home() {
  return (
    <div>
      <div className="flex justify-center my-20">
        <p className="text-[50px] font-bold">Hi, I'm Celeste</p>
      </div>
      <div className="m-10 my-20">
        <Presentation />
      </div>
      <div className="m-10 my-20">
        <Experiencie />
      </div>
    </div>
  );
}
