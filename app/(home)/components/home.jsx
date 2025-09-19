"use client";
import SplitText from "./SplitText";
import Orb from "../../orb";

export default function Presentation() {
  return (
    <div className="max-w-4xl mx-auto md:mt-20 p-5">
      <div className="w-full flex justify-center py-16 mt-15" id="/">
        <SplitText
          text="Hi, I'm Celeste"
          className="text-3xl md:text-6xl font-semibold text-center"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />
      </div>
      <div className="md:mt-15">
        <div className="text-center">
          <h1 className="text-[rgb(5,_112,_184,_0.7)] text-3xl md:text-5xl font-bold tracking-widest transform transition-all duration-500 hover:scale-105">
            About me
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r mx-auto opacity-60"></div>
        </div>
      </div>

      <div className="border  border-slate-700 rounded-md flex flex-col  lg:flex-row lg:items-center gap-8 mt-6">
        {/* Contenedor para la imagen y la animación */}
        <div className=" relative flex md:h-96 md:w-96 items-center justify-center">
          {/* Capa de la animación (detrás) */}
          <div className="absolute inset-0">
            <Orb
              hoverIntensity={0.5}
              rotateOnHover={true}
              hue={0}
              forceHoverState={false}
            />
          </div>

          <div className=" flex items-center justify-center">
            <img
              src="../celes.png"
              alt="Profile"
              className="w-60 h-60 rounded-full object-cover"
            />
          </div>
        </div>

        {/* Contenido del texto */}
        <div className="text-balance text-center lg:text-left max-w-lg">
          <p className="font-extralight sm:text-xl text-based">
            I am a<span className="font-bold"> Computer systems engineer </span>
            with experience in full-stack web application development. I have
            participated in academic and professional projects using modern
            technologies such as
            <span className="font-semibold">
              React, Next.js, Laravel, PHP, JavaScript, Tailwind CSS, Bootstrap,
              ShadCN, MySQL, and PostgreSQL.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
