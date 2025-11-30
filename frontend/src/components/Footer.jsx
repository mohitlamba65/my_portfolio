import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { mockData } from '../mock';

const Footer = () => {
  const { profile } = mockData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden py-12 px-6">
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-[#0f0f1a]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-mono">
              ML
            </h3>
            <p className="text-gray-400 text-sm">
              Building innovative solutions with modern web technologies and AI.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#about" className="hover:text-blue-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-blue-400 transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-blue-400 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Connect</h4>
            <div className="flex gap-4 mb-4">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass rounded-lg hover:bg-blue-500/20 hover:border-blue-500/50 transition-all hover:-translate-y-1 group"
              >
                <Github size={20} className="text-gray-400 group-hover:text-blue-400 transition-colors" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass rounded-lg hover:bg-blue-500/20 hover:border-blue-500/50 transition-all hover:-translate-y-1 group"
              >
                <Linkedin size={20} className="text-gray-400 group-hover:text-blue-400 transition-colors" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="p-3 glass rounded-lg hover:bg-blue-500/20 hover:border-blue-500/50 transition-all hover:-translate-y-1 group"
              >
                <Mail size={20} className="text-gray-400 group-hover:text-blue-400 transition-colors" />
              </a>
            </div>
            <p className="text-sm text-gray-400">{profile.email}</p>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>
            © {currentYear} {profile.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-2">
            Built with <Heart size={16} className="text-red-500" /> using React & FastAPI
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
