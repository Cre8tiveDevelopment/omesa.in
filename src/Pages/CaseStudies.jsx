
import { useAirtable } from "../Context/AirTableContext";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";



export default function CaseStudies() {

    const { getTableData } = useAirtable();
  const [CaseStudy, SetCaseStudy] = useState([]);

  // fetching CaseStudies airtable data
  useEffect(() => {
    const fetchData = async () => {
      const data = await getTableData("caseStudy");
      SetCaseStudy(data);
      console.log("fetched CaseStudies details", data);
    };

    fetchData();
  }, [getTableData]);
  console.log("updated CaseStudies",CaseStudy)

  
  const leftColumnStudies = CaseStudy.filter((study) => study.fields.Position ==="left")
  console.log("left col",leftColumnStudies)
  
  const rightColumnStudies = CaseStudy.filter((study) => study.fields.Position === "right")
console.log("right col",rightColumnStudies)


  return (
    <div className="min-h-screen bg-[#010616]">
      <div className="container mx-auto px-4 py-12 max-w-6xl mt-20">
      
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* LEFT COLUMN */}
          <div className="space-y-8">
            {leftColumnStudies.map((study) => (
              <div
                key={study.fields.id}
                className="overflow-hidden border-0 shadow-lg   cursor-pointer group h-fit bg-white rounded-lg"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={study.fields.image || "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                    alt={study.fields.imageAlt}
                    className="object-cover w-full h-full "
                  />
                </div>
                <div className="p-6 h-56 flex flex-col justify-between">
                  <div>
                    <h3 className="text-gray-800 text-fs-24 font-[HeadingText]leading-relaxed mb-4 line-clamp-3"> {study.fields.Title}</h3>
                    <p className="text-gray-800 text-lg font-[textFont] leading-relaxed mb-4 line-clamp-3">
                      {study.fields.shortDesc}
                    </p>
                  </div>
                  <Link
                    to={`/case-studies/${study.id}`}
                    className="flex items-center text-green-600 text-sm font-medium transition-transform duration-200 group-hover:translate-x-2 mt-auto"
                  >
                    READ MORE
                    <i className="fas fa-arrow-right ml-2 text-xs group-hover:translate-x-1 transition-transform duration-200"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-8">
            {rightColumnStudies.map((study) => (
              <div
                key={study.fields.id}
                className={`overflow-hidden border-0 shadow-lg   cursor-pointer group h-fit bg-white rounded-lg  ${study.fields.backgroundColor || ""} ${study.textColor || ""}`}
              >
                <div className="p-6 h-56 flex flex-col justify-between">
                  <div>
                     <h3 className="text-gray-800 text-fs-24 font-[HeadingText]leading-relaxed mb-4 line-clamp-3"> {study.fields.Title}</h3>
                    <p
                      className={`text-lg font-[textFont] leading-relaxed mb-4 transition-colors duration-200 line-clamp-3 ${
                        study.textColor === "text-white"
                          ? "text-gray-300 group-hover:text-gray-200"
                          : "text-gray-600"
                      }`}
                    >
                      {study.fields.shortDesc}
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
                    src={study.fields.image || "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                    alt={study.fields.imageAlt}
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
