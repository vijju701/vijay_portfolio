import React from 'react';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const About = () => {
  const education = [
    {
      degree: 'B.Tech in Information Technology',
      institution: 'GMR Institute of Technology',
      period: '2023 – 2026',
      grade: 'CGPA: 8.37 (till now)',
      icon: <GraduationCap className="text-blue-600" size={24} />
    },
    {
      degree: 'Diploma in Computer Science',
      institution: 'Government Polytechnic Chodavaram',
      period: '2020 – 2023',
      grade: '70.92%',
      icon: <Award className="text-indigo-600" size={24} />
    },
    {
      degree: '10th Standard',
      institution: 'Sri Satya Sai Vidyalayam',
      period: '2020',
      grade: '96.5%',
      icon: <Calendar className="text-emerald-600" size={24} />
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Section */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-6 mx-auto lg:mx-0">
                <span className="text-2xl font-bold text-white">VA</span>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Passionate Technology Enthusiast</h3>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                I am Vijay Andra, a dedicated B.Tech Information Technology student at GMR Institute of Technology 
                with a strong foundation in computer science from my diploma studies. My journey in technology began 
                with curiosity about how systems work and has evolved into a deep passion for Java development and 
                cyber security.
              </p>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                With hands-on experience in system diagnostics, OS installation, and hardware troubleshooting gained 
                during my internship at Lenovo Service@365, I bring practical knowledge to complement my academic learning. 
                I am actively seeking opportunities to contribute to innovative projects in Java Full Stack development 
                and Cyber Security.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                My goal is to leverage technology to solve real-world problems while continuously learning and growing 
                in the ever-evolving tech landscape.
              </p>
            </div>
          </div>

          {/* Education Timeline */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Education</h3>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                      {edu.icon}
                    </div>
                    
                    <div className="flex-grow">
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">{edu.degree}</h4>
                      <p className="text-gray-600 mb-2">{edu.institution}</p>
                      
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                        <span className="text-sm text-gray-500 mb-1 sm:mb-0">{edu.period}</span>
                        <span className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-sm font-medium rounded-full">
                          {edu.grade}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;