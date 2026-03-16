'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import clsx from 'clsx'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [progress, setProgress] = useState(0)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setScrolled(scrollTop > 40)
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.replace('#', ''))
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        }
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled ? 'bg-bg/85 backdrop-blur-xl border-b border-border/60 py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="scroll-progress" style={{ width: `${progress}%` }} />
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2 group">
          <div className="w-7 h-7 rounded-lg bg-accent/20 border border-accent/30 flex items-center justify-center text-accent-light text-xs font-bold group-hover:bg-accent/30 transition-colors">H</div>
          <span className="font-mono text-sm font-medium text-text-secondary group-hover:text-text-primary transition-colors tracking-wide">harmanjot<span className="text-accent">.</span>dev</span>
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={clsx('nav-link text-sm transition-colors duration-200', activeSection === link.href.replace('#', '') ? 'text-accent-light nav-active-glow' : 'text-text-secondary hover:text-text-primary')}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="mailto:harmanjot0596.be23@chitkara.edu.in" className="hidden md:flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-full border border-accent/30 text-accent-light hover:bg-accent/10 hover:border-accent/60 transition-all duration-200">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          Hire Me
        </a>
        <button className="md:hidden w-9 h-9 rounded-lg border border-border flex items-center justify-center text-text-secondary hover:text-text-primary hover:border-accent/50 transition-all" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={16} /> : <Menu size={16} />}
        </button>
      </nav>
      <div className={clsx('md:hidden overflow-hidden transition-all duration-300', open ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0')}>
        <ul className="flex flex-col gap-1 px-6 pb-6 bg-bg/98 backdrop-blur-xl border-b border-border/60">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setOpen(false)} className={clsx('block py-3 text-sm border-b border-border/40 last:border-0 transition-colors', activeSection === link.href.replace('#', '') ? 'text-accent-light' : 'text-text-secondary hover:text-text-primary')}>
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-3">
            <a href="mailto:harmanjot0596.be23@chitkara.edu.in" className="block text-center py-2 text-xs font-medium rounded-full border border-accent/40 text-accent-light hover:bg-accent/10">Hire Me</a>
          </li>
        </ul>
      </div>
    </header>
  )
}
