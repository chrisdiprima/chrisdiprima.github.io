const Hero = () => (
  <section
    id="hero"
    className="relative py-32 md:py-44 px-4 flex items-center justify-center min-h-[70vh] text-gray-900"
    style={{
      background:
        "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
      boxShadow: "0 8px 32px 0 rgba(102, 126, 234, 0.25) inset",
      borderBottomLeftRadius: "3rem",
      borderBottomRightRadius: "3rem",
      position: "relative",
      overflow: "hidden",
    }}
  >
    {/* Animated gradient overlay */}
    <div
      className="absolute inset-0 opacity-30"
      style={{
        background:
          "radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.2) 0%, transparent 50%)",
        animation: "pulse 8s ease-in-out infinite",
      }}
    />

    {/* Geometric pattern overlay */}
    <svg
      width="100%"
      height="100%"
      className="absolute inset-0 opacity-10 z-0"
      style={{ pointerEvents: "none" }}
    >
      <defs>
        <pattern
          id="hexagons"
          x="0"
          y="0"
          width="50"
          height="43.4"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M25 0L50 12.5V37.5L25 50L0 37.5V12.5z"
            fill="none"
            stroke="white"
            strokeWidth="1"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hexagons)" />
    </svg>

    {/* Floating accent circles */}
    <div
      className="absolute top-10 left-10 w-32 h-32 bg-white/20 rounded-full blur-3xl animate-bounce-slow"
      style={{ animationDelay: "0s", animationDuration: "6s" }}
    />
    <div
      className="absolute bottom-20 right-20 w-40 h-40 bg-purple-300/20 rounded-full blur-3xl animate-bounce-slow"
      style={{ animationDelay: "2s", animationDuration: "8s" }}
    />
    <div
      className="absolute top-1/2 left-1/4 w-24 h-24 bg-blue-300/20 rounded-full blur-2xl animate-bounce-slow"
      style={{ animationDelay: "4s", animationDuration: "7s" }}
    />

    <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
      <div className="mb-6 inline-block px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 text-white font-semibold text-sm tracking-wide">
        ✨ EPORTFOLIO 2025
      </div>
      <h1
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight text-white drop-shadow-2xl"
        style={{
          textShadow:
            "0 0 30px rgba(255,255,255,0.3), 0 4px 20px rgba(0,0,0,0.3)",
        }}
      >
        Christopher Di Prima
      </h1>
      <p
        className="text-xl md:text-2xl lg:text-3xl font-bold mb-8 text-white max-w-3xl mx-auto drop-shadow-lg"
        style={{
          textShadow: "0 2px 10px rgba(0,0,0,0.2)",
        }}
      >
        Software Developer <span className="text-cyan-300">•</span> York
        University <span className="text-cyan-300">•</span> RBC Co-op
      </p>
      <p className="text-base md:text-lg text-white/95 mb-10 max-w-2xl mx-auto font-medium leading-relaxed backdrop-blur-sm bg-black/10 p-6 rounded-2xl border border-white/20">
        Welcome to my professional ePortfolio. Discover my journey as a
        developer, my academic background, and the projects that showcase my
        passion for building impactful technology solutions.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <a
          href="#projects"
          className="inline-flex items-center gap-2 bg-white text-purple-700 font-bold text-lg px-10 py-4 rounded-full shadow-2xl hover:bg-purple-100 hover:text-purple-900 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-300/50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
          View My Work
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white font-bold text-lg px-10 py-4 rounded-full shadow-xl hover:bg-white hover:text-purple-700 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/50"
        >
          Get In Touch
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
