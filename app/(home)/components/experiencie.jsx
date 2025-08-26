import React from "react";

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
      <div className="my-5">
        <p className="text-lg font-bold">Title</p>
        <hr />
      </div>

      <div className="container w-auto mx-auto sm:max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:grid-cols-2">
          {experiences.map((experiencie, index) => (
            <div
              className="border border-amber-400 rounded-md p-4 bg-amber-800"
              key={index}
            >
              <div className="flex flex-col sm:flex-row justify-between mb-2">
                <div className="text-xl font-bold text-white">
                  {experiencie.title}
                  <div className="text-gray-200 font-extralight text-sm">
                    {experiencie.position}
                  </div>
                </div>

                <div className="text-sm  text-white justify-end bg-blue-600 mb-5">
                  {experiencie.date}
                </div>
              </div>

              <div className="bg-blue-800 rounded-md p-3">
                {experiencie.description ? (
                  <ul className="list-disc list-inside text-white space-y-1">
                    {experiencie.description
                      .split(". ")
                      .map(
                        (valor, i) =>
                          valor.trim() && <li key={i}>{valor.trim()}</li>
                      )}
                  </ul>
                ) : (
                  <p className="text-gray-300">"HoA"</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
