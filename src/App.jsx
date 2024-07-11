import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import './App.scss'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <div className="first-section">
        <Header/>
        <Hero />
        <About />
      </div>
      <Projects />
      <Footer />
    </>
  )
}

export default App
