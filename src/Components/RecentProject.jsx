import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAirtable } from "../Context/AirTableContext"; // adjust path if needed

export default function RecentProjects() {
  const { getTableData } = useAirtable();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTableData("portfolioTiles");
      setProjects(data);
    };

    fetchData();
  }, [getTableData]);

  return (
    <section className="bg-[#010616] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm text-left border w-fit py-2 px-4 rounded-full border-gray-500 font-medium text-gray-400 uppercase tracking-wider mb-4">OUR WORK</p>
          <h2 className="py-5 text-3xl text-left md:text-5xl lg:text-6xl font-normal mb-6 leading-tight bg-gradient-to-r from-gray-500 via-neutral-300 to-slate-200 bg-clip-text text-transparent">
            Recent projects that our team <br className="hidden sm:block" />
            loved working on
          </h2>
          <p className="text-gray-400 text-left max-w-xl text-lg leading-relaxed">
            Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
            venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="space-y-8">
            {projects[0] && <ProjectCard project={projects[0].fields} />}
            {projects[2] && <ProjectCard project={projects[2].fields} />}
          </div>
          <div className="space-y-8">
            {projects[1] && <ProjectCard project={projects[1].fields} />}
            {projects[3] && <ProjectCard project={projects[3].fields} />}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden rounded-lg mb-6 bg-gray-800">
        <img
          src={project.Images.url} // Make sure Airtable returns a valid image URL
          alt={project.title}
          className="w-full h-64 sm:h-80 lg:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="absolute bottom-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <Link to={`/details`} className="absolute">
            <i className="fas fa-arrow-up-right-from-square text-white text-lg"></i>
          </Link>
        </div>
      </div>

      <div className="space-y-3">
        <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider">{project.category}</p>
        <h3 className="text-xl lg:text-3xl font-normal group-hover:text-gray-300 transition-colors duration-200">
          {project.title}
        </h3>
        <p className="text-gray-400 leading-relaxed">{project.description}</p>
      </div>
    </div>
  );
}
