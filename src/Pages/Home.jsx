
import AboutSection from "../Components/AboutSection";
import ClientsSlider from "../Components/ClientsSlider";
import HomeBanner from "../Components/HomeBanner";
import RecentProjects from "../Components/RecentProject";
import ServicesSection from "../Components/ServicesSection";
import Testimonials from "../Components/Testimonials";
import WhyChooseUs from "../Components/WhyChooseUs";

const Home = () => {

  return (
    <div className="home">

      <div className=" ">
        <HomeBanner />
      </div>
      <div>
        <AboutSection />
      </div>

      <div>
        <div className="flex justify-center items-center bg-[#010616]">
          <div className="videoContainer w-[100%] sm:w-[80%] md:w-[70%]  sm:h-72 md:h-80 lg:h-[600px]  bg-pink-300 rounded-md overflow-hidden shadow-lg">
            <video
              src="https://d15n4qct5igon0.cloudfront.net/Anteprima_Showreel_mobile_cc439adc9d.mp4"
              muted
              loop
              autoPlay
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div>
        <ClientsSlider></ClientsSlider>
      </div>

      <div>
        <RecentProjects></RecentProjects>
      </div>

      <div>
        <ServicesSection />
      </div>

      {/* <Testimonials></Testimonials> */}
      <WhyChooseUs></WhyChooseUs>

    </div>
  );
};

export default Home;
