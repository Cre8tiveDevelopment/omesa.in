// import { useEffect, useState } from "react";
import AboutSection from "../Components/AboutSection";
import AwardsSection from "../Components/Awards";
import ClientsSlider from "../Components/ClientsSlider";
import HomeBanner from "../Components/HomeBanner";
import RecentProjects from "../Components/RecentProject";
import ServicesSection from "../Components/ServicesSection";
import Testimonials from "../Components/Testimonials";
import WhatsAppChat from "../Components/WhatsapChat";
import WhyChooseUs from "../Components/WhyChooseUs";

import SmoothScroll from "../Hooks/SmoothScroll";

const Home = () => {


  return (
    <SmoothScroll>
      <div className="home relative w-full">
        {/* Sticky Banner */}
        <div className="sticky top-0 h-screen -z-10">
          <HomeBanner />

        </div>

        {/* All other sections scroll over the banner */}
       
        <AboutSection />
        <WhatsAppChat></WhatsAppChat>
        
        <div className="">
          <div className="flex justify-center items-center bg-[#010616]">
          <div className=" max-w-7xl videoContainer w-full sm:w-4/5 md:w-3/4 sm:h-72 md:h-80 lg:h-[600px] bg-[#010616] rounded-md overflow-hidden shadow-lg">
            <video
            src="/public/BannerVideo/BannerVideo.mp4"
              muted
              loop
              autoPlay
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        </div>
        

        <ClientsSlider />
        <RecentProjects />
        <Testimonials />
        <ServicesSection />
        <WhyChooseUs />
      
      </div>
    </SmoothScroll>
  );
};

export default Home;
