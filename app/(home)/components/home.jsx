export default function Presentation() {
  return (
    <div className="max-w-4xl mx-auto px-4">
      <div>
        <div className="text-center space-y-8">
          <h1 className="text-[rgb(5,_112,_184,_0.7)] text-3xl md:text-5xl font-bold tracking-widest transform transition-all duration-500 hover:scale-105">
            About me
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r mx-auto opacity-60"></div>
        </div>
      </div>

      <div className=" rounded-md border border-slate-700 p-8 flex flex-col lg:flex-row items-center lg:items-center justify-center gap-5 mt-6">
        <div className="mb-6 lg:mb-0">
          <img
            src="../celes.png"
            alt="Profile"
            className="lg:w-[1200px] rounded-full shadow-[0_20px_80px_rgba(5,_112,_184,_0.7)] shadow-blue-800/20 w-64 "
          />
        </div>
        <div className=" text-balance text-center lg:text-left">
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
