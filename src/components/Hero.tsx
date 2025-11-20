import React from "react";

const Hero: React.FC = () => (
  <section
    id="hero"
    className="relative py-32 md:py-44 px-4 flex items-center justify-center min-h-[70vh] text-gray-900"
    style={{
      background: "linear-gradient(120deg, #e0e7ef 60%, #b0abb9 100%)",
      boxShadow: "0 8px 32px 0 rgba(176, 171, 185, 0.10) inset",
      borderBottomLeftRadius: "2.5rem",
      borderBottomRightRadius: "2.5rem",
      position: "relative",
      overflow: "hidden",
    }}
  >
    {/* Subtle SVG accent in the corner */}
    <svg
      width="180"
      height="180"
      viewBox="0 0 304 304"
      fill="none"
      className="absolute top-0 right-0 opacity-20 z-0"
      style={{ pointerEvents: "none" }}
    >
      <path
        d="M44.1 224a5 5 0 1 1 0 2H0v-2h44.1zm160 48a5 5 0 1 1 0 2H82v-2h122.1zm57.8-46a5 5 0 1 1 0-2H304v2h-42.1z"
        fill="#b0abb9"
        fillOpacity="0.4"
      />
    </svg>
    <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
      <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold mb-6 tracking-tight drop-shadow-lg">
        Christopher Di Prima
      </h1>
      <p className="text-2xl md:text-3xl font-medium mb-8 text-blue-800 max-w-2xl mx-auto drop-shadow">
        Software Developer &bull; York University Student &bull; RBC Co-op
      </p>
      <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-2xl mx-auto font-light">
        Welcome to my professional ePortfolio. Here you'll find my journey as a
        developer, my academic background, and the projects that showcase my
        skills and passion for technology. I strive to build impactful solutions
        and grow as a software engineer every day.
      </p>
      <a
        href="#projects"
        className="inline-block bg-blue-700 text-white font-semibold text-lg px-8 py-3 rounded-full shadow-lg hover:bg-blue-800 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
      >
        View My Work
      </a>
    </div>
  </section>
);

export default Hero;
