import { Brain, Banknote, Dumbbell, ChefHat, Gamepad2 } from "lucide-react";

const About: React.FC = () => (
  <section id="about" className="py-16 px-4">
    <div className="max-w-6xl mx-auto rounded-3xl shadow-xl bg-white/70 backdrop-blur-md border border-[#b0abb9]/30 p-4 sm:p-8 md:p-16 lg:p-16 relative">
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-24 h-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 rounded-full opacity-60"></div>
      <h2 className="text-3xl font-bold mb-6 text-left text-blue-900 drop-shadow">
        About Me
      </h2>
      <div className="flex flex-col lg:flex-row gap-12 w-full">
        <div className="flex-1 text-lg text-gray-700 text-left mb-8 w-full max-w-none">
          <p className="mb-4">
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
          <p className="mb-4">
            My academic journey is focused on{" "}
            <span className="inline-flex items-center gap-1">
              <Brain className="inline w-5 h-5 text-purple-600" /> Artificial
              Intelligence
            </span>{" "}
            and{" "}
            <span className="inline-flex items-center gap-1">
              <Banknote className="inline w-5 h-5 text-green-600" /> Financial
              Technologies
            </span>
            . I am fascinated by how AI is transforming industries and how
            fintech is reshaping the way we interact with money and technology.
            I love exploring how technology can solve real-world problems and
            create a positive impact.
          </p>
          <p className="mb-4">
            At York, I've developed a strong foundation in programming,
            algorithms, and data analysis. I enjoy collaborating with others on
            innovative projects and am always eager to learn new skills, whether
            it's a new programming language or the latest trends in tech.
          </p>
          <p className="mb-4">
            My goal is to build intelligent systems that make life easier,
            safer, and more efficient. I am especially interested in the
            intersection of AI and finance, where I believe there is huge
            potential for innovation.
          </p>
          <p>
            Outside of academics, I enjoy challenging myself and finding balance
            through a variety of interests:
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 w-full max-w-md mx-auto mt-8 place-items-center">
          <div className="aspect-square flex flex-col items-center justify-center bg-gradient-to-br from-blue-100/60 to-purple-100/40 rounded-2xl p-6 shadow hover:scale-105 transition-transform w-full max-w-[200px] h-[200px] mx-auto">
            <Dumbbell className="w-8 h-8 text-blue-700 mb-2" />
            <span className="font-semibold text-blue-800">
              Going to the Gym
            </span>
            <span className="text-gray-600 text-sm mt-1">
              Staying active and healthy
            </span>
          </div>
          <div className="aspect-square flex flex-col items-center justify-center bg-gradient-to-br from-yellow-100/60 to-orange-100/40 rounded-2xl p-6 shadow hover:scale-105 transition-transform w-full max-w-[200px] h-[200px] mx-auto">
            <ChefHat className="w-8 h-8 text-yellow-600 mb-2" />
            <span className="font-semibold text-yellow-700">Cooking</span>
            <span className="text-gray-600 text-sm mt-1">
              Experimenting with new recipes
            </span>
          </div>
          <div className="aspect-square flex flex-col items-center justify-center bg-gradient-to-br from-indigo-100/60 to-blue-100/40 rounded-2xl p-6 shadow hover:scale-105 transition-transform w-full max-w-[200px] h-[200px] mx-auto">
            <Gamepad2 className="w-8 h-8 text-indigo-700 mb-2" />
            <span className="font-semibold text-indigo-800">
              Playing Video Games
            </span>
            <span className="text-gray-600 text-sm mt-1">
              Relaxing and connecting with friends
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
