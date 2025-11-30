import React from 'react';
import { Github, Linkedin, Mail, Download, Code2, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { mockData } from '../mock';
import { motion } from 'framer-motion';

const Hero = () => {
    const { profile } = mockData;

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 pt-20">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-background to-background" />

            <div className="max-w-7xl mx-auto w-full relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="space-y-8"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-blue-500/30"
                        >
                            <Sparkles className="text-blue-400" size={16} />
                            <span className="text-sm text-blue-300">Available for opportunities</span>
                        </motion.div>

                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                                <span className="text-gradient-blue">
                                    {profile.name}
                                </span>
                            </h1>
                            <div className="flex items-center gap-3">
                                <Code2 className="text-blue-400" size={24} />
                                <p className="text-2xl md:text-3xl text-gray-300 font-light">
                                    {profile.title}
                                </p>
                            </div>
                        </div>

                        <p className="text-lg text-gray-400 leading-relaxed max-w-xl">
                            {profile.bio}
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Button
                                onClick={() => scrollToSection('projects')}
                                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-full transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
                            >
                                View Projects
                            </Button>
                            <Button
                                variant="outline"
                                onClick={() => window.open(profile.resumeUrl, '_blank')}
                                className="border-2 border-blue-500/20 text-blue-400 hover:bg-blue-500/10 px-8 py-6 text-lg rounded-full transition-all hover:scale-105"
                            >
                                <Download className="mr-2" size={20} />
                                Resume
                            </Button>
                        </div>

                        <div className="flex gap-4 pt-4">
                            {[
                                { icon: Github, href: profile.github },
                                { icon: Linkedin, href: profile.linkedin },
                                { icon: Mail, href: `mailto:${profile.email}` }
                            ].map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ y: -5 }}
                                    className="p-4 glass rounded-xl hover:bg-blue-500/10 hover:border-blue-500/30 transition-colors group"
                                >
                                    <social.icon size={24} className="text-gray-400 group-hover:text-blue-400 transition-colors" />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="flex justify-center lg:justify-end"
                    >
                        <div className="relative group">
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-600/20 to-cyan-600/20 blur-3xl group-hover:blur-4xl transition-all duration-700 opacity-50"></div>

                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px]"
                            >
                                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 to-cyan-500 p-1">
                                    <div className="w-full h-full rounded-[22px] overflow-hidden bg-gray-900 relative">
                                        <img
                                            src={profile.photo}
                                            alt={profile.name}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
