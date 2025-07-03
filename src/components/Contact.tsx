import {
  Mail,
  Phone,
  Linkedin,
  Github,
  Code,
  MapPin,
  Send,
  Instagram
} from 'lucide-react';
import { FaWhatsapp, FaTelegram, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="text-blue-600" size={24} />,
      label: 'Phone',
      value: '+91 6301737160',
      href: 'tel:+916301737160'
    },
    {
      icon: <Mail className="text-red-600" size={24} />,
      label: 'Email',
      value: 'vijayandra70@gmail.com',
      href: 'mailto:vijayandra70@gmail.com'
    },
    {
      icon: <MapPin className="text-green-600" size={24} />,
      label: 'Location',
      value: 'Andhra Pradesh, India',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="text-blue-700" size={24} />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/vijay-andra-b5575b289',
      href: 'https://www.linkedin.com/in/vijay-andra-b5575b289/',
      color: 'hover:bg-blue-50 hover:border-blue-200'
    },
    {
      icon: <Github className="text-gray-800" size={24} />,
      label: 'GitHub',
      value: 'github.com/vijju701',
      href: 'https://github.com/vijju701',
      color: 'hover:bg-gray-50 hover:border-gray-200'
    },
    {
      icon: <Code className="text-orange-600" size={24} />,
      label: 'LeetCode',
      value: 'leetcode.com/u/Vijju_8088',
      href: 'https://leetcode.com/u/Vijju_8088/',
      color: 'hover:bg-orange-50 hover:border-orange-200'
    }
  ];

  const messagingLinks = [
    {
      icon: <FaWhatsapp size={28} color="#22C55E" />,
      label: 'WhatsApp',
      href: 'https://wa.me/916301737160'
    },
    {
      icon: <Instagram size={28} className="text-pink-500" />,
      label: 'Instagram',
      href: 'https://www.instagram.com/__the._.vijay__'
    },
    {
      icon: <FaTwitter size={28} color="#1DA1F2" />,
      label: 'X',
      href: 'https://x.com/VijayAndra39110'
    },
    {
      icon: <FaTelegram size={28} color="#0088CC" />,
      label: 'Telegram',
      href: 'https://t.me/Vijay_andra'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations. Feel free to reach out if you'd like to discuss projects or just connect!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300 ${info.href !== '#' ? 'hover:bg-gray-50 cursor-pointer' : 'cursor-default'}`}
                  >
                    <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium">{info.label}</p>
                      <p className="text-gray-900 font-semibold">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Connect With Me</h3>
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-4 p-4 border-2 border-gray-100 rounded-xl transition-all duration-300 ${social.color} group`}
                  >
                    <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      {social.icon}
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium">{social.label}</p>
                      <p className="text-gray-900 font-semibold">{social.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form with Formspree */}
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Send Me a Message</h3>
            <form action="https://formspree.io/f/mrbkoqgp" method="POST" className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="What's this about?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  placeholder="Your message here..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
            
            {/* Messaging icons */}
            <div className="mt-10">
              <h4 className="text-center text-lg font-medium text-gray-700 mb-6">Message me directly via</h4>
              <div className="grid grid-cols-4 gap-4 px-4">
                {messagingLinks.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-4 rounded-xl border border-gray-200 hover:bg-gray-50 transition-all hover:shadow-md"
                    aria-label={item.label}
                  >
                    <div className="mb-2">
                      {item.icon}
                    </div>
                    <span className="text-sm font-medium text-gray-600">{item.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;