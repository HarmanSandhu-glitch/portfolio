'use client'

import { useReveal } from '@/hooks/useReveal'
import { Mail, Github, Linkedin, Phone, Send, ArrowUpRight } from 'lucide-react'

const contactLinks = [
  { label: 'Email', value: 'harmanjot0596.be23@chitkara.edu.in', href: 'mailto:harmanjot0596.be23@chitkara.edu.in', icon: Mail, color: 'indigo' },
  { label: 'GitHub', value: 'HarmanSandhu-glitch', href: 'https://github.com/HarmanSandhu-glitch', icon: Github, color: 'violet' },
  { label: 'LinkedIn', value: 'harmanjotsinghsandhu', href: 'https://linkedin.com/in/harmanjotsinghsandhu', icon: Linkedin, color: 'blue' },
  { label: 'Phone', value: '+91 88476 02948', href: 'tel:+918847602948', icon: Phone, color: 'emerald' },
]

const iconColor: Record<string, string> = {
  indigo:  'bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500/20',
  violet:  'bg-violet-500/10 text-violet-400 group-hover:bg-violet-500/20',
  blue:    'bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20',
  emerald: 'bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500/20',
}

export default function Contact() {
  const { ref, visible } = useReveal()

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
          <p className="eyebrow">05 / Contact</p>
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6 leading-tight">
                Let&apos;s build{' '}
                <span className="gradient-text">something great</span>{' '}
                together.
              </h2>
              <p className="text-text-secondary text-sm leading-relaxed mb-10">
                Currently open to internships, part-time roles, and freelance projects. Have something interesting? My inbox is always open.
              </p>
              <div className="space-y-3">
                {contactLinks.map((link) => {
                  const Icon = link.icon
                  return (
                    <a key={link.label} href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-4 group p-3 rounded-xl hover:bg-[#0d0d15] transition-all -mx-3">
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${iconColor[link.color]}`}>
                        <Icon size={15} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] font-mono text-muted uppercase tracking-widest">{link.label}</p>
                        <p className="text-sm text-text-secondary group-hover:text-text-primary transition-colors truncate">{link.value}</p>
                      </div>
                      <ArrowUpRight size={13} className="ml-auto text-muted group-hover:text-text-secondary flex-shrink-0 transition-colors" />
                    </a>
                  )
                })}
              </div>
            </div>

            <div className="glass rounded-2xl p-8 card-glow">
              <h3 className="text-sm font-semibold text-text-primary mb-2">Send a message</h3>
              <p className="text-xs text-muted mb-7">I usually respond within 24 hours.</p>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono text-muted uppercase tracking-wider mb-2">Name</label>
                    <input type="text" placeholder="John Doe" className="w-full px-4 py-3 rounded-xl bg-[#0a0a0f] border border-border focus:border-accent/40 focus:ring-1 focus:ring-accent/20 outline-none text-sm text-text-primary placeholder:text-muted/50 transition-all" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono text-muted uppercase tracking-wider mb-2">Email</label>
                    <input type="email" placeholder="john@example.com" className="w-full px-4 py-3 rounded-xl bg-[#0a0a0f] border border-border focus:border-accent/40 focus:ring-1 focus:ring-accent/20 outline-none text-sm text-text-primary placeholder:text-muted/50 transition-all" />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-mono text-muted uppercase tracking-wider mb-2">Subject</label>
                  <input type="text" placeholder="Project inquiry / Internship / Hello" className="w-full px-4 py-3 rounded-xl bg-[#0a0a0f] border border-border focus:border-accent/40 focus:ring-1 focus:ring-accent/20 outline-none text-sm text-text-primary placeholder:text-muted/50 transition-all" />
                </div>
                <div>
                  <label className="block text-[10px] font-mono text-muted uppercase tracking-wider mb-2">Message</label>
                  <textarea rows={4} placeholder="Tell me about your project or opportunity..." className="w-full px-4 py-3 rounded-xl bg-[#0a0a0f] border border-border focus:border-accent/40 focus:ring-1 focus:ring-accent/20 outline-none text-sm text-text-primary placeholder:text-muted/50 transition-all resize-none" />
                </div>
                <a href="mailto:harmanjot0596.be23@chitkara.edu.in"
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-accent hover:bg-indigo-500 text-white text-sm font-medium transition-all duration-200 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 hover:-translate-y-0.5">
                  <Send size={13} />
                  Send Message
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
