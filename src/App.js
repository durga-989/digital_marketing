import About from "./About"
import Contact from "./Contact"
import Footer from "./Footer"
import HeroSection from "./HeroSection"
import Navbar from "./Navbar"
import Services from "./Services"

const App = () => {
  return (
    <div>
        <Navbar />
        <HeroSection />
        <Services />
        <About />
        <Contact />
        <Footer />
    </div>
  )
}

export default App
