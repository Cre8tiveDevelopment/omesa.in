import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAirtable } from "../Context/AirTableContext";
import AOS from "aos";
import "aos/dist/aos.css";

export default function RecentProjects() {
  const { getTableData } = useAirtable();
  const [projects, setProjects] = useState([]);

  // Fetch Data
  useEffect(() => {
    const fetchData = async () => {
      const data = await getTableData("portfolioTiles");

      // Airtable se jo data aata hai usko fields ke saath format karo
      const formatted = data.map((record) => ({
        id: record.id,
        ...record.fields
      }));

      // Date ke hisaab se sort (newest first)
      const sorted = formatted.sort(
        (a, b) => new Date(b.Date) - new Date(a.Date)
      );

      setProjects(sorted);
      console.log("fetched & sorted project details", sorted);
    };

    fetchData();
  }, [getTableData]);

  // AOS Init
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation speed
      once: true // animation only once
    });
  }, []);

  return (
    <section className="bg-[#010616] max-w-full text-white px-4 sm:py-4 sm:px-6 lg:px-8 lg:py-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className=" ml-2 font-[HeadingFont] text-sm text-left border w-fit py-2 px-2 rounded-full border-gray-500 font-medium text-gray-400 uppercase tracking-wider mb-4">
            OUR WORK
          </p>
          <h2 className="py-5 text-3xl text-left md:text-5xl lg:text-fs-54 font-[HeadingFont] font-semibold mb-6 leading-tight bg-gradient-to-r from-gray-500 via-neutral-300 to-slate-200 bg-clip-text text-transparent">
            Projects where ideas became
            <br className="hidden sm:block" />
            experiences
          </h2>
          <p className="text-gray-400 text-left max-w-xl text-lg leading-relaxed font-[textFont]">
            Every project begins with a question: how do we make people stop,
            feel, and remember? From experiences to bold campaigns, we craft
            spaces and stories that connect brands to their audiences in ways
            that last.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="max-w-full mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {projects.map((project, index) => (
              <div
                data-aos="fade-up"
                data-aos-delay={index * 150}
                key={project.id}
              >
                <ProjectCard project={project} index={index} />
              </div>
            ))}
          </div>
          <div className="mt-5 pb-4 text-center ">
            <h2 className="text-center text-fs-24 font-[HeadingFont] font-semibold py-5">
              More project you should look.
            </h2>
            <Link to="/portfolio">
              <button className="bg-white text-center rounded-full py-2 px-7 border-2 font-[textFont] border-gray-300 text-base text-gray-950 hover:bg-transparent hover:text-white transition-all duration-300 ease-in-out ">
                More Projects
                <i className="fa-solid fa-arrow-right text-base pl-2 text-gray-950 hover:text-white transition-all duration-300 ease-in-out"></i>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// Card Component
export function ProjectCard({ project, index }) {
  const [isHovered, setIsHovered] = useState(false);
  const isOffset = index % 2 === 0;

  const offsetClass = isOffset ? "mt-12 lg:mt-10" : "";

  const { title, category, description, Images } = project;
  const imageUrl = Images?.[0]?.url || "/placeholder.svg";

  return (
    <div
      className={`group cursor-pointer max-w-full ${offsetClass}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative bg-[#010616] rounded-lg overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-64 sm:h-80 lg:h-full object-cover block"
        />

        {/* Hover Overlay */}
        <div
          className={`absolute inset-0 transition-opacity duration-300 ${
            isHovered ? "opacity-100 bg-black/30" : "opacity-0"
          }`}
        />

        {/* Arrow Icon */}
        <div className="absolute bottom-6 right-6 w-16 h-16 border-2 rounded-full flex items-center justify-center transition-all duration-300">
          <Link
            to={`/portfolio/${project.id}`}
            className="text-white text-lg w-5 h-5 flex items-center justify-center"
          >
            <i className="fa-solid fa-arrow-right text-lg"></i>
          </Link>
        </div>
      </div>

      {/* Text Info */}
      <div className="space-y-3 mt-4">
        <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider font-[textFont]">
          {category}
        </p>
        <h3 className="text-xl lg:text-3xl font-normal text-white transition-colors duration-200">
          {title}
        </h3>
        <p className="text-gray-400 leading-relaxed font-[textFont]">
          {description}
        </p>
      </div>
    </div>
  );
}
