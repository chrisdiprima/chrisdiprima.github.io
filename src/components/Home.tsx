import React from "react";

import Header from "./Header";
import Footer from "./Footer";
import Main from "./Hero";
import Education from "./Education";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen text-gray-900">
      <Header />
      <Main />
      <Education />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
