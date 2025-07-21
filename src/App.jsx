import Header from "./Components/Header"
import Footer from "./Components/Footer"
import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import About from './Pages/About'
import Contact from './Pages/Contact'
import Portfolio from './Pages/Portfolio'
import Services from './Pages/Services'
import ProjectDetail from "./Components/ProjectDetails"
import SmoothScroll from "./Hooks/SmoothScroll"
import ScrollToTop from "./Hooks/ScrollTop"
import ServiceDetailPage from "./Components/ServiceDetailPage"
import WhatsAppChat from "./Components/WhatsapChat"

import CaseStudies from "./Pages/CaseStudies"




const App = () => {
  return (
    <>
      <ScrollToTop></ScrollToTop>
      <Header></Header>

      <WhatsAppChat></WhatsAppChat>

      <Routes>
        <Route path="/" element={<SmoothScroll>
          <Home />
        </SmoothScroll>} />

        <Route path="/about" element={<About></About>} />
        <Route path="/portfolio" element={<Portfolio></Portfolio>} />

        {/* nested portfolio routes will be place here */}
        <Route path="/portfolio/:id" element={<ProjectDetail />} />
        <Route path="/services" element={<Services></Services>} />

        <Route path="/contact" element={<Contact></Contact>} />
        <Route path="/service/details/:id" element={<ServiceDetailPage />} />

        <Route path="/caseStudy" element={<CaseStudies />} />

      </Routes>

      <Footer></Footer>
    </>
  )
}

export default App
