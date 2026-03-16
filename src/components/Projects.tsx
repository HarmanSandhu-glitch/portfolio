'use client'

import { motion } from 'framer-motion'
import { Github, ShoppingBag, BookOpen, Clock, ArrowUpRight } from 'lucide-react'

const projects = [
  {
    title: 'Multi-Vendor E-Commerce Platform',
    date: 'Oct 2025',
    icon: ShoppingBag,
    tags: ['Next.js', 'MongoDB', 'Stripe', 'Gemini API'],
    color: 'indigo',
    featured: true,
    description: 'Full-featured multi-vendor marketplace with role-based dashboards for vendors and admins, Stripe webhooks, an AI chatbot, and OTP-based fraud prevention.',
    highlights: [
      'Role-based dashboards: vendor listings, admin order management & shipment tracking',
      'Stripe webhook automation — payment workflows tested via Stripe test environment',
      'Google Gemini API chatbot autonomously resolving common customer queries',
      'OTP-based order verification via REST API to reduce fraudulent transactions',
    ],
    github: 'https://github.com/HarmanSandhu-glitch',
    metrics: [{ label: 'Payment Gateway', value: 'Stripe' }, { label: 'AI Model', value: 'Gemini' }, { label: 'Auth', value: 'JWT + RBAC' }],
  },
  {
    title: 'AI-Powered Study Notes Generator',
    date: 'Sept 2025',
    icon: BookOpen,
    tags: ['React', 'Node.js', 'Gemini API', 'PDFKit'],
    color: 'violet',
    featured: false,
    description: 'Converts academic topics into structured Markdown notes via Google Gemini API with server-side PDF export, a credit-based subscription system, and Chart.js analytics.',
    highlights: [
      'Gemini API → structured Markdown notes with server-side PDF export via PDFKit',
      'Credit-based subscription system with tiered access & per-user usage tracking',
      'Chart.js dashboard visualising learning metrics across subject categories',
    ],
    github: 'https://github.com/HarmanSandhu-glitch',
    metrics: [{ label: 'AI', value: 'Gemini' }, { label: 'Export', value: 'PDFKit' }, { label: 'Analytics', value: 'Chart.js' }],
  },
  {
    title: 'Time-Boxing Productivity Suite',
    date: 'Dec 2024',
    icon: Clock,
    tags: ['MERN Stack', 'JWT', 'Chart.js'],
    color: 'blue',
    featured: false,
    description: 'MERN task management app with the time-boxing methodology, JWT + RBAC auth, 30% faster DB queries via MongoDB compound indexing, and a productivity dashboard.',
    highlights: [
      'Time-boxing work blocks for structured deep-focus sessions',
      'JWT authentication with RBAC and token refresh mechanism',
      'MongoDB compound indexing → 30% faster queries (850ms → 600ms load time)',
      'Chart.js dashboard: task completion rates & daily focus time',
    ],
    github: 'https://github.com/HarmanSandhu-glitch',
    metrics: [{ label: 'DB Speed', value: '+30%' }, { label: 'Load Time', value: '600ms' }, { label: 'Auth', value: 'JWT' }],
  },
]

const cc: Record<string, { border: string; tag: string; dot: string; icon: string; metric: string; glow: string }> = {
  indigo: { border: 'border-indigo-500/20 hover:border-indigo-500/40', tag: 'border-indigo-500/30 text-indigo-300 bg-indigo-500/10', dot: 'bg-indigo-500', icon: 'bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500/20', metric: 'text-indigo-300', glow: 'hover:shadow-indigo-500/10' },
  violet: { border: 'border-violet-500/20 hover:border-violet-500/40', tag: 'border-violet-500/30 text-violet-300 bg-violet-500/10', dot: 'bg-violet-500', icon: 'bg-violet-500/10 text-violet-400 group-hover:bg-violet-500/20', metric: 'text-violet-300', glow: 'hover:shadow-violet-500/10' },
  blue:   { border: 'border-blue-500/20 hover:border-blue-500/40', tag: 'border-blue-500/30 text-blue-300 bg-blue-500/10', dot: 'bg-blue-500', icon: 'bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20', metric: 'text-blue-300', glow: 'hover:shadow-blue-500/10' },
}

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow">03 / Projects</p>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary">What I&apos;ve <span className="gradient-text">Built</span></h2>
            <a href="https://github.com/HarmanSandhu-glitch" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs font-medium text-muted hover:text-text-primary transition-colors font-mono">
              <Github size={13} /> View all on GitHub <ArrowUpRight size={11} />
            </a>
          </div>
        </motion.div>

        {projects.filter((p) => p.featured).map((project) => {
          const c = cc[project.color]
          const Icon = project.icon
          return (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className={`group glass rounded-2xl border ${c.border} transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${c.glow} mb-6 overflow-hidden`}
            >
              <div className="p-8 grid lg:grid-cols-[1fr_280px] gap-8">
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${c.icon} transition-colors`}><Icon size={18} /></div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-text-primary text-base">{project.title}</h3>
                        <span className="px-2 py-0.5 text-[10px] font-mono rounded-full bg-indigo-500/15 text-indigo-400 border border-indigo-500/20">Featured</span>
                      </div>
                      <p className="text-xs text-muted font-mono">{project.date}</p>
                    </div>
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed mb-5">{project.description}</p>
                  <ul className="space-y-2 mb-6">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="flex gap-2.5 text-xs text-text-secondary/80 leading-relaxed">
                        <span className={`w-1.5 h-1.5 rounded-full ${c.dot} flex-shrink-0 mt-1.5`} />{h}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => <span key={tag} className={`px-2.5 py-1 text-xs font-mono rounded-full border ${c.tag}`}>{tag}</span>)}
                  </div>
                </div>
                <div className="flex flex-col gap-4 justify-center">
                  {project.metrics.map((m) => (
                    <div key={m.label} className="glass rounded-xl p-4 border border-border/40">
                      <p className="text-[10px] font-mono text-muted uppercase tracking-wider mb-1">{m.label}</p>
                      <p className={`text-lg font-bold font-mono ${c.metric}`}>{m.value}</p>
                    </div>
                  ))}
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 mt-2 py-2.5 rounded-xl border border-border hover:border-accent/50 text-text-secondary hover:text-text-primary text-xs font-medium transition-all">
                    <Github size={13} /> View Source
                  </a>
                </div>
              </div>
            </motion.div>
          )
        })}

        <div className="grid md:grid-cols-2 gap-5">
          {projects.filter((p) => !p.featured).map((project, i) => {
            const c = cc[project.color]
            const Icon = project.icon
            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: i * 0.12 }}
                className={`group glass rounded-2xl p-6 border ${c.border} transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${c.glow} flex flex-col`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${c.icon} transition-colors`}><Icon size={17} /></div>
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] font-mono text-muted">{project.date}</span>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-text-primary transition-colors"><Github size={14} /></a>
                  </div>
                </div>
                <h3 className="text-sm font-semibold text-text-primary mb-2 leading-snug">{project.title}</h3>
                <p className="text-xs text-muted leading-relaxed mb-4 flex-1">{project.description}</p>
                <ul className="space-y-1.5 mb-5">
                  {project.highlights.slice(0, 3).map((h, idx) => (
                    <li key={idx} className="flex gap-2 text-xs text-text-secondary/70 leading-relaxed">
                      <span className={`w-1.5 h-1.5 rounded-full ${c.dot} flex-shrink-0 mt-1.5`} />{h}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => <span key={tag} className={`px-2.5 py-1 text-[11px] font-mono rounded-full border ${c.tag}`}>{tag}</span>)}
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
