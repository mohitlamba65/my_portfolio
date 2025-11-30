import React, { useState } from 'react';
import { ExternalLink, Layers, Github } from 'lucide-react';
import { Button } from './ui/button';
import { mockData } from '../mock';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('all');
    const { projects } = mockData;

    const filters = [
        { id: 'all', label: 'All Projects' },
        { id: 'web', label: 'Web Development' },
        { id: 'ml', label: 'Machine Learning' },
        { id: 'ai', label: 'Artificial Intelligence' }
    ];

    const filteredProjects =
        activeFilter === 'all'
            ? projects
            : projects.filter((p) => p.category === activeFilter);

    return (
        <section id="projects" className="py-24 relative overflow-hidden px-6">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-blue-500/30 mb-6"
                    >
                        <Layers className="text-blue-400" size={16} />
                        <span className="text-sm text-blue-300">Portfolio</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
                    >
                        <span className="text-gradient-blue">
                            Featured Projects
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 text-lg max-w-2xl mx-auto"
                    >
                        A selection of projects showcasing expertise in web development, machine learning, and AI
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-3 mb-12"
                >
                    {filters.map((filter) => (
                        <Button
                            key={filter.id}
                            onClick={() => setActiveFilter(filter.id)}
                            className={cn(
                                "transition-all duration-300 rounded-full",
                                activeFilter === filter.id
                                    ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/25"
                                    : "glass text-gray-400 hover:text-white hover:bg-white/10"
                            )}
                        >
                            {filter.label}
                        </Button>
                    ))}
                </motion.div>

                <motion.div
                    layout
                    className="grid md:grid-cols-2 gap-8"
                >
                    <AnimatePresence mode='popLayout'>
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                key={project.id}
                                className="group glass rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all duration-500"
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20 z-10" />
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-20" />

                                    <div className="absolute top-4 right-4 z-30 px-3 py-1 rounded-full glass text-xs text-blue-300 border border-blue-500/30">
                                        {project.date}
                                    </div>
                                </div>

                                <div className="p-8 space-y-6 relative z-30">
                                    <div className="space-y-2">
                                        <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-400 leading-relaxed line-clamp-3">
                                            {project.description}
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                        {project.techStack.map((tech, techIdx) => (
                                            <span
                                                key={techIdx}
                                                className="px-3 py-1 bg-white/5 text-xs text-gray-300 rounded-lg border border-white/10"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex gap-4 pt-2">
                                        {project.liveUrl !== '#' && (
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1"
                                            >
                                                <Button className="w-full bg-blue-600/20 hover:bg-blue-600 text-blue-400 hover:text-white border border-blue-500/30 hover:border-transparent transition-all group/btn">
                                                    <ExternalLink size={16} className="mr-2 group-hover/btn:scale-110 transition-transform" />
                                                    Live Demo
                                                </Button>
                                            </a>
                                        )}
                                        <a
                                            href="#"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1"
                                        >
                                            <Button variant="outline" className="w-full border-white/10 hover:bg-white/5 text-gray-300 hover:text-white">
                                                <Github size={16} className="mr-2" />
                                                Code
                                            </Button>
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
