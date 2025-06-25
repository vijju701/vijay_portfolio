import React from 'react';
import { Briefcase, CheckCircle, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const responsibilities = [
    'OS installation and system configuration',
    'Hardware diagnostics and component replacement',
    'Customer support and technical assistance',
    'Excel record keeping and documentation',
    'ESD safety compliance and protocols'
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 sm:p-12 shadow-xl border border-blue-100">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Briefcase className="text-white" size={28} />
              </div>
              
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Trainee</h3>
                <p className="text-xl text-blue-600 font-semibold">Lenovo Service@365</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-center gap-3">
                <Calendar className="text-blue-600" size={20} />
                <span className="text-gray-700 font-medium">December 2022 – June 2023</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-blue-600" size={20} />
                <span className="text-gray-700 font-medium">6 Months Duration</span>
              </div>
            </div>

            <div className="mb-8">
              <h4 className="text-xl font-bold text-gray-900 mb-6">Key Responsibilities</h4>
              <div className="grid gap-4">
                {responsibilities.map((responsibility, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                  >
                    <CheckCircle className="text-emerald-500 flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-gray-700 leading-relaxed">{responsibility}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h4 className="text-lg font-bold text-gray-900 mb-3">Key Achievements</h4>
              <p className="text-gray-700 leading-relaxed">
                Successfully completed comprehensive training in computer hardware diagnostics and repair, 
                gaining hands-on experience with various Lenovo systems. Maintained high customer satisfaction 
                ratings through effective technical support and clear communication. Developed strong problem-solving 
                skills while adhering to strict safety protocols and documentation standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;