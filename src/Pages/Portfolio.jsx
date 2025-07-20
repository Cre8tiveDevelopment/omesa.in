

import RecentProjects from "../Components/RecentProject";
import WhyChooseUs from "../Components/WhyChooseUs";

const Portfolio = () => {

  // const [animateLines, setAnimateLines] = useState(false);

  //   // Initial animation trigger
  //   useEffect(() => {
  //     setTimeout(() => setAnimateLines(true), 100); // small delay for transition
  //   }, []);ß
  return (
    <div className="h-full w-full bg-[#010616]">

      <div className="h-48 sm:h-56 md:h-64 lg:h-72 xl:h-28 w-full bg-gradient-to-r    from-[#03051E] via-[#0e1f4b] to-[#1D53B7]">
      </div>

      <div className="mt-5">
        <RecentProjects></RecentProjects>
      </div>

      <WhyChooseUs></WhyChooseUs>

    </div>
  )
}

export default Portfolio
