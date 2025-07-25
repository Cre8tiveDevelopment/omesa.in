
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAirtable } from "../Context/AirTableContext";

const Portfolio = () => {


  const { getTableData } = useAirtable();
  const [projects, setProjects] = useState([]);
  const [activeTab, setActiveTab] = useState("All");

// fetching portfolio airtable data
  useEffect(() => {
    const fetchData = async () => {
      const data = await getTableData("portfolioTiles");
      setProjects(data);
      console.log("fetched project details", data);
    };

    fetchData();
  }, [getTableData]);

  // Category list (including "All")
  const categories = ["All", ...new Set(projects.map((p) => p.fields.category).filter(Boolean))];
  console.log(categories)

  // / Filtered projects based on active tab
  const filteredProjects = activeTab === "All"
    ? projects
    : projects.filter((p) => p.fields.category === activeTab);

  return (
    <div className="h-full w-full bg-[#010616]">

      <div className="h-48 sm:h-56 md:h-64 lg:h-72 xl:h-28 w-full bg-gradient-to-r    from-[#03051E] via-[#0e1f4b] to-[#1D53B7]">
      </div>

      <section className="max-w-6xl mx-auto">
        {/* Tabs */}
        <nav className="flex flex-wrap xl:gap-14 mb-8 mt-7">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-4 py-2 rounded border-slate-600 text-white font-[textFont] text-fs-18 font-semibold transition-colors ${activeTab === category
                  ? "text-blue-300"
                  : "bg-transparent text-slate-300"
                }`}
            >
              {category}
            </button>
          ))}
        </nav>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white border border-slate-700 rounded overflow-hidden"
            >
              <div className="aspect-video bg-slate-700">
                <img
                  src={project.fields.Images[0].url}
                  alt={project.title}
                  className="h-full w-full object-cover"
                />


              </div>

              <div className="p-6">
                <h3 className="mb-3 text-xl font-semibold">{project.fields.title}</h3>
                <p className="text-sm text-black leading-relaxed">
                 {project.fields.description}
                </p>
                <Link
                  key={project.id} to={`/portfolio/${project.id}`}
                  className="flex items-center text-black text-sm font-medium transition-transform duration-200 group-hover:translate-x-2"
                >
                  READ MORE{" "}
                  <i className="fas fa-arrow-right ml-2 text-xs group-hover:translate-x-1 transition-transform duration-200"></i>
                </Link>

              </div>
            </div>
          ))}
        </div>

      </section>

    </div>
  )
}

export default Portfolio
