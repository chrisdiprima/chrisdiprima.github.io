const Hero = () => (
  <section
    id="hero"
    className="relative py-36 md:py-52 px-4 flex items-center justify-center min-h-[80vh] md:min-h-[85vh] text-gray-900"
    style={{
      background:
        "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
      boxShadow: "0 10px 40px 0 rgba(102, 126, 234, 0.3) inset",
      borderBottomLeftRadius: "4rem",
      borderBottomRightRadius: "4rem",
      position: "relative",
      overflow: "hidden",
    }}
  >
    {/* Animated gradient overlay */}
    <div
      className="absolute inset-0 opacity-40"
      style={{
        background:
          "radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.4) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.3) 0%, transparent 50%)",
        animation: "pulse 8s ease-in-out infinite",
      }}
    />

    {/* Geometric pattern overlay */}
    <svg
      width="100%"
      height="100%"
      className="absolute inset-0 opacity-[0.15] z-0"
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
            strokeWidth="1.5"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hexagons)" />
    </svg>

    {/* Floating accent circles with glow */}
    <div
      className="absolute top-10 left-10 w-40 h-40 bg-white/30 rounded-full blur-3xl animate-bounce-slow"
      style={{ animationDelay: "0s", animationDuration: "6s", filter: "blur(80px)" }}
    />
    <div
      className="absolute bottom-20 right-20 w-52 h-52 bg-purple-300/30 rounded-full blur-3xl animate-bounce-slow"
      style={{ animationDelay: "2s", animationDuration: "8s", filter: "blur(100px)" }}
    />
    <div
      className="absolute top-1/2 left-1/4 w-32 h-32 bg-blue-300/30 rounded-full blur-2xl animate-bounce-slow"
      style={{ animationDelay: "4s", animationDuration: "7s", filter: "blur(60px)" }}
    />

    <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
      <div className="mb-8 inline-block px-8 py-3 bg-white/25 backdrop-blur-md rounded-full border-2 border-white/40 text-white font-bold text-sm md:text-base tracking-wider shadow-lg hover:scale-105 transition-transform duration-300">
        ✨ EPORTFOLIO 2025
      </div>
      <h1
        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tight text-white drop-shadow-2xl"
        style={{
          textShadow:
            "0 0 40px rgba(255,255,255,0.4), 0 6px 30px rgba(0,0,0,0.4)",
          letterSpacing: "-0.02em",
        }}
      >
        Christopher Di Prima
      </h1>
      <p
        className="text-lg md:text-xl lg:text-2xl font-bold mb-10 text-white/95 max-w-3xl mx-auto drop-shadow-xl"
        style={{
          textShadow: "0 3px 15px rgba(0,0,0,0.3)",
        }}
      >
        Software Developer <span className="text-cyan-300 text-2xl md:text-3xl">•</span> York
        University <span className="text-cyan-300 text-2xl md:text-3xl">•</span> RBC Co-op
      </p>
      <p className="text-sm md:text-base lg:text-lg text-white/95 mb-12 max-w-2xl mx-auto font-medium leading-relaxed backdrop-blur-md bg-white/15 p-8 rounded-3xl border-2 border-white/30 shadow-2xl">
        Welcome to my professional ePortfolio. Discover my journey as a
        developer, my academic background, and the projects that showcase my
        passion for building impactful technology solutions.
      </p>
      <div className="flex flex-col sm:flex-row gap-5 items-center">
        <a
          href="#projects"
          className="inline-flex items-center gap-3 bg-white text-purple-700 font-bold text-base md:text-lg px-12 py-5 rounded-full shadow-2xl hover:bg-purple-50 hover:text-purple-900 hover:scale-110 hover:shadow-purple-300/50 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-300/60"
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
          className="inline-flex items-center gap-3 bg-transparent border-3 border-white text-white font-bold text-base md:text-lg px-12 py-5 rounded-full shadow-2xl hover:bg-white hover:text-purple-700 hover:scale-110 hover:shadow-white/50 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/60 backdrop-blur-sm"
        >
          Get In Touch
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
