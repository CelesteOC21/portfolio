import React from "react";

export default function Header() {
  return (
    <div>
      <nav className="border bg-gray">
        <div className="w-full px-2 sm:px-6 lg:px-8">
          <div className="relative flex flex-wrap justify-center h-16 items-center">
            <div>
              <a
                href="#"
                className="rounded-md px-5 py-2 text-md font-medium text-gray-300 hover:bg-white/5 hover:text-white"
              >
                Inicio
              </a>
              <a
                href="#"
                className="rounded-md px-5 py-2 text-md font-medium text-gray-300 hover:bg-white/5 hover:text-white"
              >
                Experiencia
              </a>
              <a
                href="#"
                className="rounded-md px-5 py-2 text-md font-medium text-gray-300 hover:bg-white/5 hover:text-white"
              >
                Tecnologias
              </a>
              <a
                href="#"
                className="rounded-md px-5 py-2 text-md font-medium text-gray-300 hover:bg-white/5 hover:text-white"
              >
                Estudios
              </a>
              <a
                href="#"
                className="rounded-md px-5 py-2 text-md font-medium text-gray-300 hover:bg-white/5 hover:text-white"
              >
                Sobre mi
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
