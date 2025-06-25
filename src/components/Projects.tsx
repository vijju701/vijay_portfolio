import React from 'react';
import { ExternalLink, Github, Shield, Globe, Image } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Packet Sniffer',
      description: 'A Python-based real-time traffic analyzer and malicious packet detector using advanced networking libraries.',
      technologies: ['Python', 'libpcap', 'Boost', 'Network Security'],
      icon: <Shield className="text-red-600" size={32} />,
      gradient: 'from-red-100 to-pink-100',
      borderColor: 'border-red-500',
      features: [
        'Real-time network traffic analysis',
        'Malicious packet detection algorithms',
        'Network security monitoring',
        'Performance optimization with Boost libraries'
      ],
      codeUrl: 'https://github.com/vijju701/Packet-sniffer',
      demoUrl: 'https://www.linkedin.com/posts/vijay-andra-b5575b289_learning-coding-growth-activity-7305957214190538752-l3b6?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEYOibEB0UnAm7aX3O2sxpEkXMnBDJloaXY'
    },
    {
      title: 'Restaurant Web Page',
      description: 'A modern, responsive restaurant website showcasing menu items, pricing, and customer reviews with elegant design.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
      icon: <Globe className="text-blue-600" size={32} />,
      gradient: 'from-blue-100 to-cyan-100',
      borderColor: 'border-blue-400',
      features: [
        'Interactive food menu display',
        'Dynamic pricing system',
        'Customer review section',
        'Mobile-responsive design'
      ],
      codeUrl: 'https://github.com/vijju701/restaurant-site',
      demoUrl: '#'
    },
    {
      title: 'Steganography Software',
      description: 'Advanced image steganography tool for hiding and extracting text within images using sophisticated encoding techniques.',
      technologies: ['Python', 'PIL', 'Cryptography', 'Image Processing'],
      icon: <Image className="text-purple-600" size={32} />,
      gradient: 'from-purple-100 to-indigo-100',
      borderColor: 'border-purple-400',
      features: [
        'Text-to-image encoding/decoding',
        'Multiple steganography algorithms',
        'Image format compatibility',
        'Secure data hiding techniques'
      ],
      codeUrl: 'https://github.com/vijju701/steganography',
      demoUrl: 'https://github.com/vijju701/steganography/blob/main/README.md'
    },
    {
      title: 'Gym Management GUI',
      description: 'Java Swing-based application to manage gym members, plans, and attendance records with a user-friendly interface.',
      technologies: ['Java', 'Swing', 'OOP', 'File Handling'],
      icon: <Shield className="text-green-600" size={32} />,
      gradient: 'from-green-100 to-lime-100',
      borderColor: 'border-green-400',
      features: [
        'Add, update, and remove gym member profiles',
        'Manages subscription plans and renewals',
        'Local data storage using file handling',
        'User-friendly Java Swing UI design'
      ],
      codeUrl: 'https://github.com/vijju701/GymManagementGUI',
      demoUrl: 'https://github.com/vijju701/GymManagementGUI/blob/main/README.md'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore my portfolio of projects showcasing practical applications in cyber security, 
            web development, and software engineering.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group bg-white rounded-xl p-6 border-l-4 ${project.borderColor} shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]`}
            >
              {/* Project Icon */}
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center shadow-inner">
                  {project.icon}
                </div>
              </div>

              {/* Project Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center group-hover:text-gray-800 transition-colors">
                {project.title}
              </h3>

              {/* Project Description */}
              <p className="text-gray-700 mb-6 text-center leading-relaxed">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2 justify-center">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h4 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wide">Key Features</h4>
                <ul className="space-y-2">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-gray-700 flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-gray-500 rounded-full mt-2 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center sm:items-stretch">
                <a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-white text-gray-700 rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium shadow-sm w-full sm:w-auto"
                >
                  <Github size={16} />
                  Code
                </a>
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium shadow-sm w-full sm:w-auto"
                >
                  <ExternalLink size={16} />
                  Demo
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Interested in My Work?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              I'm always working on new projects and learning new technologies. 
              Check out my GitHub for more repositories and contributions.
            </p>
            <a
              href="https://github.com/vijju701"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
            >
              <Github size={20} />
              View All Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
