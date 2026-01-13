import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DATA } from './data';
import { Terminal, Code, Cloud, Server, Cpu } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('terminal');

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-300 font-mono selection:bg-green-500/30">
      {/* Interactive Background */}
      <div className="fixed inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

      <nav className="fixed top-0 w-full z-50 bg-black/80 border-b border-white/10 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-green-500 font-bold text-xl tracking-tighter">SAURAV_SINGH.exe</span>
          <div className="flex gap-6 text-sm">
            {['terminal', 'experience', 'skills', 'projects'].map(tab => (
              <button 
                key={tab} 
                onClick={() => setActiveTab(tab)}
                className={`capitalize ${activeTab === tab ? 'text-green-500' : 'hover:text-white'}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 pt-32 pb-20">
        <AnimatePresence mode="wait">
          {activeTab === 'terminal' && <TerminalSection />}
          {activeTab === 'experience' && <ExperienceSection />}
          {activeTab === 'skills' && <SkillsSection />}
          {activeTab === 'projects' && <ProjectsSection />}
        </AnimatePresence>
      </main>
    </div>
  );
}

// Sub-components defined in the same file to keep file count low
function TerminalSection() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
      <div className="bg-[#1a1a1a] border border-white/10 rounded-lg overflow-hidden shadow-2xl">
        <div className="bg-white/5 px-4 py-2 border-b border-white/10 flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/50" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
          <div className="w-3 h-3 rounded-full bg-green-500/50" />
        </div>
        <div className="p-6 space-y-4">
          <p className="text-green-500">$ whoami</p>
          <p className="text-blue-400 font-bold text-2xl">Saurav Singh [Cloud Engineer]</p>
          <p className="text-gray-400 leading-relaxed max-w-2xl">
            Specializing in multi-cloud architectures (AWS, GCP, Azure). 
            I build reproducible, scalable, and secure infrastructure. 
            Currently at {DATA.experience[0].company}.
          </p>
          <p className="text-green-500">$ ls certifications/</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
            {DATA.certifications.map((c, i) => (
              <div key={i} className="text-purple-400">✓ {c.name}</div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ExperienceSection() {
  return (
    <motion.div className="space-y-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      {DATA.experience.map((exp, i) => (
        <div key={i} className="border-l-2 border-green-500/30 pl-8 relative">
          <div className="absolute w-4 h-4 bg-green-500 rounded-full -left-[9px] top-1" />
          <h3 className="text-xl text-white font-bold">{exp.role} @ <span className="text-green-500">{exp.company}</span></h3>
          <p className="text-sm text-gray-500 mb-4">{exp.date}</p>
          <ul className="space-y-2">
            {exp.tasks.map((task, j) => <li key={j} className="text-gray-400">• {task}</li>)}
          </ul>
        </div>
      ))}
    </motion.div>
  );
}

function SkillsSection() {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {DATA.skills.map((skill, i) => (
          <div key={i} className="bg-white/5 p-4 rounded-lg border border-white/10 hover:border-green-500/50 transition-colors">
            <div className="flex justify-between mb-2">
                <span className="text-white">{skill.name}</span>
                <span className="text-xs text-green-500">{skill.level}%</span>
            </div>
            <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
                <div className="bg-green-500 h-full" style={{ width: `${skill.level}%` }} />
            </div>
          </div>
        ))}
      </div>
    );
}

function ProjectsSection() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {DATA.projects.map((p, i) => (
                <div key={i} className="group p-6 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-xl hover:border-green-500/50 transition-all">
                    <h4 className="text-lg font-bold text-white mb-2">{p.title}</h4>
                    <p className="text-sm text-gray-400 mb-4">{p.desc}</p>
                    <div className="flex gap-2 flex-wrap">
                        {p.tech.map(t => <span key={t} className="text-[10px] bg-green-500/10 text-green-500 px-2 py-1 rounded uppercase border border-green-500/20">{t}</span>)}
                    </div>
                </div>
            ))}
        </div>
    );
}
