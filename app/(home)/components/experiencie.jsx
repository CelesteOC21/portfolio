import React from "react";
import { Button } from "@/components/ui/button";
import { GoArrowUpRight } from "react-icons/go";

export default function Experiencie() {
  const experiences = [
    {
      title: "+IDEAS",
      position: "Full Stack Developer – Professional Intership",
      description:
        "Designed and developed a web application for internal process management. Implemented secure authentication and role management using NextAuth. Worked with PostgreSQL and Prisma ORM; deployed the app using Vercel. Implemented technologies: Next.js, Shadcn UI, TailwindCSS, Zod. Applied version control and project management using Git, GitHub, and Jira. Followed Agile methodologies such as Scrum for team collaboration. Integrated third-party services like UploadThing for image handling ",
      date: "Jalisco, México  January – June 2025  ",
    },
    {
      title: "GYM",
      position: "Full Stack Developer – Academic Project",
      description:
        "Developed a subscription payment platform for a gym. Implemented JWT-based authentication. Integrated payment gateway using Mercado Pago. Used React.js for the frontend and Node.js with Express for the backend. Database: MySQL.",

      date: "Jalisco, México  January – June 2025  ",
    },
    {
      title: "Web Application Project",
      position: "Web Developer – Academic Project",
      description:
        "Built a web application using React and Bootstrap for the frontend. Backend developed with Laravel and PHP, consuming external APIs. Implemented pagination to enhance navigation and user experience. Used Bootstrap to create a responsive web interface.",
      date: "Jalisco, México  August – December 2024   ",
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-center ">
        <div className="text-center space-y-8">
          <h1 className="  text-[rgb(5,_112,_184,_0.7)] text-3xl md:text-5xl font-bold tracking-widest transform transition-all duration-500 hover:scale-105">
            Experiencies
          </h1>

          <div className="w-32 h-1 bg-gradient-to-r mx-auto opacity-60"></div>
        </div>
      </div>

      <div className="container w-auto mx-auto sm:max-w-7xl p-4 ">
        <div className="grid grid-cols-1 grid-rows-auto gap-6">
          {experiences.map((experiencie, index) => (
            <div
              className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 backdrop-blur-sm relative border rounded-md p-4 flex flex-col w-full lg:w-9/12 mx-auto"
              key={index}
            >
              <div className="flex flex-col sm:flex-row justify-between ">
                <div className="text-xl font-bold text-white ">
                  {experiencie.title}
                  <div className="text-gray-200 font-extralight text-sm ">
                    {experiencie.position}
                  </div>
                </div>
                <div className="text-sm text-white justify-end mb-5">
                  {experiencie.date}
                </div>
              </div>

              <div className="mt-3 mb-1 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>

              <div className="flex-grow overflow-hidden ">
                <div className="rounded-md p-1">
                  {experiencie.description && (
                    <ul className="list-blue-marker p-2 list-disc list-inside text-white space-y-1">
                      {experiencie.description
                        .split(". ")
                        .map(
                          (valor, i) =>
                            valor.trim() && <li key={i}>{valor.trim()}</li>
                        )}
                    </ul>
                  )}
                </div>
              </div>
              <div className="mt-4 flex justify-end ">
                <Button className="group bg-transparent border border-blue-500/50 text-blue-300 hover:bg-blue-500/10 hover:border-blue-400 hover:text-blue-200 transition-all duration-200 ">
                  <span>View Gallery</span>
                  <GoArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
