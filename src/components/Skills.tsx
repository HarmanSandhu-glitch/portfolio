'use client'

import { motion } from 'framer-motion'

const skillGroups = [
  { category: 'Languages', color: 'indigo', skills: ['JavaScript (ES6+)', 'TypeScript', 'Java', 'C/C++', 'SQL', 'HTML5', 'CSS3'] },
  { category: 'Frameworks & Libraries', color: 'violet', skills: ['Next.js', 'React.js', 'Node.js', 'Express.js', 'Tailwind CSS', 'Chart.js', 'PDFKit'] },
  { category: 'Databases', color: 'blue', skills: ['MongoDB', 'PostgreSQL'] },
  { category: 'APIs & Integrations', color: 'purple', skills: ['REST API Design', 'Stripe Payment Gateway', 'Google Gemini API', 'Webhook Implementation'] },
  { category: 'Developer Tools', color: 'cyan', skills: ['Git', 'GitHub', 'Postman', 'VS Code', 'Linux/Unix'] },
  { category: 'CS Concepts', color: 'emerald', skills: ['DSA', 'OOP', 'DBMS', 'OS', 'Computer Networks', 'JWT Auth', 'RBAC'] },
]

const colorMap: Record<string, { tag: string; dot: string; header: string }> = {
  indigo:  { tag: 'border-indigo-500/25 text-indigo-300/90 hover:bg-indigo-500/20 hover:border-indigo-400/50 bg-transparent', dot: 'bg-indigo-400', header: 'text-indigo-400/70' },
  violet:  { tag: 'border-violet-500/25 text-violet-300/90 hover:bg-violet-500/20 hover:border-violet-400/50 bg-transparent', dot: 'bg-violet-400', header: 'text-violet-400/70' },
  blue:    { tag: 'border-blue-500/25 text-blue-300/90 hover:bg-blue-500/20 hover:border-blue-400/50 bg-transparent', dot: 'bg-blue-400', header: 'text-blue-400/70' },
  purple:  { tag: 'border-purple-500/25 text-purple-300/90 hover:bg-purple-500/20 hover:border-purple-400/50 bg-transparent', dot: 'bg-purple-400', header: 'text-purple-400/70' },
  cyan:    { tag: 'border-cyan-500/25 text-cyan-300/90 hover:bg-cyan-500/20 hover:border-cyan-400/50 bg-transparent', dot: 'bg-cyan-400', header: 'text-cyan-400/70' },
  emerald: { tag: 'border-emerald-500/25 text-emerald-300/90 hover:bg-emerald-500/20 hover:border-emerald-400/50 bg-transparent', dot: 'bg-emerald-400', header: 'text-emerald-400/70' },
}

const allTech = ['Next.js','React','Node.js','TypeScript','JavaScript','MongoDB','PostgreSQL','Tailwind CSS','Express.js','Stripe','Gemini API','JWT','Chart.js','PDFKit','Git','REST API','Java','C++','HTML5','CSS3','Linux','Postman','VS Code','RBAC','OOP','DSA']
const marqueeItems = [...allTech, ...allTech]

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 overflow-hidden" style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(17,17,28,0.4) 50%, transparent 100%)' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow">02 / Skills</p>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary">Tech <span className="gradient-text">Stack</span></h2>
            <p className="text-text-secondary text-sm max-w-sm md:text-right">Tools and technologies I use to ship production-ready applications.</p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {skillGroups.map((group, gi) => {
            const c = colorMap[group.color]
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 28, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.48, delay: gi * 0.08 }}
                className="glass rounded-2xl p-5 hover:-translate-y-1 transition-transform duration-300 card-glow"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className={`w-2 h-2 rounded-full ${c.dot} flex-shrink-0`} />
                  <h3 className={`text-[11px] font-mono font-medium uppercase tracking-wider ${c.header}`}>{group.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span key={skill} className={`px-3 py-1 text-xs font-medium rounded-full border transition-all duration-200 cursor-default ${c.tag}`}>{skill}</span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-bg to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-bg to-transparent z-10 pointer-events-none" />
        <div className="marquee-track gap-3 py-2">
          {marqueeItems.map((item, i) => (
            <span key={i} className="flex-shrink-0 mx-2 px-4 py-2 text-xs font-mono rounded-full border border-border/60 text-muted hover:border-accent/40 hover:text-accent-light hover:bg-accent/5 transition-all cursor-default">{item}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
