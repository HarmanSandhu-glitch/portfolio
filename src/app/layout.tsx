import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Harmanjot Singh — Full-Stack Developer',
  description:
    'Portfolio of Harmanjot Singh — Computer Science student and full-stack developer specialising in Next.js, React, Node.js, and AI-integrated web applications.',
  keywords: ['Harmanjot Singh', 'Full-Stack Developer', 'Next.js', 'React', 'Portfolio'],
  authors: [{ name: 'Harmanjot Singh' }],
  openGraph: {
    title: 'Harmanjot Singh — Full-Stack Developer',
    description: 'Building scalable web applications with modern technologies.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="noise bg-bg text-text-primary antialiased">{children}</body>
    </html>
  )
}
