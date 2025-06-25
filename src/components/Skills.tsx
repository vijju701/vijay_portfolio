import React from 'react';
import { Code, Database, Globe, MessageCircle, Lightbulb, Users } from 'lucide-react';

const Skills = () => {
  const technicalSkills = [
    { name: 'SQL', level: 70, icon: <Database size={24} /> },
    { name: 'Core Java', level: 75, icon: <Code size={24} /> },
    { name: 'HTML', level: 80, icon: <Globe size={24} /> },
    { name: 'CSS', level: 65, icon: <Globe size={24} /> },
    { name: 'C Programming', level: 70, icon: <Code size={24} /> },
    { name: 'Data Structures & Algorithms', level: 75, icon: <Code size={24} /> }
  ];

  const softSkills = [
    { name: 'Problem-Solving', icon: <Lightbulb className="text-yellow-600" size={24} /> },
    { name: 'Effective Communication', icon: <MessageCircle className="text-blue-600" size={24} /> },
    { name: 'Team Collaboration', icon: <Users className="text-green-600" size={24} /> },
    { name: 'Technical Documentation', icon: <Code className="text-purple-600" size={24} /> }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <Code className="text-blue-600" size={28} />
              Technical Skills
            </h3>
            
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div
                  key={index}
                  className="group hover:bg-gray-50 p-4 rounded-xl transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="text-blue-600">{skill.icon}</div>
                      <span className="font-semibold text-gray-900">{skill.name}</span>
                    </div>
                    <span className="text-sm font-bold text-blue-600">{skill.level}%</span>
                  </div>
                  
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000 ease-out transform origin-left"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <Users className="text-emerald-600" size={28} />
              Soft Skills
            </h3>
            
            <div className="grid gap-6">
              {softSkills.map((skill, index) => (
                <div
                  key={index}
                  className="group p-6 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl hover:from-blue-50 hover:to-purple-50 transition-all duration-300 hover:shadow-lg border border-gray-100"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                      {skill.icon}
                    </div>
                    <span className="font-semibold text-gray-900 text-lg">{skill.name}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Skills Section */}
            <div className="mt-8 p-6 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl">
              <h4 className="font-bold text-gray-900 mb-3">Areas of Interest</h4>
              <div className="flex flex-wrap gap-2">
                {['Java Full Stack Development', 'Cyber Security', 'System Administration', 'Web Development'].map((interest, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm font-medium shadow-sm"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;