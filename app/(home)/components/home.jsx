export default function Presentation() {
  return (
    <div class="relative w-2xl h-2xl mx-auto">
      <div class="flex flex-row dark:border-gray-600 outline-1 outline-gray-600 rounded-lg">
        <div class="basis-1/2 flex p-10 ">
          <p>
            I am a<span class="font-bold"> Computer systems engineer</span>
            developer with experience building web applications. My work is
            based on technologies such as React, Next.js, JavaScript, Laravel,
            PHP, Tailwind CSS and Bootstrap. I have managed databases with MySQL
            and PostgreSQL.
          </p>
        </div>
      </div>
      <div class="absolute right-[-8.5rem] top-1/2 -translate-y-1/2">
        <img
          src="../celes.png"
          class="rounded-full shadow-[0_20px_80px_rgba(5,_112,_184,_0.7)] shadow-blue-800/20 w-72"
        />
      </div>
    </div>
  );
}
