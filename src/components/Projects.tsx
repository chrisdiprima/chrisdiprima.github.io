import React from "react";
import { Github } from "lucide-react";

const Projects: React.FC = () => (
  <section id="projects" className="py-16 px-4">
    <div className="max-w-6xl mx-auto rounded-3xl shadow-xl bg-white/70 backdrop-blur-md border border-[#b0abb9]/30 p-4 sm:p-8 md:p-16 lg:p-16 relative">
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-24 h-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full opacity-60"></div>
      <h2 className="text-3xl font-bold mb-6 text-left text-blue-900 drop-shadow">
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
        <div className="rounded-xl bg-gradient-to-br from-[#e0e7ef]/80 to-[#b0abb9]/60 shadow border border-[#b0abb9]/20 flex flex-col hover:scale-101 transition-transform overflow-hidden">
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
        <div className="rounded-xl bg-gradient-to-br from-[#e0e7ef]/80 to-[#b0abb9]/60 shadow border border-[#b0abb9]/20 flex flex-col hover:scale-101 transition-transform overflow-hidden">
          <div className="w-full h-48 bg-gray-200 overflow-hidden">
            <img src="/project2.png" className="w-full h-full object-cover" />
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-bold mb-3 text-indigo-900">
              Bookmark Vault - Chrome extension
            </h3>
            <p className="text-gray-700 text-base mb-4 flex-grow">
              A beautifully simple and customizable Chrome extension for saving,
              organizing, and accessing your favorite sites. Perfect for
              anyone who wants a better way to
              manage their web life.
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
        <div className="rounded-xl bg-gradient-to-br from-[#e0e7ef]/80 to-[#b0abb9]/60 shadow border border-[#b0abb9]/20 flex flex-col hover:scale-101 transition-transform overflow-hidden">
          <div className="w-full h-48 bg-gray-200 overflow-hidden">
            <img src="/project3.png" className="w-full h-full object-cover" />
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-bold mb-3 text-blue-900">
              CS Tools - Chrome extension
            </h3>
            <p className="text-gray-700 text-base mb-4 flex-grow">
              CS Chrome extension for developers and tech
              enthusiasts, it provides quick access to a number system
              converter, a bitwise calculator, and a Char to ASCII converter—all
              in one convenient tool.
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
