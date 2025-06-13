import Header from "./Components/Header"
import Footer from "./Components/Footer"
import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import About from './Pages/About'
import Contact from './Pages/Contact'
import Portfolio from './Pages/Portfolio'
import Services from './Pages/Services'
import ServicesSection from "./Components/ServicesSection"
import ClientsSlider from "./Components/ClientsSlider"
import WhyChooseUs from "./Components/WhyChooseUs"
import RecentProjects from "./Components/RecentProject"
import ProjectDetail from "./Components/ProjectDetails"
import ProjectPage from "./Pages/ProjectPage"



const App = () => {
  return (
    <>
    <Header></Header>
       
{/* <ServicesSection></ServicesSection> */}
{/* <ClientsSlider></ClientsSlider> */}
{/* <WhyChooseUs></WhyChooseUs> */}
{/* <RecentProjects></RecentProjects> */}

      <Routes>

        <Route path="/" element={<Home></Home>}/>
        <Route path="/about" element={<About></About>}/>
        <Route path="/portfolio" element={<Portfolio></Portfolio>}/>
          
         {/* nested portfolio routes will be place here */}
        <Route path="/services" element={<Services></Services>}/>
         <Route path="/details" element={<ProjectDetail></ProjectDetail>} />
        <Route path="/contact" element={<Contact></Contact>}/>

      </Routes>
    
       <Footer></Footer>
    </>
  )
}

export default App
