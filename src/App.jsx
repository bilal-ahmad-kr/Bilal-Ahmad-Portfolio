import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import Footer from './components/Footer'
import {Toaster} from 'react-hot-toast'
import ScrollToTop from "./components/ScrollToTop";

function App() {

  return (
    <>
     <Toaster position="top-right" />
     <Navbar />
     <Hero />
     <About />
     <Skills />
     <Projects />
     <Experience />
     <Certificates />
     <Contact />
     <Footer />
     <ScrollToTop />
    </>
  )
}

export default App
