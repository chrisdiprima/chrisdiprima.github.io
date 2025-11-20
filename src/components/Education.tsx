import React from "react";

const Education: React.FC = () => (
  <section id="education" className="py-16 px-4">
    <div className="max-w-6xl mx-auto rounded-3xl shadow-xl bg-white/70 backdrop-blur-md border border-[#b0abb9]/30 p-4 sm:p-8 md:p-16 lg:p-16 relative">
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-24 h-2 bg-gradient-to-r from-indigo-400 via-blue-400 to-purple-400 rounded-full opacity-60"></div>
      <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-center text-indigo-900 drop-shadow tracking-tight">
        <span className="inline-block bg-indigo-200 text-indigo-800 rounded px-4 py-2 text-2xl md:text-3xl font-bold">
          Education
        </span>
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
            I am currently pursuing a Bachelor of Science in Computer Science at
            York University taking classes in programming, algorithms, data
            structures, and software engineering. I've completed coursework in{" "}
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
            , which has fueled my passion for these fields.
          </p>
          <p className="mb-2">
            I have participated in group projects, hackathons, and research
            opportunities that have helped me develop both technical and
            teamwork skills. I am always looking for ways to apply what I learn
            in the classroom to real-world problems.
          </p>
          <p>
            My goal is to graduate with a deep understanding of how technology
            can be used to innovate and improve our world, especially in the
            areas of <span className="font-semibold text-indigo-800">AI</span>{" "}
            and <span className="font-semibold text-indigo-800">fintech</span>.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Education;
