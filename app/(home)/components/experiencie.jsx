"use client";
import React from "react";
import Technologies from "./technologies";
import { experiences } from "../technologies";
import { Slider } from "./slider";

export default function Experiencie() {
  return (
    <div id="experience">
      <div className="flex items-center justify-center " data-aos="fade-up">
        <div className="text-center ">
          <h1 className="  text-[rgb(5,_112,_184,_0.7)] text-3xl md:text-5xl font-bold tracking-widest transform transition-all duration-500 hover:scale-105">
            Experiencies
          </h1>

          <div className="w-32 h-1 bg-gradient-to-r mx-auto opacity-60"></div>
        </div>
      </div>

      <div
        className="container w-auto mx-auto sm:max-w-7xl p-4 "
        data-aos="fade-up"
        data-aos-duration="500"
      >
        <div className="grid grid-cols-1 grid-rows-auto gap-6">
          {experiences.map((experience, index) => (
            <div
              className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 backdrop-blur-sm relative border rounded-md p-4 flex flex-col w-full lg:w-9/12 mx-auto"
              key={index}
            >
              <div className="flex flex-col sm:flex-row justify-between ">
                <div className="text-xl font-bold text-white ">
                  {experience.title}
                  <div className="text-gray-200 font-extralight text-sm ">
                    {experience.position}
                  </div>
                </div>
                <div className="text-sm text-white justify-end mb-5">
                  {experience.date}
                </div>
              </div>

              <div className="mt-3 mb-1 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>

              <div className="flex-grow overflow-hidden ">
                <div className="rounded-md p-1">
                  {experience.description && (
                    <ul className="list-blue-marker p-2 list-disc list-inside text-white space-y-1">
                      {experience.description
                        .split(". ")
                        .map(
                          (valor, i) =>
                            valor.trim() && <li key={i}>{valor.trim()}</li>
                        )}
                    </ul>
                  )}
                </div>
              </div>
              <div className="mt-4 flex justify-center items-center flex-col sm:items-center sm:gap-4">
                <div className="mb-4 sm:mb-0">
                  <Technologies technologies={experience.technologies} />
                </div>
                <div className="mt-2">
                  <Slider images={experience.images} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
