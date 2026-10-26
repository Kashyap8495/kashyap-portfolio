import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Services from './components/Services'
import Skills from './components/Skills'
import StackFlow from './components/StackFlow'
import TechStack from './components/TechStack'

export default function Home() {
  return (
    <main className='portfolio-main relative min-h-screen bg-canvas text-ink selection:bg-[#065F46]/15 selection:text-[#065F46]'>
      <div className='mx-auto max-w-7xl px-5 sm:px-6 lg:px-8'>
        <Hero />
        <TechStack />
        <About />
        <Services />
        <Projects />
        <StackFlow />
        <Skills />
        <Resume />
        <Contact />
      </div>
      <Footer />
    </main>
  )
}
