
import { useState,  } from "react";



const caseStudies = [
    // same data as provided earlier...
    {
        id: "1",
        title: "Cloud Speed Circuit",
        description:
            "Built with India's Only AI-Powered, IP-Backed Channel Transformation Accelerator In a market fatigued by conventional channel mar...",
        image: "https://www.pulpstrategy.com/wp-content/uploads/wp_elastic_grid/small/1749731430_cloud_speed_circuit.png",
        category: "technology",
        featured: true,
    },
    {
        id: "2",
        title: "The Heroine's Journey: Beyond by Zoya",
        description:
            "Zoya, from the House of TATA, redefined luxury jewellery marketing with the 'Beyond' collection, inspired by the soulful essence of the Indus River. Thr...",
        image: "https://www.pulpstrategy.com/wp-content/uploads/wp_elastic_grid/small/1749731430_cloud_speed_circuit.png",
        category: "digital-media",
        badge: "Best Microsite- Digies",
        featured: true,
    },
    {
        id: "3",
        title: "Cloud Champions 11",
        description:
            "India's Only Structured 60-90-180 Day Channel Growth Framework for SMB Cloud Acceleration Powered by Pulp Strategy To accelerate SMB cloud adop...",
        image: "/placeholder.svg?height=300&width=400",
        category: "technology",
        featured: true,
    },
    {
        id: "4",
        title: "Rare Stories: Dabur Meswak's Digital Tale",
        description:
            "Dabur Meswak's 'Rare Stories' campaign addressed the knowledge gap about the Miswak herb among urban youth by spotlighting its resilience through co...",
        image: "/placeholder.svg?height=300&width=400",
        category: "digital-media",
        featured: true,
    },
    {
        id: "5",
        title: "Digital Transformation Initiative",
        description:
            "A comprehensive digital transformation project that revolutionized business processes and enhanced customer experience through innovative technology solutions...",
        image: "/placeholder.svg?height=300&width=400",
        category: "technology",
        featured: true,
    },
    {
        id: "6",
        title: "Brand Awareness Campaign",
        description:
            "Strategic brand positioning campaign that increased market visibility and customer engagement through multi-channel marketing approaches and creative storytelling...",
        image: "/placeholder.svg?height=300&width=400",
        category: "digital-media",
        featured: true,
    },
    {
        id: "7",
        title: "Program Management Excellence",
        description:
            "Large-scale program management initiative that streamlined operations, improved efficiency, and delivered measurable business outcomes across multiple departments...",
        image: "/placeholder.svg?height=300&width=400",
        category: "program-management",
    },
    {
        id: "8",
        title: "Innovation Lab Project",
        description:
            "Cutting-edge research and development project that explored emerging technologies and created proof-of-concept solutions for future business applications...",
        image: "/placeholder.svg?height=300&width=400",
        category: "other",
    },
];

const categories = [
    { id: "all", label: "Featured" },
    { id: "digital-media", label: "Digital Media" },
    { id: "technology", label: "Technology & Platform Development" },
    { id: "program-management", label: "Program Design & Management" },
    { id: "other", label: "Other" },
];

export default function CaseStudies() {

    // const [animateLines, setAnimateLines] = useState(false);

    // // Initial animation trigger
    // useEffect(() => {
    //     setTimeout(() => setAnimateLines(true), 100); // small delay for transition
    // }, []);

    const [activeCategory, setActiveCategory] = useState("all");

    const filteredCaseStudies = caseStudies.filter((study) => {
        return activeCategory === "all" ? study.featured : study.category === activeCategory;
    });

    return (
        <div className="h-full w-full bg-[#010616]">

            <div className="h-48 sm:h-56 md:h-64 lg:h-72 xl:h-60 w-full bg-gradient-to-r from-[#03051E] via-[#0e1f4b] to-[#1D53B7]">
                {/* <h1 className="text-4xl sm:text-2xl md:text-5xl lg:text-4xl xl:text-5xl 
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
                        CaseStudy
                    </span>

                </h1> */}
            </div>
            <div className=" max-w-7xl mx-auto ">


                <div className="bg-[#010616] ">
                    {/* catogeries tabs */}
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
                        {/* Scrollable container for small screens */}
                        <div className="w-full overflow-x-auto">
                            <div className="flex sm:grid sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-0 min-w-max sm:min-w-0">
                                {categories.map((category) => (
                                    <button
                                        key={category.id}
                                        onClick={() => setActiveCategory(category.id)}
                                        className={`py-3 px-4 text-xl sm:text-sm font-normal whitespace-nowrap text-center  rounded-none 
            ${activeCategory === category.id
                                                ? "text-gray-200 font-normal" : "text-gray-400"
                                            }`}
                                    >
                                        {/* Responsive label variations */}
                                        <span className="block sm:hidden">
                                            {category.label.includes("Technology")
                                                ? "Technology"
                                                : category.label.includes("Program")
                                                    ? "Program Mgmt"
                                                    : category.label}
                                        </span>
                                        <span className="hidden sm:block lg:hidden">
                                            {category.label.includes("Technology")
                                                ? "Tech & Platform"
                                                : category.label.includes("Program")
                                                    ? "Program Design"
                                                    : category.label}
                                        </span>
                                        <span className="hidden lg:block">{category.label}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>

                {/* caseStudy cards section */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
                        {filteredCaseStudies.map((study) => (
                            <div
                                key={study.id}
                                className="bg-[#010616] rounded-md shadow-md hover:shadow-lg transition-shadow overflow-hidden flex flex-col sm:flex-row min-h-[320px] sm:min-h-[400px]"
                            >
                                {/* Image Section - Larger */}
                                <div className="w-full sm:w-2/3 relative min-h-[250px] sm:min-h-[400px]">
                                    <img
                                        src={study.image || "/placeholder.svg"}
                                        alt={study.title}
                                        className="absolute inset-0 w-full h-full object-cover"
                                    />
                                </div>

                                {/* Text Section - Smaller */}
                                <div className="w-full sm:w-1/3 p-3 sm:p-4 flex flex-col justify-between bg-[#010616]">
                                    <div>
                                        <h3 className="text-sm sm:text-base font-semibold text-gray-200 mb-2 leading-tight line-clamp-2">
                                            {study.title}
                                        </h3>
                                        <p className="text-gray-200 text-xs sm:text-sm leading-snug mb-2 line-clamp-3">
                                            {study.description}
                                        </p>
                                    </div>
                                    <div className="flex items-center mt-4 sm:mt-auto">
                                        <button className="text-gray-300 hover:text-gray-500  font-normal text-lg flex items-center">
                                            View
                                            <i className="fa-solid fa-arrow-right ml-2 text-lg"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredCaseStudies.length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-gray-500 text-lg">No case studies found matching your criteria.</p>
                        </div>
                    )}
                </div>


            </div>
        </div>

    );
}
