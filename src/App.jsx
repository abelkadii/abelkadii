import About from './About'
import './App.css'
import Contact from './Contact'
import Footer from './Footer'
import Home from './Home'
import Navbar from './Navbar'
import Projects from './Projects'

function App() {

  return (
      <div className="app">
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
  )
}

export default App
