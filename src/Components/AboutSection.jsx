
import { useState, useEffect, useRef } from "react";



export function StatItem({ value, suffix, label, shouldAnimate, width = "w-full" }) {
  const [currentValue, setCurrentValue] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)

  
  useEffect(() => {
    if (shouldAnimate && !hasAnimated) {
      const duration = 2000
      const steps = 60
      const increment = value / steps
      const stepDuration = duration / steps

      let currentStep = 0
      const timer = setInterval(() => {
        currentStep++
        const newValue = Math.min(increment * currentStep, value)
        setCurrentValue(Math.round(newValue))

        if (currentStep >= steps) {
          clearInterval(timer)
          setCurrentValue(value)
          setHasAnimated(true)
        }
      }, stepDuration)

      return () => clearInterval(timer)
    } else if (!shouldAnimate) {
      setCurrentValue(0)
      setHasAnimated(false)
    }
  }, [shouldAnimate, hasAnimated, value])

  return (
    <div className="mb-12">
      <div className="flex justify-between items-start">
        <div className="text-5xl md:text-6xl font-medium text-white flex">
          {currentValue}
          {suffix}
        </div>
        <div className="text-gray-400 text-sm md:text-base">{label}</div>
      </div>
      <div className={`border-b border-gray-600 mt-4 ${width}`}></div>
    </div>
  )
}

export default function AboutSection() {
  const [shouldAnimateStats, setShouldAnimateStats] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldAnimateStats(true);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    const currentStatsRef = statsRef.current;
    if (currentStatsRef) {
      observer.observe(currentStatsRef);
    }

    return () => {
      if (currentStatsRef) {
        observer.unobserve(currentStatsRef);
      }
    };
  }, []);

  return (
    <section className="bg-[#010616] py-16 px-4 md:py-24">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 flex ">
          <div className="flex-1 text-left">
            <span className="text-xs md:text-sm text-gray-400 tracking-widest uppercase border border-gray-600 px-4 py-2 rounded-full mb-8 inline-block">
              About Us
            </span>
          </div>

          <div className="flex-3 text-left">
             <h2 className="text-xl md:text-3xl lg:text-5xl font-normal  leading-tight mb-8  mx-auto bg-gradient-to-r from-gray-500 via-neutral-400 to-slate-300 bg-clip-text text-transparent">
               Elevate brands through exceptional design.
               <br />
             Our team transforms visions into 
             <br />impactful solutions.
            </h2>
             <div className="text-gray-400 text-base md:text-lg leading-relaxed max-w-3xl  mb-10">
            Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
            venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.
            Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu,
            consequat vitae, eleifend ac, enim.
          </div>

          <button className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors duration-300">
            More About Us
            <i className="fas fa-arrow-right text-sm"></i>
          </button>
         </div>
        </div>

  {/* Stats Section */}
  <div ref={statsRef} className="space-y-12 lg:px-52 max-auto ">
  <StatItem value={20} suffix=" +" label="Years of experiences" shouldAnimate={shouldAnimateStats} />
  <StatItem value={120} suffix=" +" label="Successful Project" shouldAnimate={shouldAnimateStats} />
  <StatItem value={98} suffix=" %" label="Client Satisfaction" shouldAnimate={shouldAnimateStats} />
</div>


 

      </div>
    </section>
  );
}
