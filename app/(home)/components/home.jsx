"use client";
import SplitText from "./splitText";
import Orb from "../../orb";
import Link from "next/link";

const techHighlights = ["React", "Next.js", "Laravel", "Tailwind CSS", "PostgreSQL", "Node.js"];

export default function Presentation() {
  return (
    <section id="home">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full flex flex-col items-center pt-28 md:pt-36 pb-16">
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

          <p
            className="mt-6 text-lg md:text-xl text-gray-400 font-light text-center"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Full Stack Developer &middot; Computer Systems Engineer
          </p>

          <div
            className="flex flex-wrap justify-center gap-2 mt-6"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            {techHighlights.map((tech) => (
              <span key={tech} className="glass-badge">
                {tech}
              </span>
            ))}
          </div>

          <div
            className="flex flex-wrap justify-center gap-4 mt-10"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <Link
              href="#experience"
              className="glass-button px-6 py-3 rounded-lg text-sm font-medium text-blue-200 hover:text-white hover:bg-blue-500/25 hover:shadow-[0_8px_32px_rgba(59,130,246,0.2)]"
            >
              View My Work
            </Link>
            <Link
              href="#contact"
              className="px-6 py-3 rounded-lg text-sm font-medium text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        <div className="text-center mb-12" data-aos="fade-up">
          <h1 className="text-[rgb(5,_112,_184,_0.7)] text-3xl md:text-5xl font-bold tracking-widest transform transition-all duration-500 hover:scale-105">
            About me
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-blue-500/60 to-transparent mx-auto mt-2"></div>
        </div>

        <div className="glass-card rounded-xl flex flex-col lg:flex-row lg:items-center gap-8 p-6 mb-16">
          <div className="relative flex md:h-96 md:w-96 items-center justify-center shrink-0">
            <div className="absolute inset-0">
              <Orb
                hoverIntensity={0.5}
                rotateOnHover={true}
                hue={0}
                forceHoverState={false}
              />
            </div>
            <div className="flex items-center justify-center">
              <img
                src="../celes.png"
                alt="Celeste profile picture"
                className="w-60 h-60 rounded-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div className="text-balance text-center lg:text-left">
            <p className="font-extralight sm:text-xl text-based text-gray-300 leading-relaxed">
              I am a<span className="font-bold text-white"> Computer systems engineer </span>
              with experience in full-stack web application development. I have
              participated in academic and professional projects using modern
              technologies such as
              <span className="font-semibold text-blue-300">
                {" "}React, Next.js, Laravel, PHP, JavaScript, Tailwind CSS, Bootstrap,
                ShadCN, MySQL, and PostgreSQL.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
