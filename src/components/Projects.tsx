import { Github, Folder } from "lucide-react";

const Projects = () => (
  <section id="projects" className="py-16 px-4">
    <div className="max-w-6xl mx-auto rounded-3xl shadow-2xl bg-gradient-to-br from-white/80 to-pink-50/70 backdrop-blur-md border-2 border-pink-300/50 p-8 sm:p-10 md:p-16 lg:p-16 relative">
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-32 h-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-80 shadow-lg"></div>
      <h2 className="text-3xl font-bold mb-6 text-left text-blue-900 drop-shadow flex items-center gap-3">
        <Folder className="w-8 h-8" />
        Projects
      </h2>
      <div className="mb-8 text-lg text-gray-700">
        <p>
          Below are a few exmpamples of personal projects that I have worked on
          to develop my skill and apply my knowledge as a software developer.
          Each project highlights different technologies and problem-solving
          approaches that I have utilized to create tools and software that I
          would personal use in my life.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {/* Project 1 */}
        <div className="rounded-xl bg-gradient-to-br from-[#e0e7ef]/90 to-[#b0abb9]/70 shadow-lg border-2 border-purple-200/50 flex flex-col hover:scale-105 hover:shadow-2xl transition-all duration-300 overflow-hidden">
          <div className="w-full h-48 bg-gray-200 overflow-hidden">
            <img src="/project1.png" className="w-full h-full object-cover" />
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-bold mb-3 text-purple-900">
              Valorant Index and Collection Mobile App
            </h3>
            <p className="text-gray-700 text-base mb-4 flex-grow">
              This is a mobile application built with React Native and Expo,
              designed to provide Valorant players with easy access to
              information about agents, maps, and weapon skins.
            </p>
            <div className="flex gap-3 mt-auto">
              <a
                href="https://github.com/chrisdiprima/Valorant-Skins-App"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gray-800 text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-gray-900 transition-colors text-sm"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="rounded-xl bg-gradient-to-br from-[#e0e7ef]/90 to-[#b0abb9]/70 shadow-lg border-2 border-purple-200/50 flex flex-col hover:scale-105 hover:shadow-2xl transition-all duration-300 overflow-hidden">
          <div className="w-full h-48 bg-gray-200 overflow-hidden">
            <img src="/project2.png" className="w-full h-full object-cover" />
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-bold mb-3 text-indigo-900">
              Bookmark Vault - Chrome extension
            </h3>
            <p className="text-gray-700 text-base mb-4 flex-grow">
              A beautifully simple and customizable Chrome extension for saving,
              organizing, and accessing your favorite sites. Perfect for anyone
              who wants a better way to manage their web life.
            </p>
            <div className="flex gap-3 mt-auto">
              <a
                href="https://github.com/chrisdiprima/Bookmark-Vault"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gray-800 text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-gray-900 transition-colors text-sm"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="rounded-xl bg-gradient-to-br from-[#e0e7ef]/90 to-[#b0abb9]/70 shadow-lg border-2 border-purple-200/50 flex flex-col hover:scale-105 hover:shadow-2xl transition-all duration-300 overflow-hidden">
          <div className="w-full h-48 bg-gray-200 overflow-hidden">
            <img src="/project3.png" className="w-full h-full object-cover" />
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-bold mb-3 text-blue-900">
              CS Tools - Chrome extension
            </h3>
            <p className="text-gray-700 text-base mb-4 flex-grow">
              CS Chrome extension for developers and tech enthusiasts, it
              provides quick access to a number system converter, a bitwise
              calculator, and a Char to ASCII converter—all in one convenient
              tool.
            </p>
            <div className="flex gap-3 mt-auto">
              <a
                href="https://github.com/chrisdiprima/CS-Tools"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gray-800 text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-gray-900 transition-colors text-sm"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Projects;
