import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CoffeeMenu from './components/CoffeeMenu'
import About from './components/About'
import Plans from './components/Plans'
import Gallery from './components/Gallery'
import Events from './components/Events'
import Newsletter from './components/Newsletter'
import Location from './components/Location'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CoffeeMenu />
        <About />
        <Plans />
        <Gallery />
        <Events />
        <Newsletter />
        <Location />
      </main>
      <Footer />
    </>
  )
}
