"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm dark:bg-gray-900">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 text-xl font-bold text-gray-800 dark:text-white">
            MyPortfolio
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 dark:text-gray-300 hover:text-gray-600 dark:hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          <div className="hidden lg:flex space-x-4">
            <Link
              href="/"
              className="rounded-md px-5 py-2 text-md font-medium text-gray-600 dark:text-gray-300 hover:bg-white/5 hover:text-white"
            >
              Home
            </Link>
            <Link
              href="#experience"
              className="rounded-md px-5 py-2 text-md font-medium text-gray-600 dark:text-gray-300 hover:bg-white/5 hover:text-white"
            >
              Experience
            </Link>
            <Link
              href="#technologies"
              className="rounded-md px-5 py-2 text-md font-medium text-gray-600 dark:text-gray-300 hover:bg-white/5 hover:text-white"
            >
              Technologies
            </Link>
            <Link
              href="#studies"
              className="rounded-md px-5 py-2 text-md font-medium text-gray-600 dark:text-gray-300 hover:bg-white/5 hover:text-white"
            >
              Studies
            </Link>
            <Link
              href="#contact"
              className="rounded-md px-5 py-2 text-md font-medium text-gray-600 dark:text-gray-300 hover:bg-white/5 hover:text-white"
            >
              Contact
            </Link>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden mt-2 space-y-2 pb-4">
            <Link
              href="/"
              className="block rounded-md px-4 py-2 text-md font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              Home
            </Link>
            <Link
              href="#experience"
              className="block rounded-md px-4 py-2 text-md font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              Experience
            </Link>
            <Link
              href="#technologies"
              className="block rounded-md px-4 py-2 text-md font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              Technologies
            </Link>
            <Link
              href="#studies"
              className="block rounded-md px-4 py-2 text-md font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              Studies
            </Link>
            <Link
              href="#contact"
              className="block rounded-md px-4 py-2 text-md font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
