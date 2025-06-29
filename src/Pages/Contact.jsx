
import { useState, useEffect } from "react";
import ContactForm from "../Components/ContactForm";

const Contact = () => {

  const [animateLines, setAnimateLines] = useState(false);

  // Initial animation trigger
  useEffect(() => {
    setTimeout(() => setAnimateLines(true), 100); // small delay for transition
  }, []);


  
  return (

    <div className="h-full w-full bg-[#010616]">

      <div className="h-52 bg-gradient-to-r from-[#03051E] via-[#0e1f4b] to-[#1D53B7]">
        <h1 className=" text-4xl sm:text-2xl md:text-5xl lg:text-4xl xl:text-5xl 
                     px-4 sm:px-6 md:px-8 lg:px-12 xl:px-36
                    py-44 sm:py-10 md:py-40 lg:py-16 xl:py-28
                     mb-4 sm:mb-6 md:mb-8
                     font-normal text-white 
                     bg-gradient-to-r from-gray-500 via-neutral-300 to-slate-200 
                     bg-clip-text text-transparent
                     flex items-center">
          <span
            className={`block mb-1 transform transition-all duration-700 ease-out ${animateLines ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
          >
            Contact Us
          </span>

        </h1>
      </div>
        
       <div>
        <ContactForm></ContactForm>
       </div>
    </div>
  )
}

export default Contact
