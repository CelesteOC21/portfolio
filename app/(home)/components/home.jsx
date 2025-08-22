export default function Presentation() {
  return (
    <div class="relative w-2xl h-2xl mx-auto">
      <h2 className="text-[40px] mb-2 ">About Me</h2>

      <div className="flex flex-row dark:border-gray-600 outline-1 outline-gray-600 rounded-lg">
        <div className="basis-1/2 flex p-10 text-center text-lg">
          <p className="font-extralight">
            I am a<span className="font-bold"> Computer systems engineer </span>
            developer with experience building web applications. My work is
            based on technologies such as React, Next.js, JavaScript, Laravel,
            PHP, Tailwind CSS and Bootstrap. I have managed databases with MySQL
            and PostgreSQL.
          </p>
        </div>
      </div>
      <div class="absolute right-[-10rem] top-50 -translate-y-1/3">
        <img
          src="../celes.png"
          class="rounded-full shadow-[0_20px_80px_rgba(5,_112,_184,_0.7)] shadow-blue-800/20 w-82"
        />
      </div>
    </div>
  );
}
