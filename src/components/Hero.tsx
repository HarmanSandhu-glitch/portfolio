'use client'

import { useEffect, useRef, useState } from 'react'
import { Github, Linkedin, Mail, ArrowDown, Code2, Terminal } from 'lucide-react'

const ROLES = [
  'Full-Stack Developer',
  'Next.js Engineer',
  'AI Integration Builder',
  'Open Source Contributor',
]

function useTypewriter(words: string[], speed = 80, pause = 1800) {
  const [displayed, setDisplayed] = useState('')
  const [wordIdx, setWordIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIdx]
    let timeout: ReturnType<typeof setTimeout>
    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx((c) => c + 1), speed)
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx((c) => c - 1), speed / 2)
    } else {
      setDeleting(false)
      setWordIdx((w) => (w + 1) % words.length)
    }
    setDisplayed(current.slice(0, charIdx))
    return () => clearTimeout(timeout)
  }, [charIdx, deleting, wordIdx, words, speed, pause])

  return displayed
}

const codeLines = [
  { indent: 0, tokens: [{ t: 'const ', c: 'text-violet-400' }, { t: 'stack', c: 'text-sky-300' }, { t: ' = [', c: 'text-slate-300' }] },
  { indent: 1, tokens: [{ t: '"Next.js"', c: 'text-emerald-400' }, { t: ',', c: 'text-slate-400' }] },
  { indent: 1, tokens: [{ t: '"Node.js"', c: 'text-emerald-400' }, { t: ',', c: 'text-slate-400' }] },
  { indent: 1, tokens: [{ t: '"MongoDB"', c: 'text-emerald-400' }, { t: ',', c: 'text-slate-400' }] },
  { indent: 1, tokens: [{ t: '"Stripe"', c: 'text-emerald-400' }, { t: ',', c: 'text-slate-400' }] },
  { indent: 1, tokens: [{ t: '"Gemini API"', c: 'text-emerald-400' }] },
  { indent: 0, tokens: [{ t: ']', c: 'text-slate-300' }] },
  { indent: 0, tokens: [] },
  { indent: 0, tokens: [{ t: 'const ', c: 'text-violet-400' }, { t: 'solved', c: 'text-sky-300' }, { t: ' = ', c: 'text-slate-300' }, { t: '450', c: 'text-orange-400' }, { t: ' // LeetCode', c: 'text-slate-500' }] },
]

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const role = useTypewriter(ROLES)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const fn = (e: MouseEvent) => {
      el.style.setProperty('--mx', `${(e.clientX / window.innerWidth) * 100}%`)
      el.style.setProperty('--my', `${(e.clientY / window.innerHeight) * 100}%`)
    }
    window.addEventListener('mousemove', fn)
    return () => window.removeEventListener('mousemove', fn)
  }, [])

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center px-6 overflow-hidden"
      style={{ '--mx': '50%', '--my': '50%' } as React.CSSProperties}
    >
      <div className="orb w-[700px] h-[700px] bg-indigo-600/15" style={{ top: '-20%', left: '-20%' }} />
      <div className="orb w-[500px] h-[500px] bg-violet-600/10" style={{ bottom: '5%', right: '-15%', animationDelay: '4s' }} />
      <div className="orb w-[300px] h-[300px] bg-cyan-600/10" style={{ top: '60%', left: '40%', animationDelay: '7s' }} />
      <div className="pointer-events-none absolute inset-0 z-0 opacity-40" style={{ background: 'radial-gradient(600px circle at var(--mx) var(--my), rgba(99,102,241,0.1), transparent 70%)' }} />
      <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(30,30,46,0.25)_1px,transparent_1px),linear-gradient(90deg,rgba(30,30,46,0.25)_1px,transparent_1px)] bg-[size:72px_72px]" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_120%,rgba(10,10,15,0.9),transparent)]" />

      <div className="relative z-10 max-w-6xl w-full mx-auto pt-24">
        <div className="grid lg:grid-cols-[1fr_420px] gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/5 text-xs font-mono text-emerald-400 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              Available for opportunities
            </div>

            <h1 className="text-5xl sm:text-7xl lg:text-[5.5rem] font-bold tracking-tight leading-[1.0] mb-6">
              <span className="block text-text-primary">Harmanjot</span>
              <span className="block gradient-text">Singh</span>
            </h1>

            <div className="flex items-center gap-2 mb-6 h-8">
              <span className="text-base md:text-lg text-text-secondary font-light">{role}</span>
              <span className="typing-cursor" />
            </div>

            <p className="max-w-xl text-sm md:text-base text-muted leading-relaxed mb-10">
              Building scalable web apps with AI integration, secure payments &amp; real-time analytics.{' '}
              <span className="text-accent-light font-medium">450+ LeetCode</span> problems solved.{' '}
              <span className="text-accent-light font-medium">3 full-stack</span> projects shipped.
            </p>

            <div className="flex flex-wrap gap-3 mb-12">
              <a href="#projects" className="group flex items-center gap-2 px-6 py-3 rounded-full bg-accent hover:bg-indigo-500 text-white text-sm font-medium transition-all duration-200 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 hover:-translate-y-0.5">
                <Code2 size={14} className="group-hover:rotate-12 transition-transform" />
                View Projects
              </a>
              <a href="mailto:harmanjot0596.be23@chitkara.edu.in" className="flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:border-accent/50 text-text-secondary hover:text-text-primary text-sm font-medium transition-all duration-200 hover:-translate-y-0.5">
                <Mail size={14} />
                Contact Me
              </a>
              <a href="#skills" className="flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:border-accent/50 text-text-secondary hover:text-text-primary text-sm font-medium transition-all duration-200 hover:-translate-y-0.5">
                My Stack &#8595;
              </a>
            </div>

            <div className="flex items-center gap-5">
              <a href="https://github.com/HarmanSandhu-glitch" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted hover:text-text-primary transition-colors text-xs font-mono group">
                <div className="w-7 h-7 rounded-lg border border-border flex items-center justify-center group-hover:border-accent/50 group-hover:bg-accent/10 transition-all">
                  <Github size={13} />
                </div>
                <span className="hidden sm:inline">HarmanSandhu-glitch</span>
              </a>
              <div className="w-px h-4 bg-border" />
              <a href="https://linkedin.com/in/harmanjotsinghsandhu" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted hover:text-text-primary transition-colors text-xs font-mono group">
                <div className="w-7 h-7 rounded-lg border border-border flex items-center justify-center group-hover:border-accent/50 group-hover:bg-accent/10 transition-all">
                  <Linkedin size={13} />
                </div>
                <span className="hidden sm:inline">harmanjotsinghsandhu</span>
              </a>
            </div>
          </div>

          <div className="hidden lg:block float-card relative">
            <div className="glass rounded-2xl overflow-hidden border border-indigo-500/15 shadow-2xl shadow-indigo-500/10">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border/60 bg-[#0d0d15]">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-1.5 mx-auto text-xs font-mono text-muted">
                  <Terminal size={11} />
                  harmanjot.ts
                </div>
              </div>
              <div className="px-5 py-5 font-mono text-sm leading-7">
                {codeLines.map((line, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="text-muted/40 select-none w-4 text-right flex-shrink-0 text-xs pt-0.5">{i + 1}</span>
                    <span>
                      {'  '.repeat(line.indent)}
                      {line.tokens.map((tok, j) => (
                        <span key={j} className={tok.c}>{tok.t}</span>
                      ))}
                    </span>
                  </div>
                ))}
                <div className="flex gap-4 mt-1">
                  <span className="text-muted/40 select-none w-4 text-right flex-shrink-0 text-xs pt-0.5">{codeLines.length + 1}</span>
                  <span className="typing-cursor" />
                </div>
              </div>
              <div className="flex items-center justify-between px-4 py-2 bg-indigo-600/10 border-t border-border/40 text-xs font-mono text-muted">
                <span className="text-indigo-400">TypeScript</span>
                <span>Ln {codeLines.length + 1}, Col 1</span>
                <span className="text-emerald-400">&#10003; compiled</span>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 glass px-3 py-2 rounded-xl border border-emerald-500/20 text-xs font-mono text-emerald-400 bg-emerald-500/5">
              &#10003; 3 projects shipped
            </div>
            <div className="absolute -bottom-4 -left-4 glass px-3 py-2 rounded-xl border border-amber-500/20 text-xs font-mono text-amber-400 bg-amber-500/5">
              &#9889; 450+ LeetCode
            </div>
          </div>
        </div>
      </div>

      <a href="#about" className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted hover:text-text-secondary transition-colors">
        <span className="text-[10px] font-mono tracking-[0.3em] uppercase">scroll</span>
        <ArrowDown size={13} className="animate-bounce" />
      </a>
    </section>
  )
}
