

import AboutSection from "../Components/AboutSection";
import ClientSlider from "../Components/ClientsSlider";
import WhyChooseUs from "../Components/WhyChooseUs";
import TeamSection from "../Components/TeamSection";

const About = () => {

  // const [animateLines, setAnimateLines] = useState(false);

  // Initial animation trigger
  // useEffect(() => {
  //   setTimeout(() => setAnimateLines(true), 100); // small delay for transition
  // }, []);

  return (
    <div className=" about-main h-full w-full bg-[#010616]" >

     <div className="h-48 sm:h-56 md:h-64 lg:h-72 xl:h-28  w-full bg-gradient-to-r from-[#03051E] via-[#0e1f4b] to-[#1D53B7]">
      {/* <h1
        className="text-4xl sm:text-2xl md:text-5xl lg:text-4xl xl:text-5xl 
                     px-4 sm:px-6 md:px-8 lg:px-12 xl:px-32
                     py-44 sm:py-10 md:py-40 lg:py-16 xl:py-48
                     mb-4 sm:mb-6 md:mb-8
                     font-normal text-white 
                     bg-gradient-to-r from-gray-500 via-neutral-300 to-slate-200 
                     bg-clip-text text-transparent
                     flex items-center"
      >
        <span
          className={`block mb-1 transform transition-all duration-700 ease-out ${
            animateLines ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          About Us
        </span>
      </h1> */}
    </div>

      <div>
        <AboutSection></AboutSection>
      </div>

      <div className="bg-[#010616] py-10 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">

          {/* Left Column: Image and Text Block */}
          <div className="space-y-6 flex flex-col">

            {/* Top Image */}
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src="https://media.istockphoto.com/id/2155202623/photo/data-science-businessman-holding-the-data-network-connecting-icon-linking-business-and.jpg?s=2048x2048&w=is&k=20&c=XKzZbWIiwmlY3nQon59rYaV23P3k08T6kM47yvi6fkE="
                alt="Team Discussion"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Bottom Text Block */}
            <div className="bg-[#080e1c] text-white rounded-lg p-6 space-y-4 shadow-md">
              <h2 className="text-xl font-semibold">The Global Agency</h2>
              <p className="text-sm text-gray-300 font-[textFont]">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam quibusdam cumque soluta atque fugiat a quae eveniet amet velit? Officiis.
              </p>
              <hr className="border-gray-600" />
              <div className="flex items-center gap-3">
                <p className="text-sm font-medium font-[textFont]">
                  A Global Awards <br /> Winning Agency Team
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Large Image Container */}
          <div className="lg:col-span-2   rounded-lg overflow-hidden shadow-md h-full">
            <div className=" w-full h-full">
              <img
                src="https://media.istockphoto.com/id/2155202623/photo/data-science-businessman-holding-the-data-network-connecting-icon-linking-business-and.jpg?s=2048x2048&w=is&k=20&c=XKzZbWIiwmlY3nQon59rYaV23P3k08T6kM47yvi6fkE="
                alt="Team Sitting"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <ClientSlider></ClientSlider>
      </div>
      <div>
        <WhyChooseUs></WhyChooseUs>
      </div>

       {/* <div>
        <WorkProgress></WorkProgress>
      </div> */}
      <div>
        <TeamSection></TeamSection>
      </div>
     
    </div>


  )
}

export default About
