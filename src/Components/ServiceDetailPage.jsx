
import { useState, useEffect } from "react";

const ServiceDetailPage = () => {

     const [animateLines, setAnimateLines] = useState(false);
  // Initial animation trigger
  useEffect(() => {
    setTimeout(() => setAnimateLines(true), 100); // small delay for transition
  }, []);
  return (
   <>
      <div className="h-full w-full bg-[#010616] ">
           
      <div className="h-72 bg-gradient-to-r from-[#03051E] via-[#0e1f4b] to-[#1D53B7]">

          <h1 className="text-4xl sm:text-2xl md:text-5xl lg:text-4xl xl:text-5xl 
                     px-4 sm:px-6 md:px-8 lg:px-12 xl:px-32
                     py-32 sm:py-10 md:py-40 lg:py-16 xl:py-48
                     mb-4 sm:mb-6 md:mb-8
                     font-normal text-white 
                     bg-gradient-to-r from-gray-500 via-neutral-300 to-slate-200 
                     bg-clip-text text-transparent
                     flex items-center">
            <span
              className={`block mb-1 transform transition-all duration-700 ease-out ${animateLines ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
            >
              Details Page
            </span>

          </h1>
        </div>

        <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Section */}
          <div className="lg:col-span-2 space-y-8">
            {/* Hero Image */}
            <div className="relative">
              <img
                src="https://kit.wof-pack.com/sirion/wp-content/uploads/sites/6/2025/02/developers-searching-for-bugs-1024x682.jpg"
                alt="Business meeting and collaboration"
                className="w-full h-[400px] object-cover rounded-lg"
              />
            </div>

            {/* Description */}
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.
              </p>
            </div>

            {/* Section Title */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Service Related Images</h2>
            </div>

            {/* Related Service Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <img
                  src="https://kit.wof-pack.com/sirion/wp-content/uploads/sites/6/2025/02/developers-searching-for-bugs-1024x682.jpg"
                  alt="Service related image 1"
                  className="w-full h-[250px] object-cover rounded-lg"
                />
              </div>
              <div className="relative">
                <img
                  src="https://kit.wof-pack.com/sirion/wp-content/uploads/sites/6/2025/02/developers-searching-for-bugs-1024x682.jpg"
                  alt="Service related image 2"
                  className="w-full h-[250px] object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="bg-slate-900 border border-slate-800 rounded-lg">
              <div className="p-6">
                <h3 className="text-xl font-normal text-white mb-4">Send Us An Inquiry</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      placeholder="Your Name"
                      className="bg-slate-800 border border-slate-700 text-white placeholder:text-gray-400 p-2 rounded"
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="bg-slate-800 border border-slate-700 text-white placeholder:text-gray-400 p-2 rounded"
                    />
                  </div>
                  <input
                    placeholder="Subject"
                    className="bg-slate-800 border border-slate-700 text-white placeholder:text-gray-400 p-2 rounded w-full"
                  />
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="bg-slate-800 border border-slate-700 text-white placeholder:text-gray-400 p-2 rounded w-full"
                  />
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-[#03051E] via-[#0e1f4b] to-[#1D53B7] text-gray-400 font-semibold px-4 py-2 rounded"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Featured News */}
            <div className="bg-slate-900 border border-slate-800 rounded-lg">
              <div className="p-6">
                <h3 className="text-xl font-normal text-gray-300 mb-6">Related Services</h3>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h4 className="text-gray-300 text-xl font-normal leading-tight">
                      How to Improve Your Website Leads & Traffic in 2025
                    </h4>
                   
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-gray-300 text-xl font-normal leading-tight">
                      Ultimate Guide to Showcasing Your Portfolio Online
                    </h4>
                    
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-gray-300 text-xl font-normal leading-tight">
                      Boost Your Agency's with a Professional Website
                    </h4>
                   
                  </div>
                </div>
              </div>
            </div>

           

            {/* Contact Info */}
            <div className="bg-gradient-to-r from-[#03051E] via-[#0e1f4b] to-[#1D53B7] rounded-lg">
              <div className="p-6">
                <h3 className="text-xl font-normal text-white mb-4">Have Any Question?</h3>
                <p className="text-gray-400 text-base mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-300">
                    <i className="fas fa-phone-alt w-4 h-4 mr-3 text-gray-300"></i>
                    <span className="text-lg">(+62) 81 322 1467</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <i className="fas fa-envelope w-4 h-4 mr-3 text-gray-300"></i>
                    <span className="text-lg">support@domain.com</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>    
      </div>
      
   </>
  )
}

export default ServiceDetailPage
