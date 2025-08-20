export default function Footer() {
  return (
    <div>
      <footer className="bg-white shadow-sm dark:bg-gray-900">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-around">
            <a
              href="https://www.linkedin.com/in/celeste-oc"
              className=" hover:bg-white/5 hover:text-white py-2 px-3 rounded-md  flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <img
                src="https://images.seeklogo.com/logo-png/39/2/linkedin-new-2020-logo-png_seeklogo-393964.png"
                className="h-8"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                LinkedIn
              </span>
            </a>

            <a
              href="https://github.com/CelesteOC21?tab=repositories"
              className="hover:bg-white/5 hover:text-white py-2 px-3 rounded-md flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <img
                src="https://icones.pro/wp-content/uploads/2021/06/icone-github-noir.png"
                className="h-8"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                GitHub
              </span>
            </a>

            <a className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/014/440/980/small_2x/email-message-icon-design-in-blue-circle-png.png"
                className="h-8"
                alt="Flowbite Logo"
              />
              <p className="font-semibold self-center font-mendium whitespace-nowrap text-white">
                celesteontiveroscolunga21@gmail.com
              </p>
            </a>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        </div>
      </footer>
    </div>
  );
}
