import Navbar from './components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Kashyap Patel — Portfolio',
  description: 'Fullstack Developer — React, Next.js, Node.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${inter.className} bg-deep text-gray-100 scroll-smooth overflow-x-hidden`}
      >
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}
