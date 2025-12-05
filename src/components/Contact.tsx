import { Mail, Linkedin, Github, MessageCircle } from "lucide-react";

const Contact = () => (
  <section id="contact" className="py-16 px-4">
    <div className="max-w-6xl mx-auto text-center rounded-3xl shadow-2xl bg-gradient-to-br from-white/80 to-blue-50/70 backdrop-blur-md border-2 border-blue-300/50 p-8 sm:p-10 md:p-16 lg:p-16 relative flex flex-col items-center">
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-32 h-3 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full opacity-80 shadow-lg"></div>
      <h2 className="text-3xl font-bold mb-6 text-blue-900 drop-shadow flex items-center gap-3 justify-start w-full">
        <MessageCircle className="w-8 h-8" />
        Contact
      </h2>
      <p className="mb-6 text-gray-700">
        You can contact me by email or connect with me on LinkedIn and GitHub. I
        look forward to hearing from you!
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <a
          href="mailto:chrisdip@my.yorku.com"
          className="flex items-center gap-2 text-blue-600 hover:text-blue-800 hover:underline transition-colors"
        >
          <Mail className="w-5 h-5" />
          chrisdip@my.yorku.com
        </a>
        <a
          href="https://linkedin.com/in/christopher-diprima"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-blue-600 hover:text-blue-800 hover:underline transition-colors"
        >
          <Linkedin className="w-5 h-5" />
          LinkedIn
        </a>
        <a
          href="https://github.com/chrisdiprima"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-blue-600 hover:text-blue-800 hover:underline transition-colors"
        >
          <Github className="w-5 h-5" />
          GitHub
        </a>
      </div>
    </div>
  </section>
);

export default Contact;
