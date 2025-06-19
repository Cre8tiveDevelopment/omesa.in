
import { useState, useEffect } from "react";



const project = {
  clientName: "Tony Stark",
  clientCompany: "Stark Industries",
  projectDate: "10 January, 2025",
  projectType: "Website Design",
  overviewTitle: "Develop engaging and powerful design experiences",
  overviewDescription:
    "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.",
    
  overviewImages:"https://kit.wof-pack.com/sirion/wp-content/uploads/sites/6/2025/02/developers-searching-for-bugs-1024x682.jpg",
      alt: "Team collaborating on design project",
  
    
  
  resultTitle: "Deliver the high quality result",
  resultDescription:
    "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.",
  video: "https://d15n4qct5igon0.cloudfront.net/Anteprima_Showreel_mobile_cc439adc9d.mp4",
      
};

export default function ProjectDetail() {



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
                     py-44 sm:py-10 md:py-40 lg:py-16 xl:py-48
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

        <div className="h-full bg-[#010616] text-white p-4 md:p-8">
          {/* Info Section */}
          <div className="max-w-6xl mx-auto border border-gray-800 rounded-lg p-6 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="text-lg font-medium mb-2">Client Name</h3>
                <p className="text-gray-400">{project.clientCompany}</p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Project Date</h3>
                <p className="text-gray-400">{project.projectDate}</p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Project Type</h3>
                <p className="text-gray-400">{project.projectType}</p>
              </div>
            </div>
          </div>

          {/* Overview Section */}
          <div className="max-w-6xl mx-auto mb-24">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/4">
                <span className="inline-block py-2 px-4 rounded-full bg-gray-800 text-sm font-medium">
                  PROJECT OVERVIEW
                </span>
              </div>
              <div className="md:w-3/4">
                <h2 className="text-3xl md:text-4xl font-normal mb-6">
                  {project.overviewTitle}
                </h2>
                <p className="text-gray-400 mb-8">{project.overviewDescription}</p>

                <div className="grid grid-cols-1 md:grid-cols-1 ">
                 
                    <div  className="rounded-lg overflow-hidden">
                      <img
                        src={project.overviewImages}
                        
                        className="w-full h-auto object-cover"
                      />
                    </div>
               
                </div>
              </div>
            </div>
          </div>

          {/* Final Result Section */}
          <div className="max-w-6xl mx-auto mb-24">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/4">
                <span className="inline-block py-2 px-4 rounded-full bg-gray-800 text-sm font-medium">
                  FINAL RESULT
                </span>
              </div>
              <div className="md:w-3/4">
                <h2 className="text-3xl md:text-4xl font-normal mb-6">
                  {project.resultTitle}
                </h2>
                <p className="text-gray-400 mb-8">{project.resultDescription}</p>

                <div className="relative">
                  <div className="">
                    <div className="flex gap-4">
                     
                        <div  className="rounded-lg overflow-hidden">
                          <video
                            src={project.video}
                            autoPlay
                            loop
                            muted
                            playsInline
                            controls={false}
                            className="w-[800px] h-80 object-cover rounded-lg"
                          />
                        </div>
                    
                    </div>
                  </div>



                </div>
              </div>
            </div>
          </div>

        </div>

      </div>





    </>

  );
}
