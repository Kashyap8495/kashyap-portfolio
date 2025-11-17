import Stats from './components/Stats'
import Services from './components/Services'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Recommendations from './components/Recommendations'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Hero from './components/Hero'
import TechStack from './components/TechStack'
import Testimonials from './components/Testimonials'
import Blog from './components/Blog'

export default function Home() {
  return (
    <main>
      <Hero />
      <div className='max-w-6xl mx-auto px-6'>
        <Stats />
        <Services />
        <Projects />
        <Experience />
        <Skills />
        <TechStack />
        <Testimonials />
        {/* <Blog /> */}
        <Contact />
      </div>
      <Footer />
    </main>
  )
}
