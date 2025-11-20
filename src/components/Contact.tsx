import React from "react";

const Contact: React.FC = () => (
  <section id="contact" className="py-16 px-4">
    <div className="max-w-5xl mx-auto text-center bg-white/80 rounded-3xl shadow-lg border border-[#b0abb9]/30 p-12 relative flex flex-col items-center">
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-24 h-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 rounded-full opacity-60"></div>
      <h2 className="text-3xl font-bold mb-6 text-blue-900 drop-shadow">
        Contact
      </h2>
      <p className="mb-6 text-gray-700">
        You can contact me by email or connect with me on LinkedIn and GitHub. I
        look forward to hearing from you!
      </p>
      <div className="flex flex-row items-center gap-4">
        <a
          href="mailto:chrisdip@my.yorku.com"
          className="text-blue-600 hover:underline"
        >
          chrisdip@my.yorku.com
        </a>
        <a
          href="https://linkedin.com/in/christopher-diprima"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/chrisdiprima"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          GitHub
        </a>
      </div>
    </div>
  </section>
);

export default Contact;
