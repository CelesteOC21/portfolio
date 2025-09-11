export default function Presentation() {
  return (
    <div
      className="relative max-w-4xl mx-auto px-4"
      data-aos="fade-up"
      data-aos-duration="500"
    >
      <div className="flex  justify-start">
        <div className="text-center space-y-8">
          <h1 className="text-[rgb(5,_112,_184,_0.7)] text-3xl md:text-5xl font-bold tracking-widest transform transition-all duration-500 hover:scale-105">
            About me
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r mx-auto opacity-60"></div>
        </div>
      </div>

      <div className="relative flex flex-col lg:flex-row dark:border-gray-600 outline-1 outline-gray-600 rounded-lg p-6 lg:p-10">
        <div className="flex-1 text-center lg:text-left text-base sm:text-lg lg:text-xl pr-0 lg:pr-56">
          <p className="font-extralight">
            I am a<span className="font-bold"> Computer systems engineer </span>
            with experience in full-stack web application development. I have
            participated in academic and professional projects using modern
            technologies such as
            <span className="font-semibold">
              {" "}
              React, Next.js, Laravel, PHP, JavaScript, Tailwind CSS, Bootstrap,
              ShadCN, MySQL, and PostgreSQL.
            </span>
          </p>
        </div>

        <div className="absolute hidden lg:block right-[-8rem] top-1/2 -translate-y-1/2">
          <img
            src="../celes.png"
            alt="Profile"
            className="rounded-full shadow-[0_20px_80px_rgba(5,_112,_184,_0.7)] shadow-blue-800/20 w-72 lg:w-80"
          />
        </div>

        <div className="flex justify-center mt-6 lg:hidden">
          <img
            src="../celes.png"
            alt="Profile"
            className="rounded-full shadow-[0_20px_80px_rgba(5,_112,_184,_0.7)] shadow-blue-800/20 w-48 sm:w-60"
          />
        </div>
      </div>
    </div>
  );
}
