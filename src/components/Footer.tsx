import { Github, Linkedin, Mail, Heart } from 'lucide-react'

const socials = [
  { icon: Github, href: 'https://github.com/HarmanSandhu-glitch', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/harmanjotsinghsandhu', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:harmanjot0596.be23@chitkara.edu.in', label: 'Email' },
]

const nav = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-border/40 pt-14 pb-10 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(99,102,241,0.05),transparent)] pointer-events-none" />
      <div className="relative max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div>
            <a href="#hero" className="flex items-center gap-2 group mb-3">
              <div className="w-8 h-8 rounded-lg bg-accent/20 border border-accent/30 flex items-center justify-center text-accent-light text-sm font-bold group-hover:bg-accent/30 transition-colors">H</div>
              <span className="font-mono text-sm font-medium text-text-secondary group-hover:text-text-primary transition-colors tracking-wide">harmanjot<span className="text-accent">.</span>dev</span>
            </a>
            <p className="text-xs text-muted leading-relaxed max-w-xs">Full-Stack Developer & CS student at Chitkara University. Building scalable web applications with modern technologies.</p>
          </div>
          <div>
            <p className="text-[10px] font-mono text-muted uppercase tracking-widest mb-4">Navigation</p>
            <ul className="space-y-2">
              {nav.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-xs text-text-secondary hover:text-accent-light transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[10px] font-mono text-muted uppercase tracking-widest mb-4">Connect</p>
            <div className="flex gap-3 mb-5">
              {socials.map((s) => {
                const Icon = s.icon
                return (
                  <a key={s.label} href={s.href} target={s.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" aria-label={s.label}
                    className="w-9 h-9 rounded-xl border border-border flex items-center justify-center text-muted hover:text-text-primary hover:border-accent/50 hover:bg-accent/10 transition-all">
                    <Icon size={14} />
                  </a>
                )
              })}
            </div>
            <a href="mailto:harmanjot0596.be23@chitkara.edu.in"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/25 text-accent-light text-xs font-medium hover:bg-accent/20 transition-all">
              <Mail size={12} />Hire Me
            </a>
          </div>
        </div>
        <div className="border-t border-border/40 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-muted">
          <span>© {new Date().getFullYear()} Harmanjot Singh. All rights reserved.</span>
          <span className="flex items-center gap-1.5">Built with <Heart size={10} className="text-red-400 fill-red-400" /> using Next.js &amp; Tailwind CSS</span>
        </div>
      </div>
    </footer>
  )
}
