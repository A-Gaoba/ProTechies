import './index.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import AboutUs from './Components/AboutUs'
import OurServices from './Components/OurServices'
import OurSectors from './Components/OurSectors'
import OurProcess from './Components/OurProcess'
import OurProjects from './Components/OurProjects'
import OurTechnologies from './Components/OurTechnologies'
import ContactUs from './Components/ContactUs'
import Footer from './Components/Footer'


function App() {
  return (
    <div className='font-inria-serif max-w-[2000px] m-auto p-4'>
      <Navbar />
      <Hero />
      <AboutUs />
      <OurServices />
      <OurSectors />
      <OurProcess />
      <OurProjects />
      <OurTechnologies />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default App
