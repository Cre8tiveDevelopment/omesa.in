import { useEffect, useState } from "react";

const words = ["AGENCY", "COMPANY", "STUDIO", "TEAM", "PARTNER"];

const HomeBanner = ({ scrollY }) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [animateLines, setAnimateLines] = useState(false);

  // scroll animation 
  const parallaxOffset = scrollY * 0.1;
 
  // Word cycling effect
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // trigger fade-out
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % words.length);
        setFade(true); // trigger fade-in
      }, 400); // fade-out duration
    }, 3000); // total display time per word

    return () => clearInterval(interval);
  }, []);

  // Initial animation trigger
  useEffect(() => {
    setTimeout(() => setAnimateLines(true), 100); // small delay for transition
  }, []);

  return (

    <div style={{
        transform: `translateY(${parallaxOffset}px)`,}} >
      <main className=" sticky h-screen px-6 lg:px-12 py-12 bg-gradient-to-r from-[#03051E] via-[#0e1f4b] to-[#1D53B7] overflow-hidden">

        <div className="max-w-4xl ">
          <div className="space-y-8 text-left lg:text-left py-52">
            <div className="space-y-4 ">
              <h1 className="leading-tight text-4xl mb-8 mt-20 lg:text-6xl xl:text-7xl font-normal text-white">
                <span
                  className={`block mb-1 transform transition-all duration-700 ease-out ${animateLines ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                    }`}
                >
                  YOUR CREATIVE
                </span>
                <span
                  className={`block transform transition-all duration-700 ease-out delay-100 ${animateLines ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                    }`}
                >
                  SOLUTION{" "}
                  <span
                    className={`italic font-normal inline-block min-w-[6ch] transition-all duration-500 ${fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                      } text-white`}
                  >
                    {words[wordIndex]}
                  </span>
                </span>
              </h1>

              <p
                className={`text-blue-200 text-lg lg:text-xl max-w-2xl leading-relaxed mx-auto lg:mx-0 transform transition-all duration-700 ease-out delay-200 ${animateLines ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                  }`}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper
                mattis, pulvinar dapibus leo.
              </p>
            </div>
            <div>
              <button className="text-white w-fit border border-gray-500 py-4 px-10 rounded-full hover:bg-slate-200 hover:text-black ">Start Project </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomeBanner;
