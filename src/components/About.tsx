'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Terminal, Cpu, Trophy, GitBranch } from 'lucide-react'

function useCountUp(target: number, duration = 1600, active = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!active) return
    let start = 0
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 16)
    return () => clearInterval(timer)
  }, [target, duration, active])
  return count
}

const stats = [
  { label: 'LeetCode Solutions', value: 450, suffix: '+', icon: Terminal, color: 'indigo' },
  { label: 'Full-Stack Projects', value: 3, suffix: '', icon: GitBranch, color: 'violet' },
  { label: 'Technologies', value: 15, suffix: '+', icon: Cpu, color: 'blue' },
  { label: 'Year of Study', value: 2, suffix: 'nd', icon: Trophy, color: 'emerald' },
]

const colorMap: Record<string, string> = {
  indigo: 'bg-indigo-500/10 text-indigo-400',
  violet: 'bg-violet-500/10 text-violet-400',
  blue: 'bg-blue-500/10 text-blue-400',
  emerald: 'bg-emerald-500/10 text-emerald-400',
}

function StatCard({ stat, active, index }: { stat: typeof stats[0]; active: boolean; index: number }) {
  const Icon = stat.icon
  const count = useCountUp(stat.value, 1400, active)
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.48, delay: index * 0.1 + 0.2 }}
      className="glass rounded-2xl p-6 group hover:-translate-y-1 transition-all duration-300 card-glow"
    >
      <div className={`w-9 h-9 rounded-xl flex items-center justify-center mb-4 ${colorMap[stat.color]} group-hover:scale-110 transition-transform`}>
        <Icon size={16} />
      </div>
      <p className="text-3xl font-bold text-text-primary mb-1 font-mono">{count}{stat.suffix}</p>
      <p className="text-xs text-muted">{stat.label}</p>
    </motion.div>
  )
}

export default function About() {
  const [inView, setInView] = useState(false)

  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px', amount: 0.1 }}
          transition={{ duration: 0.55 }}
          onViewportEnter={() => setInView(true)}
        >
          <p className="eyebrow">01 / About</p>
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: 0.15, duration: 0.55 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6 leading-tight">
                Building the web, <span className="gradient-text">one stack at a time.</span>
              </h2>
              <div className="space-y-4 text-text-secondary leading-relaxed text-sm md:text-base">
                <p>I&apos;m a Computer Science Engineering student at <span className="text-text-primary font-medium">Chitkara University</span>, specialising in full-stack development — building things that are fast, scalable, and a pleasure to use.</p>
                <p>My stack spans <span className="text-accent-light font-mono text-[13px]">Next.js</span>, <span className="text-accent-light font-mono text-[13px]">React</span>, <span className="text-accent-light font-mono text-[13px]">Node.js</span>, <span className="text-accent-light font-mono text-[13px]">MongoDB</span>, and <span className="text-accent-light font-mono text-[13px]">PostgreSQL</span>. I&apos;ve shipped AI-integrated platforms, real-time dashboards, and multi-vendor marketplaces with Stripe.</p>
                <p>Outside of code I sharpen my problem-solving through competitive programming — 450+ LeetCode problems covering arrays, trees, graphs, and dynamic programming.</p>
              </div>
              <div className="flex flex-wrap gap-3 mt-8">
                <a href="https://github.com/HarmanSandhu-glitch" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-full border border-border hover:border-accent/50 text-text-secondary hover:text-accent-light transition-all bg-[#0d0d15]">GitHub Profile ↗</a>
                <a href="https://linkedin.com/in/harmanjotsinghsandhu" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-full border border-border hover:border-accent/50 text-text-secondary hover:text-accent-light transition-all bg-[#0d0d15]">LinkedIn ↗</a>
                <a href="tel:+918847602948" className="flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-full border border-border hover:border-accent/50 text-text-secondary hover:text-accent-light transition-all bg-[#0d0d15]">+91 88476 02948</a>
              </div>
            </motion.div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => <StatCard key={s.label} stat={s} active={inView} index={i} />)}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
