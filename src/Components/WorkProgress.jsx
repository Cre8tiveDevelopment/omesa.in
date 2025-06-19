import React from "react";

export default function WorkProgress() {
  const processSteps = [
    {
      id: "01",
      title: "Project Brief",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
      
    },
    {
      id: "02",
      title: "Research",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
     
    },
    {
      id: "03",
      title: "Development",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
      
    },
    {
      id: "04",
      title: "Result Delivery",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
     
    },
  ];

  return (
    <section className="xl:mx-40 my-10 relative min-h-screen bg-gradient-to-r from-[#03051E] via-[#0e1f4b] to-[#1D53B7] rounded-md border border-gray-500 overflow-hidden">
    
      <div className="relative z-10 container mx-auto px-4 py-16 lg:py-24">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 mb-6 text-sm font-normal text-white border border-gray-500 rounded-full">
            WORK PROCESS
          </div>
          <h2 className="text-4xl lg:text-4xl xl:text-5xl font-normal text-white mb-6 leading-tight">
            Ultimate solution for
            <br />
            everything your{" "}
            <span className="text-white">
              brand needs
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus,
            <br />
            luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>

        {/* Process Cards */}
        <div className=" px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {processSteps.map((step) => (
            <div
              key={step.id}
              className="group relative p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-gray-500/20"
            >
             
              {/* Step ID */}
              <div className="mb-4">
                <span className="text-2xl font-semibold text-gray-400 group-hover:text-white transition-colors duration-300">
                  {step.id}/
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-normal text-white mb-4 transition-colors duration-300">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
