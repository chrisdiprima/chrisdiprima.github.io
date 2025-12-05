import { Briefcase } from "lucide-react";

const Experience = () => (
  <section id="experience" className="py-16 px-4">
    <div className="max-w-6xl mx-auto rounded-3xl shadow-2xl bg-gradient-to-br from-white/80 to-purple-50/70 backdrop-blur-md border-2 border-purple-300/50 p-8 sm:p-10 md:p-16 lg:p-16 relative">
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-32 h-3 bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 rounded-full opacity-80 shadow-lg"></div>
      <h2 className="text-3xl font-bold mb-6 text-left text-purple-900 drop-shadow flex items-center gap-3">
        <Briefcase className="w-8 h-8" />
        Experience
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Experience */}
        <div className="rounded-xl p-6 bg-gradient-to-br from-[#e0e7ef]/80 to-[#b0abb9]/60 shadow border border-[#b0abb9]/20 flex flex-col">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-4 text-purple-900 tracking-tight flex items-center gap-2">
            <span className="inline-block bg-purple-200 text-purple-800 rounded px-2 py-1 text-sm sm:text-base md:text-lg font-bold">
              Experience
            </span>
          </h3>
          <div className="mb-2 flex flex-col md:flex-row md:items-center md:gap-4">
            <span className="font-semibold text-lg text-gray-900">
              Software Developer Co-op
            </span>
            <span className="text-gray-500 text-base md:text-sm mt-1 md:mt-0">
              September 2025 – December 2025
            </span>
          </div>
          <div className="mb-2 flex flex-col md:flex-row md:items-center md:gap-4">
            <span className="text-gray-700 font-medium">
              Royal Bank of Canada
            </span>
            <span className="text-gray-500 text-base md:text-sm mt-1 md:mt-0">
              Toronto, ON
            </span>
          </div>
          <ul className="mt-6 text-gray-800 text-base list-disc list-inside space-y-3 pl-4">
            <li>
              <span className="font-medium text-purple-800">Developed</span> and
              maintained <span className="font-semibold">Vue</span> and{" "}
              <span className="font-semibold">TypeScript</span> web
              applications, enhancing end-user tooling and improving usability.
            </li>
            <li>
              <span className="font-medium text-purple-800">Built</span> and
              optimized RESTful APIs using{" "}
              <span className="font-semibold">Node.js</span> and{" "}
              <span className="font-semibold">Express</span> supporting data
              exchange across services.
            </li>
            <li>
              <span className="font-medium text-purple-800">Leveraged</span>{" "}
              <span className="font-semibold">Git</span> and{" "}
              <span className="font-semibold">GitHub</span> for version control,
              streamlining collaboration and ensuring clean and well-reviewed
              code across development.
            </li>
            <li>
              <span className="font-medium text-purple-800">Collaborated</span>{" "}
              in an <span className="font-semibold">Agile</span> team
              environment, participating in daily stand ups, sprint planning,
              and code reviews to deliver features on schedule and maintain code
              quality.
            </li>
          </ul>
        </div>
        {/* Resume */}
        <div className="rounded-xl p-6 bg-gradient-to-br from-[#e0e7ef]/80 to-[#b0abb9]/60 shadow border border-[#b0abb9]/20 flex flex-col items-center justify-center">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full mb-4 gap-3">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-purple-900 tracking-tight flex items-center gap-2 m-0">
              <span className="inline-block bg-purple-200 text-purple-800 rounded px-2 py-1 text-sm sm:text-base md:text-lg font-bold">
                Resume
              </span>
            </h3>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Christopher_Di_Prima_Resume.pdf"
              className="inline-flex items-center gap-1 sm:gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-lg shadow hover:from-purple-700 hover:to-indigo-700 transition-colors text-sm sm:text-base whitespace-nowrap"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
                />
              </svg>
              Download Resume
            </a>
          </div>
          <div className="w-full flex flex-col items-center gap-4">
            <div className="w-full flex justify-center overflow-hidden">
              <iframe
                src="/resume.pdf"
                title="Resume Preview"
                className="border-2 border-purple-200 rounded-lg shadow bg-white transition-all duration-300 w-full max-w-[280px] sm:max-w-[320px] md:max-w-[350px] h-[400px] sm:h-[450px] md:h-[500px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
