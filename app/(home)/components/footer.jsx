import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="w-full bg-slate-800/50 border-t border-slate-700 mt-10"
      id="contact"
    >
      <div className="max-w-screen-xl mx-auto px-4 py-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-around gap-6">
          <a
            href="https://www.linkedin.com/in/celeste-oc"
            className="hover:bg-white/5 py-2 px-3 rounded-md flex items-center gap-3"
          >
            <img
              src="https://images.seeklogo.com/logo-png/39/2/linkedin-new-2020-logo-png_seeklogo-393964.png"
              className="h-8"
              alt="LinkedIn"
            />
            <span className="text-md font-medium text-gray-300">LinkedIn</span>
          </a>

          <a
            href="https://github.com/CelesteOC21?tab=repositories"
            className="hover:bg-white/5 py-2 px-3 rounded-md flex items-center gap-3"
          >
            <img
              src="https://icones.pro/wp-content/uploads/2021/06/icone-github-noir.png"
              className="h-8"
              alt="GitHub"
            />
            <span className="text-md font-medium text-gray-300">GitHub</span>
          </a>

          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-500/20 rounded-lg border border-blue-500/30">
              <Mail className="h-5 w-5 text-blue-400" />
            </div>
            <div>
              <p className="text-sm text-blue-400">Email</p>
              <p className="text-gray-300 text-sm font-medium">
                celesteontiveroscolunga21@gmail.com
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 mb-4 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      </div>
    </footer>
  );
}
