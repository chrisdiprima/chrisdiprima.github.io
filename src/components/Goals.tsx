import { Target, TrendingUp, Users } from "lucide-react";

const Goals = () => (
  <section id="goals" className="py-16 px-4">
    <div className="max-w-6xl mx-auto rounded-3xl shadow-2xl bg-gradient-to-br from-white/80 to-green-50/70 backdrop-blur-md border-2 border-green-300/50 p-8 sm:p-10 md:p-16 lg:p-16 relative">
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-32 h-3 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 rounded-full opacity-80 shadow-lg"></div>
      <h2 className="text-3xl font-bold mb-6 text-left text-green-900 drop-shadow-lg">
        My Goals
      </h2>
      <div className="mb-8 text-lg text-gray-700">
        <p>
          As I progress through my journey as a up and coming software engineer,
          I am focused on continuous growth—both professionally and personally.
          I have set the following goals to challenge me to expand my skills,
          deepen my knowledge, and allow myself to make meaningful contributions
          to the tech industry.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {/* Goal 1 */}
        <div className="rounded-xl p-6 bg-gradient-to-br from-[#e0f2e9]/90 to-[#b8e6cc]/70 shadow-lg border-2 border-green-300/50 flex flex-col items-center text-center hover:scale-105 hover:shadow-2xl transition-all duration-300">
          <div className="bg-green-100 rounded-full p-4 mb-4">
            <Target className="w-8 h-8 text-green-700" />
          </div>
          <h3 className="text-xl font-bold mb-3 text-green-900">
            Master Full-Stack Development
          </h3>
          <p className="text-gray-700 text-base">
            Become proficient in modern full-stack technologies, including
            React, Node.js, and cloud platforms, to build scalable and impactful
            applications.
          </p>
        </div>

        {/* Goal 2 */}
        <div className="rounded-xl p-6 bg-gradient-to-br from-[#e0f2e9]/90 to-[#b8e6cc]/70 shadow-lg border-2 border-green-300/50 flex flex-col items-center text-center hover:scale-105 hover:shadow-2xl transition-all duration-300">
          <div className="bg-emerald-100 rounded-full p-4 mb-4">
            <TrendingUp className="w-8 h-8 text-emerald-700" />
          </div>
          <h3 className="text-xl font-bold mb-3 text-emerald-900">
            Deepen AI & ML Expertise
          </h3>
          <p className="text-gray-700 text-base">
            Continue learning advanced AI and machine learning concepts through
            projects and hands-on experimentation, to gain a deeper insight into
            this new and evolving industry.
          </p>
        </div>

        {/* Goal 3 */}
        <div className="rounded-xl p-6 bg-gradient-to-br from-[#e0f2e9]/90 to-[#b8e6cc]/70 shadow-lg border-2 border-green-300/50 flex flex-col items-center text-center hover:scale-105 hover:shadow-2xl transition-all duration-300">
          <div className="bg-teal-100 rounded-full p-4 mb-4">
            <Users className="w-8 h-8 text-teal-700" />
          </div>
          <h3 className="text-xl font-bold mb-3 text-teal-900">
            Contribute to Open Source
          </h3>
          <p className="text-gray-700 text-base">
            Learn about new technologies and best practices by contributing to
            open source projects, this will sharped my skills as a developer
            while also enabling me to learng about these new technologies and
            frameworks being used to develop the projects
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Goals;
