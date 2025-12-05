import { GraduationCap } from "lucide-react";

const Education = () => (
  <section id="education" className="py-16 px-4">
    <div className="max-w-6xl mx-auto rounded-3xl shadow-2xl bg-gradient-to-br from-white/80 to-indigo-50/70 backdrop-blur-md border-2 border-indigo-300/50 p-8 sm:p-10 md:p-16 lg:p-16 relative">
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-32 h-3 bg-gradient-to-r from-indigo-500 via-blue-500 to-purple-500 rounded-full opacity-80 shadow-lg"></div>
      <h2 className="text-3xl font-bold mb-6 text-left text-indigo-900 drop-shadow flex items-center gap-3">
        <GraduationCap className="w-8 h-8" />
        Education
      </h2>
      <div className="rounded-xl p-8 bg-gradient-to-br from-[#e0e7ef]/80 to-[#b0abb9]/60 shadow border border-[#b0abb9]/20 flex-1">
        <h3 className="text-2xl font-bold mb-2 text-indigo-900 tracking-tight flex items-center gap-2">
          <span className="inline-block bg-indigo-100 text-indigo-800 rounded px-3 py-1 text-lg font-semibold">
            York University
          </span>
        </h3>
        <div className="mb-2 flex flex-col md:flex-row md:items-center md:gap-4 justify-between">
          <span className="font-semibold text-lg text-gray-900">
            Bachelor of Science, Computer Science
          </span>
          <span className="text-gray-500 text-base md:text-sm mt-1 md:mt-0">
            Expected Graduation: May 2027
          </span>
        </div>
        <div className="mb-2 flex flex-col md:flex-row md:items-center md:gap-4">
          <span className="text-gray-700 font-medium">Toronto, Canada</span>
        </div>
        <div className="mt-6 text-gray-800 text-base space-y-3 pl-1">
          <p className="mb-2">
            I'm taking courses in software engineering and algorithms & data
            structureswhile I work toward a Bachelor of Science in Computer
            Science at York University. My enthusiasm for these subjects has
            been stoked by my study in{" "}
            <span className="font-semibold text-indigo-800">
              Object Oriented Programming
            </span>
            ,{" "}
            <span className="font-semibold text-indigo-800">
              Operating Systems and Low-Level Programming
            </span>
            , and{" "}
            <span className="font-semibold text-indigo-800">
              Algorithms and Data Structures
            </span>
            . My objective is to graduate with a thorough grasp of how
            technology, particularly in the fields of finance and artificial
            intelligence, can be used to create and enhance our world.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Education;
