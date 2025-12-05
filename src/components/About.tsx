import {
  Brain,
  Dumbbell,
  ChefHat,
  Gamepad2,
  User,
} from "lucide-react";

const About = () => (
  <section id="about" className="py-16 px-4">
    <div className="max-w-6xl mx-auto rounded-3xl shadow-2xl bg-gradient-to-br from-white/80 to-blue-50/70 backdrop-blur-md border-2 border-blue-300/50 p-8 sm:p-10 md:p-16 lg:p-16 relative">
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-32 h-3 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full opacity-80 shadow-lg"></div>
      <h2 className="text-3xl font-bold mb-6 text-left text-blue-900 drop-shadow-lg flex items-center gap-3">
        <User className="w-8 h-8" />
        About Me
      </h2>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 w-full pb-15">
        {/* Text Content */}
        <div className="flex flex-col justify-center space-y-4 text-sm sm:text-base md:text-lg text-gray-700">
          <p className="leading-relaxed">
            Hi! I'm{" "}
            <span className="font-semibold text-blue-800">
              Christopher Di Prima
            </span>
            , a passionate Computer Science student at{" "}
            <span className="font-semibold text-indigo-700">
              York University
            </span>
            .
          </p>
          <p className="leading-relaxed">
            Learning new skills and technologies in the fields of computer
            science and software engineering is the main goal of my academic
            path. Artificial intelligence and financial technology are two new
            and developing fields that I am passionate about. I find it
            fascinating how AI is changing sectors and how fintech is changing
            how we use technology and money in unison.
          </p>
          <p className="leading-relaxed">
            I have a solid background in programming, algorithms, and data
            structures thanks to York University. Whether it's a new programming
            language or the latest developments in tech, I always want to learn
            new skills and work alongside others on creative projects.
          </p>
        </div>

        {/* Interests Grid */}
        <div className="flex flex-col justify-center">
          <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-6 text-center">
            My Interests & Hobbies
          </h3>
          <div className="grid grid-cols-2 gap-4 sm:gap-5 w-full max-w-lg mx-auto">
            <div className="aspect-square flex flex-col items-center justify-center bg-gradient-to-br from-blue-100/90 to-purple-100/70 rounded-2xl p-4 sm:p-5 shadow-lg border-2 border-blue-200/50 hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <Dumbbell className="w-10 h-10 sm:w-12 sm:h-12 text-blue-700 mb-2 flex-shrink-0" />
              <span className="font-semibold text-blue-800 text-sm sm:text-base text-center">
                Going to the Gym
              </span>
              <span className="text-gray-600 text-xs sm:text-sm mt-1 text-center">
                Staying active
              </span>
            </div>
            <div className="aspect-square flex flex-col items-center justify-center bg-gradient-to-br from-yellow-100/90 to-orange-100/70 rounded-2xl p-4 sm:p-5 shadow-lg border-2 border-yellow-200/50 hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <ChefHat className="w-10 h-10 sm:w-12 sm:h-12 text-yellow-600 mb-2 flex-shrink-0" />
              <span className="font-semibold text-yellow-700 text-sm sm:text-base text-center">
                Cooking
              </span>
              <span className="text-gray-600 text-xs sm:text-sm mt-1 text-center">
                New recipes
              </span>
            </div>
            <div className="aspect-square flex flex-col items-center justify-center bg-gradient-to-br from-indigo-100/90 to-blue-100/70 rounded-2xl p-4 sm:p-5 shadow-lg border-2 border-indigo-200/50 hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <Gamepad2 className="w-10 h-10 sm:w-12 sm:h-12 text-indigo-700 mb-2 flex-shrink-0" />
              <span className="font-semibold text-indigo-800 text-sm sm:text-base text-center">
                Video Games
              </span>
              <span className="text-gray-600 text-xs sm:text-sm mt-1 text-center">
                Relaxing & gaming
              </span>
            </div>
            <div className="aspect-square flex flex-col items-center justify-center bg-gradient-to-br from-green-100/90 to-teal-100/70 rounded-2xl p-4 sm:p-5 shadow-lg border-2 border-green-200/50 hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <Brain className="w-10 h-10 sm:w-12 sm:h-12 text-green-700 mb-2 flex-shrink-0" />
              <span className="font-semibold text-green-800 text-sm sm:text-base text-center">
                Learning
              </span>
              <span className="text-gray-600 text-xs sm:text-sm mt-1 text-center">
                New technologies
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Video Section */}
      <div className="mb-10 w-full flex justify-center">
        <div className="w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl border-2 border-blue-300/60 bg-gradient-to-br from-blue-100/40 to-indigo-100/40 p-3">
          <video
            controls
            className="w-full h-auto rounded-xl bg-black shadow-inner"
            preload="metadata"
            style={{ minHeight: "300px", maxHeight: "500px" }}
          >
            <source src="/about-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  </section>
);

export default About;
