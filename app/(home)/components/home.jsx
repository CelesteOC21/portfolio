export default function Presentation() {
  return (
    <div className="relative max-w-4xl mx-auto px-4">
      <h2 className="text-[32px] sm:text-[36px] lg:text-[40px] font-bold mb-6 text-center lg:text-left">
        About Me
      </h2>

      {/* Contenedor principal */}
      <div className="relative flex flex-col lg:flex-row dark:border-gray-600 outline-1 outline-gray-600 rounded-lg p-6 lg:p-10">
        {/* Texto */}
        <div className="flex-1 text-center lg:text-left text-base sm:text-lg lg:text-xl pr-0 lg:pr-56">
          <p className="font-extralight">
            I am a<span className="font-bold"> Computer systems engineer </span>
            developer with experience building web applications. My work is
            based on technologies such as
            <span className="font-semibold">
              {" "}
              React, Next.js, JavaScript, Laravel, PHP, Tailwind CSS
            </span>
            and <span className="font-semibold">Bootstrap</span>. I have managed
            databases with
            <span className="font-semibold"> MySQL</span> and
            <span className="font-semibold"> PostgreSQL</span>.
          </p>
        </div>

        {/* Imagen flotante */}
        <div className="absolute hidden lg:block right-[-8rem] top-1/2 -translate-y-1/2">
          <img
            src="../celes.png"
            alt="Profile"
            className="rounded-full shadow-[0_20px_80px_rgba(5,_112,_184,_0.7)] shadow-blue-800/20 w-72 lg:w-80"
          />
        </div>

        {/* Imagen normal para móviles */}
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
