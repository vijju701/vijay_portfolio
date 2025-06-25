import React from 'react';
import { Heart, Code, Linkedin, Github, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Linkedin size={20} />,
      href: 'https://www.linkedin.com/in/vijay-andra-b5575b289/',
      label: 'LinkedIn',
      color: 'hover:text-blue-600'
    },
    {
      icon: <Github size={20} />,
      href: 'https://github.com/vijju701',
      label: 'GitHub',
      color: 'hover:text-gray-900'
    },
    {
      icon: <Mail size={20} />,
      href: 'mailto:vijayandra70@gmail.com',
      label: 'Email',
      color: 'hover:text-red-600'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div className="text-center md:text-left">
            <button
              onClick={scrollToTop}
              className="text-2xl font-bold hover:text-blue-400 transition-colors"
            >
              Vijay Andra
            </button>
            <p className="text-gray-400 mt-2">
              Java Enthusiast & Cyber Security Aspirant
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-gray-700 transform hover:scale-110 ${social.color}`}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-gray-400 flex items-center justify-center md:justify-end gap-2">
              Made with <Heart className="text-red-500" size={16} /> and <Code className="text-blue-400" size={16} />
            </p>
            <p className="text-gray-500 text-sm mt-1">
              © {currentYear} Vijay Andra. All rights reserved.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              Built with React, TypeScript, and Tailwind CSS
            </p>
            
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <button
                onClick={scrollToTop}
                className="hover:text-white transition-colors"
              >
                Back to Top ↑
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;