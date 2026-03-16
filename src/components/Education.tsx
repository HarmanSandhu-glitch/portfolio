'use client'

import { useReveal } from '@/hooks/useReveal'
import { MapPin, Calendar, Trophy, Code, Star, Sparkles } from 'lucide-react'

const education = [
  {
    degree: 'Bachelor of Engineering',
    field: 'Computer Science and Engineering',
    institution: 'Chitkara University',
    location: 'Rajpura, Punjab',
    duration: '2023 – Present',
    status: 'current',
    description: 'Focused on full-stack development, data structures & algorithms, and modern software engineering practices. Developed 3 production-ready full-stack projects during studies.',
    tags: ['Next.js', 'DSA', 'DBMS', 'OS', 'Networking'],
  },
  {
    degree: 'Senior Secondary Education',
    field: 'Science Stream (PCM)',
    institution: 'Sanawar, An Institute for Children',
    location: 'Bathinda, Punjab',
    duration: '2020 – 2022',
    status: 'completed',
    description: 'Completed senior secondary with a strong foundation in science and mathematics.',
    tags: ['Physics', 'Chemistry', 'Mathematics'],
  },
]

const achievements = [
  {
    icon: Code,
    color: 'indigo',
    title: 'Competitive Programming',
    description: 'Solved 450+ DSA problems on LeetCode across arrays, trees, graphs, dynamic programming, and system design.',
    metric: '450+',
    metricLabel: 'Problems Solved',
    sub: 'LeetCode',
  },
  {
    icon: Star,
    color: 'violet',
    title: 'Open Source Projects',
    description: 'Published 3 full-stack projects on GitHub demonstrating modern development practices and clean architecture.',
    metric: '3',
    metricLabel: 'Projects Shipped',
    sub: 'GitHub',
  },
  {
    icon: Trophy,
    color: 'amber',
    title: 'Academic Excellence',
    description: 'Maintained a strong academic record while building multiple production-ready full-stack applications simultaneously.',
    metric: 'B.E.',
    metricLabel: 'CS Engineering',
    sub: 'Chitkara University',
  },
]

const colorMap: Record<string, { icon: string; border: string; metric: string; glow: string }> = {
  indigo: { icon: 'bg-indigo-500/10 text-indigo-400', border: 'border-indigo-500/20', metric: 'text-indigo-300', glow: 'hover:shadow-indigo-500/10' },
  violet: { icon: 'bg-violet-500/10 text-violet-400', border: 'border-violet-500/20', metric: 'text-violet-300', glow: 'hover:shadow-violet-500/10' },
  amber:  { icon: 'bg-amber-500/10 text-amber-400', border: 'border-amber-500/20', metric: 'text-amber-300', glow: 'hover:shadow-amber-500/10' },
}

export default function Education() {
  const { ref, visible } = useReveal()

  return (
    <section id="education" className="py-32 px-6" style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(17,17,28,0.5) 50%, transparent 100%)' }}>
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
          <p className="eyebrow">04 / Education &amp; Achievements</p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-16">
            Background &amp; <span className="gradient-text">Growth</span>
          </h2>

          <div className="relative mb-20">
            <div className="absolute left-[7px] top-3 bottom-8 w-px bg-gradient-to-b from-indigo-500/60 via-border to-transparent" />
            <div className="space-y-8">
              {education.map((edu, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="flex-shrink-0 mt-2">
                    <div className={`w-[15px] h-[15px] rounded-full border-2 z-10 relative transition-all duration-300 ${edu.status === 'current' ? 'bg-indigo-500 border-indigo-400 shadow-[0_0_12px_rgba(99,102,241,0.7)] group-hover:shadow-[0_0_20px_rgba(99,102,241,0.9)]' : 'bg-bg border-border group-hover:border-accent/50'}`} />
                  </div>
                  <div className="glass rounded-2xl p-6 flex-1 card-glow hover:-translate-y-0.5 transition-all duration-300">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <h3 className="font-semibold text-text-primary text-sm md:text-base">{edu.institution}</h3>
                        <p className="text-xs text-accent-light font-medium mt-0.5">{edu.degree} — {edu.field}</p>
                      </div>
                      {edu.status === 'current' && (
                        <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-mono">
                          <span className="relative flex h-1.5 w-1.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                          </span>
                          Current
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-4 text-xs text-muted mb-3">
                      <span className="flex items-center gap-1.5"><Calendar size={11} />{edu.duration}</span>
                      <span className="flex items-center gap-1.5"><MapPin size={11} />{edu.location}</span>
                    </div>
                    <p className="text-xs text-text-secondary leading-relaxed mb-3">{edu.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {edu.tags.map((tag) => (
                        <span key={tag} className="px-2 py-0.5 text-[10px] font-mono rounded border border-border/60 text-muted bg-[#0d0d15]">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3 mb-8">
            <Sparkles size={14} className="text-accent-light" />
            <h3 className="text-sm font-mono text-muted uppercase tracking-widest">Achievements &amp; Certifications</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {achievements.map((a) => {
              const Icon = a.icon
              const c = colorMap[a.color]
              return (
                <div key={a.title} className={`glass rounded-2xl p-6 border ${c.border} card-glow hover:-translate-y-1 transition-all duration-300 hover:shadow-xl ${c.glow}`}>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${c.icon}`}>
                    <Icon size={16} />
                  </div>
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className={`text-3xl font-bold font-mono ${c.metric}`}>{a.metric}</span>
                  </div>
                  <p className="text-[10px] font-mono text-muted uppercase tracking-widest mb-3">{a.metricLabel} · {a.sub}</p>
                  <h4 className="text-sm font-semibold text-text-primary mb-2">{a.title}</h4>
                  <p className="text-xs text-muted leading-relaxed">{a.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
