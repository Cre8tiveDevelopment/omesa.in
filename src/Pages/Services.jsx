import ClientSlider from '../Components/ClientsSlider';
import ServicesSection from '../Components/ServicesSection'
import { useState,useEffect } from 'react';

const Services = () => {

  const [animateLines, setAnimateLines] = useState(false);
  
    // Initial animation trigger
    useEffect(() => {
      setTimeout(() => setAnimateLines(true), 100); // small delay for transition
    }, []);
  return (
    <div className="Services-main h-full w-full bg-gradient-to-r from-[#03051E] via-[#0e1f4b] to-[#1D53B7]">

        <div className="h-48">
        <h1 className=" text-2xl mb-8 lg:p-14 lg:text-3xl xl:text-5xl font-normal text-white bg-gradient-to-r from-gray-500 via-neutral-300 to-slate-200 bg-clip-text text-transparent">
          <span
            className={`block mb-1 transform transition-all duration-700 ease-out ${animateLines ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
          >
           Services
          </span>

        </h1>
      </div>
        
        <div>
         <ServicesSection></ServicesSection>
        </div>
        <div>
          <ClientSlider></ClientSlider>
        </div>
    </div>
  )
}

export default Services
