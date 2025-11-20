import Stats from './components/Stats'
import Services from './components/Services'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import TechStack from './components/TechStack'
import Resume from './components/Resume'

export default function Home() {
  return (
    <main>
      <Hero />
      <div className='max-w-7xl mx-auto px-6'>
        <Services />
        <Projects />
        <Resume />
        <Skills />
        <TechStack />
        <Contact />
      </div>
      <Footer />
    </main>
  )
}
