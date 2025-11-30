import React from 'react';
import { Code2, Database, Brain, Wrench, Monitor } from 'lucide-react';
import { mockData } from '../mock';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

const Skills = () => {
    const { skills } = mockData;

    const skillCategories = [
        { title: 'Frontend', items: skills.frontend, icon: Monitor, color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/20' },
        { title: 'Backend', items: skills.backend, icon: Code2, color: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/20' },
        { title: 'Database', items: skills.database, icon: Database, color: 'text-green-400', bg: 'bg-green-500/10', border: 'border-green-500/20' },
        { title: 'AI/ML', items: skills.aiml, icon: Brain, color: 'text-pink-400', bg: 'bg-pink-500/10', border: 'border-pink-500/20' },
        { title: 'Tools & Others', items: skills.tools, icon: Wrench, color: 'text-orange-400', bg: 'bg-orange-500/10', border: 'border-orange-500/20' }
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section id="skills" className="py-24 relative overflow-hidden px-6">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-blue-500/30 mb-6"
                    >
                        <Code2 className="text-blue-400" size={16} />
                        <span className="text-sm text-blue-300">Technical Arsenal</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
                    >
                        <span className="text-gradient-blue">
                            Skills & Technologies
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 text-lg max-w-2xl mx-auto"
                    >
                        A comprehensive toolkit for building modern web applications and AI-driven solutions
                    </motion.p>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {skillCategories.map((category, idx) => {
                        const IconComponent = category.icon;
                        return (
                            <motion.div
                                key={idx}
                                variants={item}
                                whileHover={{ y: -5, scale: 1.02 }}
                                className={cn(
                                    "glass rounded-2xl p-6 transition-all duration-300 group",
                                    "hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-500/30"
                                )}
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <div className={cn("p-3 rounded-xl transition-transform group-hover:scale-110", category.bg)}>
                                        <IconComponent size={24} className={category.color} />
                                    </div>
                                    <h3 className="text-xl font-semibold text-white">
                                        {category.title}
                                    </h3>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {category.items.map((skill, skillIdx) => (
                                        <span
                                            key={skillIdx}
                                            className="px-3 py-1.5 bg-white/5 text-gray-300 text-sm rounded-lg border border-white/10 hover:border-white/30 transition-colors cursor-default"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
