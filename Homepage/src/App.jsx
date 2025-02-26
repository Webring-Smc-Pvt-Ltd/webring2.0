import { useState } from 'react'
import './App.css'
import { Checkbox} from "./components/ui/checkbox"
import Header from "./components/ui/Header/Header"
import Footer from './components/ui/Footer/Footer'
import HeroBanner from './components/ui/HeroBanner/HeroBanner'
import Number from './components/ui/Number/Number'
import LinkSection from './components/ui/LinkSection/LinkSection'
import Services from './components/ui/ServicesSection/Services'
import CustomIT from './components/ui/CustomITSection/CustomIT'
import Model from './components/ui/ModelSection/Model'
import Skills from './components/ui/Skills/Skills'
import PeopleSlider from './components/ui/PeopleSlider/PeopleSlider'
import ProjectsShowcase from './components/ui/ProjectsShowcase/ProjectsShowcase'
import TeamShowcase from './components/ui/TeamShowcase/TeamShowcase'
import TestimonialSection from './components/ui/TestimonialSection/TestimonialSection'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header /> 
    <HeroBanner/>
    <Number/>
    <LinkSection/>
    <Services/>
    <CustomIT/>
    <Model/>
    <Skills/>
    <PeopleSlider/>
    <ProjectsShowcase/>
    <TeamShowcase/>
    <TestimonialSection/>
     <Footer/> 
    
    </>
  )
}

export default App
