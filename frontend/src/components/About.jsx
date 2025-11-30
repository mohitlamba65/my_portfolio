import { Code2, Zap, Target, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: 'Full-Stack Expertise',
      description: 'Proficient in MERN stack, FastAPI, and modern web technologies for building scalable applications.',
    },
    {
      icon: Zap,
      title: 'AI & ML Integration',
      description: 'Experience with TensorFlow, RAG systems, and deploying production-ready ML models.',
    },
    {
      icon: Target,
      title: 'Problem Solver',
      description: 'Passionate about turning complex challenges into elegant, functional solutions.',
    },
    {
      icon: Users,
      title: 'Collaborative',
      description: 'Strong team player with excellent communication skills and a focus on delivering results.',
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0f0f1a] to-[#0a0a0a]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-blue-500/30 mb-6">
            <Users className="text-blue-400" size={16} />
            <span className="text-sm text-blue-300">About Me</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Building the Future
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            I'm a passionate full-stack developer specializing in creating innovative web applications and AI-powered solutions.
            With expertise in modern JavaScript frameworks, Python, and machine learning, I bring ideas to life through clean,
            efficient code and thoughtful design.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="glass rounded-2xl p-6 hover:bg-white/10 transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20 text-center"
              >
                <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 mb-4">
                  <IconComponent size={28} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            );
          })}
        </div>

        <div className="glass rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">My Journey</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                As a developer, I've always been fascinated by the intersection of technology and real-world problem-solving.
                My journey has taken me through various domains—from building interactive web applications to developing
                sophisticated machine learning models for security and automation.
              </p>
              <p className="text-gray-400 leading-relaxed">
                I believe in continuous learning and staying updated with the latest technologies. Whether it's exploring
                new frameworks, contributing to open-source projects, or experimenting with cutting-edge AI tools, I'm
                always pushing the boundaries of what's possible.
              </p>
            </div>

            <div className="space-y-4">
              <Skill label="Web Development" percent="90" colors="from-blue-600 to-cyan-600" />
              <Skill label="Machine Learning" percent="80" colors="from-cyan-600 to-teal-600" />
              <Skill label="API Development" percent="85" colors="from-teal-600 to-green-600" />
              <Skill label="UI/UX Design" percent="75" colors="from-green-600 to-emerald-600" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Skill = ({ label, percent, colors }) => (
  <div className="glass rounded-xl p-4 hover:bg-blue-500/10 transition-all">
    <div className="flex justify-between items-center mb-2">
      <span className="text-white font-medium">{label}</span>
      <span className="text-blue-400 font-mono text-sm">{percent}%</span>
    </div>
    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
      <div
        className={`h-full bg-gradient-to-r ${colors}`}
        style={{ width: `${percent}%` }}
      />
    </div>
  </div>
);

export default About;
