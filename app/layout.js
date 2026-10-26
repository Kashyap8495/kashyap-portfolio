import { IBM_Plex_Mono, Instrument_Sans } from 'next/font/google'
import Navbar from './components/Navbar'
import './globals.css'

const sans = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata = {
  title: 'Kashyap Patel — Full-Stack Developer',
  description:
    'Kashyap Patel is a Full-Stack Developer building production-ready applications with React.js, Next.js, Node.js, TypeScript, and modern databases.',
  keywords: [
    'Full-Stack Developer',
    'React.js Developer',
    'Next.js Developer',
    'Node.js Developer',
    'TypeScript Developer',
    'Software Engineer',
  ],
  openGraph: {
    title: 'Kashyap Patel — Full-Stack Developer',
    description:
      'Production-ready web applications from frontend to backend, database, integrations, and deployment.',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Kashyap Patel — Full-Stack Developer',
    description: 'Production-ready web applications with React.js, Next.js, and Node.js.',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={`${sans.variable} ${mono.variable}`}>
      <body className='page-grid page-noise bg-canvas font-sans text-ink antialiased'>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
