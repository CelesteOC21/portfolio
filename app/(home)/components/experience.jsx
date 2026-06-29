"use client";
import React from "react";
import Technologies from "./technologies";
import { experiences } from "../technologies";
import { Slider } from "./slider";

export default function Experience() {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-12" data-aos="fade-up">
        <h1 className="text-[rgb(5,_112,_184,_0.7)] text-3xl md:text-5xl font-bold tracking-widest transform transition-all duration-500 hover:scale-105">
          Experience
        </h1>
        <div className="w-32 h-1 bg-gradient-to-r from-transparent via-blue-500/60 to-transparent mx-auto mt-2"></div>
      </div>

      <div className="grid grid-cols-1 gap-8" data-aos="fade-up" data-aos-duration="500">
        {experiences.map((exp, index) => (
          <div
            className="glass-card rounded-xl p-6 flex flex-col w-full lg:w-10/12 mx-auto hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(59,130,246,0.15)] transition-all duration-300"
            key={index}
          >
            <div className="flex flex-col sm:flex-row justify-between gap-2">
              <div>
                <div className="text-xl font-bold text-white">
                  {exp.title}
                </div>
                <div className="text-gray-400 font-light text-sm">
                  {exp.position}
                </div>
              </div>
              <div className="text-sm text-gray-500 whitespace-nowrap">
                {exp.date}
              </div>
            </div>

            <div className="mt-4 mb-4 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>

            <div className="flex-grow">
              {exp.description && (
                <ul className="list-blue-marker list-disc list-inside text-gray-300 space-y-1.5 text-sm leading-relaxed">
                  {exp.description
                    .split(". ")
                    .map(
                      (valor, i) =>
                        valor.trim() && <li key={i}>{valor.trim()}</li>
                    )}
                </ul>
              )}
            </div>

            <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <Technologies technologies={exp.technologies} />
              <Slider images={exp.images} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
