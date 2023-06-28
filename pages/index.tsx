import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Treatments from '../components/Treatments'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'
import About from '../components/About'
import Contact from '../components/Contact'
import Location from '../components/Location'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
    <Navbar />
    <Header/>
    <Treatments />
    <Testimonials />
    <About />
    <Location />
    <Contact />
    <Footer />
    </div>
  )
}


  
