

export const caseStudies = [
  {
    id: "source-ag-mobile-app",
    title: "Empowering Access to Fresh Produce: Building a Mobile App for Source.ag",
    description:
      "Source.ag is an Amsterdam-based AgTech startup revolutionizing access to fresh produce using technology. We developed a comprehensive mobile application for growers through sourcing.",
    category: "PRODUCTION",
    categoryColor: "bg-green-100 text-green-800",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "City street scene",
    position: "left",
    fullDescription:
      "Source.ag approached us to develop a comprehensive mobile application that would revolutionize how growers access fresh produce markets. The challenge was to create an intuitive platform that connects farmers directly with buyers, eliminating intermediaries and ensuring fair pricing.",
    client: "Source.ag",
 
    solutions: [
      "Built a scalable mobile-first architecture",
      "Implemented real-time WebSocket connections",
      "Created an intuitive farmer-friendly interface",
      "Developed robust API integrations",
    ],
    results: [
      "300% increase in farmer engagement",
      "50% reduction in produce waste",
      "Expanded to 5 European markets",
      "10,000+ active users within first year",
    ],
  },
  {
    id: "pangea-ai-marketplace",
    title: "Streamline remote hiring with Pangea.ai's marketplace",
    description:
      "Struggling to find the perfect software development company? Browse through the most. The platform connects businesses with top-tier development firms, ensuring a perfect match for your project.",
    category: "MARKETPLACE",
    categoryColor: "bg-blue-600 text-white",
    backgroundColor: "bg-slate-800",
    textColor: "text-white",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Abstract tech pattern",
    position: "right",
    fullDescription:
      "Pangea.ai needed a sophisticated marketplace platform that could intelligently match businesses with the right development teams. The platform required advanced filtering, AI-powered recommendations, and seamless project management tools.",
   
    solutions: [
      "Implemented AI-powered matching system",
      "Built secure escrow payment system",
      "Created real-time chat and video calling",
      "Designed microservices architecture",
    ],
    results: [
      "500+ successful project matches",
      "95% client satisfaction rate",
      "$2M+ in transactions processed",
      "Expanded to 15 countries",
    ],
  },
  {
    id: "security-imperative",
    title: "The Imperative of Security",
    description:
      "A comprehensive approach to building security-first applications with modern development practices and industry-leading standards.",
    category: "PRODUCTION",
    categoryColor: "bg-green-100 text-green-800",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Professional woman",
    position: "left",
    fullDescription:
      "This project focused on developing a security-first approach to application development, implementing industry-leading practices and standards to ensure maximum protection against modern cyber threats.",
   
    solutions: [
      "Designed comprehensive security framework",
      "Implemented multi-factor authentication",
      "Created security-aware user interfaces",
      "Built secure API gateway",
    ],
    results: [
      "99.9% security compliance achieved",
      "Zero security incidents post-launch",
      "40% improvement in user trust metrics",
      "Industry recognition for security practices",
    ],
  },
  {
    id: "java-sdk-security",
    title: "Java SDK for Security-Sensitive Products",
    description:
      "The project focused on the development of a specialized and security-focused Java Software Development Kit (SDK). This SDK was designed to be integrated into the various functionalities.",
    category: "PRODUCTION",
    categoryColor: "bg-orange-600 text-white",
    backgroundColor: "bg-orange-400",
    textColor: "text-white",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Java development illustration",
    position: "right",
    fullDescription:
      "We developed a comprehensive Java SDK specifically designed for security-sensitive applications. The SDK provides developers with robust tools and libraries to build secure applications while maintaining ease of use and performance.",
    
    solutions: [
      "Built modular SDK architecture",
      "Implemented comprehensive testing suite",
      "Created detailed developer documentation",
      "Ensured backward compatibility",
    ],
    results: [
      "1000+ developers using the SDK",
      "50+ enterprise clients adopted",
      "99.99% uptime in production",
      "Open-source community contributions",
    ],
  },
];

export default function CaseStudies() {
  const leftColumnStudies = caseStudies.filter((study) => study.position === "left")
  const rightColumnStudies = caseStudies.filter((study) => study.position === "right")

  return (
    <div className="min-h-screen bg-[#010616]">
      <div className="container mx-auto px-4 py-12 max-w-6xl mt-20">
      
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* LEFT COLUMN */}
          <div className="space-y-8">
            {leftColumnStudies.map((study) => (
              <div
                key={study.id}
                className="overflow-hidden border-0 shadow-lg   cursor-pointer group h-fit bg-white rounded-lg"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={study.image || "/placeholder.svg"}
                    alt={study.imageAlt}
                    className="object-cover w-full h-full "
                  />
                </div>
                <div className="p-6 h-64 flex flex-col justify-between">
                  <div>
                    <span
                      className={`inline-block font-[HeadingFont] font-semibold px-3 py-1 rounded-full mb-2 transition-colors duration-200 ${study.categoryColor}`}
                    >
                      {study.category}
                    </span>
                    <h3 className=" py-2 font-[HeadingFont] font-semibold text-fs-20 text-gray-900 mb-2 transition-colors duration-200 group-hover:text-green-600 line-clamp-2">
                      {study.title}
                    </h3>
                    <p className="text-gray-800 font-[textFont] leading-relaxed mb-4 line-clamp-3">
                      {study.description}
                    </p>
                  </div>
                  <a
                    href={`/case-studies/${study.id}`}
                    className="flex items-center text-green-600 text-sm font-medium transition-transform duration-200 group-hover:translate-x-2 mt-auto"
                  >
                    READ MORE
                    <i className="fas fa-arrow-right ml-2 text-xs group-hover:translate-x-1 transition-transform duration-200"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-8">
            {rightColumnStudies.map((study) => (
              <div
                key={study.id}
                className={`overflow-hidden border-0 shadow-lg  cursor-pointer group h-fit rounded-lg ${study.backgroundColor || ""} ${study.textColor || ""}`}
              >
                <div className="p-6 h-64 flex flex-col justify-between">
                  <div>
                    <span
                      className={`inline-block font-[HeadingFont] font-semibold  px-3 py-1 rounded-full mb-4 transition-colors duration-200 ${study.categoryColor}`}
                    >
                      {study.category}
                    </span>
                    <h3
                      className={` py-2 font-[HeadingFont] font-semibold text-fs-20 mb-4 transition-colors duration-200 line-clamp-2 ${
                        study.textColor === "text-white"
                          ? "group-hover:text-blue-300"
                          : "group-hover:text-green-600"
                      }`}
                    >
                      {study.title}
                    </h3>
                    <p
                      className={`text-sm font-[textFont] leading-relaxed mb-4 transition-colors duration-200 line-clamp-3 ${
                        study.textColor === "text-white"
                          ? "text-gray-300 group-hover:text-gray-200"
                          : "text-gray-600"
                      }`}
                    >
                      {study.description}
                    </p>
                  </div>
                  <a
                    href={`/case-studies/${study.id}`}
                    className={`flex items-center text-sm font-medium mt-auto ${
                      study.textColor === "text-white"
                        ? "text-blue-400 group-hover:text-blue-300"
                        : "text-green-600"
                    }`}
                  >
                    READ MORE
                    <i className="fas fa-arrow-right ml-2 text-xs group-hover:translate-x-1 transition-transform duration-200"></i>
                  </a>
                </div>
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={study.image || "/placeholder.svg"}
                    alt={study.imageAlt}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
