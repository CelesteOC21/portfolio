import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div>
      <nav className="bg-white shadow-sm dark:bg-gray-900">
        <div className="w-full px-2 sm:px-6 lg:px-8">
          <div className="relative flex flex-wrap justify-center h-16 items-center">
            <div>
              <Link
                href="/"
                className="rounded-md px-5 py-2 text-md font-medium text-gray-300 hover:bg-white/5 hover:text-white"
              >
                Home
              </Link>
              <Link
                href="#"
                className="rounded-md px-5 py-2 text-md font-medium text-gray-300 hover:bg-white/5 hover:text-white"
              >
                Experience
              </Link>
              <Link
                href="#"
                className="rounded-md px-5 py-2 text-md font-medium text-gray-300 hover:bg-white/5 hover:text-white"
              >
                Technologies
              </Link>
              <Link
                href="#"
                className="rounded-md px-5 py-2 text-md font-medium text-gray-300 hover:bg-white/5 hover:text-white"
              >
                Studies
              </Link>
              <Link
                href="#"
                className="rounded-md px-5 py-2 text-md font-medium text-gray-300 hover:bg-white/5 hover:text-white"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
