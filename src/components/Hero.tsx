// Hero.tsx
import React from 'react';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-screen px-6 bg-gradient-to-br from-[#1f005c] via-[#5b0060] to-[#870160] overflow-hidden text-white"
    >
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      {/* Card Content */}
      <div className="relative z-10 max-w-2xl text-center p-8 bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl animate-fade-in-up">
        <div className="flex items-center justify-center mb-6">
          <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 flex items-center justify-center text-white text-2xl font-bold shadow-lg border-4 border-white/20">
            VA
          </div>
        </div>
        <h1 className="text-4xl font-extrabold mb-2">Vijay Andra</h1>
        <h2 className="text-xl mb-4 text-purple-100">Java Enthusiast & Aspiring Cyber Security Engineer</h2>
        <p className="text-sm text-white/90 mb-6">
          Passionate B.Tech IT student with expertise in Java development, cyber security, and system diagnostics.
          Ready to contribute to innovative technology solutions.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition duration-300 shadow hover:scale-105"
          >
            ✉️ Get In Touch
          </a>
          <a
            href="/resume.pdf"
            className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-full transition duration-300 border border-white/20 shadow hover:scale-105"
            download
          >
            ⬇️ Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
