import { Footer } from './Components/layout/Footer'
import { Header } from './Components/layout/Header'
import './App.css'
import { Hero } from './Components/sections/Hero'
import { Works } from './Components/sections/Works'
import { Trends } from './Components/sections/Trends'
import { TimeSave } from './Components/sections/TimeSave'
import { Pricing } from './Components/sections/Pricing'

function App() {


  return (
    <>
      <Header />
      <Hero />
      <Works />
      <Trends />
      <TimeSave />
      <Pricing />
      
      <Footer />
    </>
  )
}

export default App
