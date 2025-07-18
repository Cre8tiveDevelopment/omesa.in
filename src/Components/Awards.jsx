import { useState } from "react";

const awards = [
  {
    year: "2025",
    organization: "Awwwards",
    title: "Best Website Design Portfolio",
    images: "https://images.unsplash.com/photo-1665686304129-a6e2d16923e8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    year: "2024",
    organization: "A Design",
    title: "UI/UX Website Best Choice",
    images:"https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      
  },
  {
    year: "2024",
    organization: "Web Awards",
    title: "Usability Website Awards",
    images: "https://images.unsplash.com/photo-1543269865-0a740d43b90c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
  },
  {
    year: "2023",
    organization: "Design Con",
    title: "Best Website Design Portfolio",
    images: "https://images.unsplash.com/photo-1640161339492-c7af1c375e10?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
];

const AwardsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  const [isTransitioning, setIsTransitioning] = useState({});

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);


    let currentImageIndex = 0;
    const interval = setInterval(() => {
      setIsTransitioning((prev) => ({ ...prev, [index]: true }));

      setTimeout(() => {
        currentImageIndex = (currentImageIndex + 1) % awards[index].images.length;
        

        setTimeout(() => {
          setIsTransitioning((prev) => ({ ...prev, [index]: false }));
        }, 150);
      }, 150);
    }, 1200);

    window[`interval_${index}`] = interval;
  };

  const handleMouseLeave = (index) => {
    setHoveredIndex(null);
    if (window[`interval_${index}`]) {
      clearInterval(window[`interval_${index}`]);
      delete window[`interval_${index}`];
    }
    
    setIsTransitioning((prev) => ({ ...prev, [index]: false }));
  };

  return (
    <section className="bg-[#010616] text-white py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 ">
          <div className="text-slate-300 inline-block border border-gray-700 rounded-full px-4 py-2 text-sm font-normal mb-6 transition-all duration-300">
            AWARDS
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-text-5xl font-normal  leading-tight bg-gradient-to-r from-gray-500 via-neutral-300 to-slate-200 bg-clip-text text-transparent py-4">
            Achievement through design
          </h2>
        </div>

        {/* Awards List */}
        <div className="space-y-0">
          {awards.map((award, index) => (
            <div
              key={index}
              className="group relative border-t border-gray-700 last:border-b transition-all duration-500 ease-out"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <div className="flex items-center justify-between py-8 md:py-12 cursor-pointer  hover:bg-slate-800/30 hover:px-4">
                {/* Year and Organization */}
                <div className="flex-shrink-0 w-48 ">
                  <span className="text-gray-400 text-lg group-hover:text-gray-300 transition-colors duration-300">
                    {award.year} / {award.organization}
                  </span>
                </div>

                {/* Award Title */}
                <div className="flex-1 px-8 ">
                  <h3 className="text-2xl md:text-3xl lg:text-3xl font-light text-gray-300 group-hover:text-white transition-all duration-500 ease-out group-hover:translate-x-2">
                    {award.title}
                  </h3>
                </div>

                {/* Font Awesome Icon */}
                <div className="flex-shrink-0 ">
                  <div className="w-12 h-12 border border-gray-600 rounded-full flex items-center justify-center group-hover:border-white group-hover:bg-white group-hover:text-slate-900 ">
                    <i className="fas fa-arrow-right -from-square text-lg"></i>
                  </div>
                </div>
              </div>

              {/* Image on Hover */}
              <div className="absolute top-1/2 right-32 transform -translate-y-1/2 pointer-events-none">
                <div
                  className={`w-36 h-28 transition-all duration-700 ease-out ${
                    hoveredIndex === index
                      ? "opacity-95 scale-100 translate-y-0"
                      : "opacity-0 scale-75 translate-y-4"
                  }`}
                >
                  <div className="relative w-full h-full">
                    <img
                      src={award.images}
                      alt={`${award.title} preview`}
                      className={`absolute inset-0 w-full h-full object-cover rounded-lg shadow-2xl transition-all duration-300 ease-out ${
                        isTransitioning[index]
                          ? "opacity-0 scale-95"
                          : "opacity-100 scale-100"
                      }`}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
