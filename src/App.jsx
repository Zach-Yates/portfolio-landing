import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Stack from './Components/Stack/Stack'
import About from './Components/About/About'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import ApiShowcase from './Components/ApiShowcase/ApiShowcase'


function App() {

  return (
    <div className='app'>
    <Navbar/>
    <Hero/>
    <Stack/>
    <About/>
    <ApiShowcase/>
    <Projects/>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default App
