// src/components/AboutSection.jsx
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { StatItem } from "./StateItems";

export default function AboutSection() {
  const [shouldAnimateStats, setShouldAnimateStats] = useState(false);
  const statsRef = useRef(null);
  const [Data, setData] = useState([]);

  const baseId = import.meta.env.VITE_AIRTABLE_BASEID;
  const tableName = import.meta.env.VITE_AIRTABLE_TABLE_NAME;
  const token = import.meta.env.VITE_AIRTABLE_ACCESS_TOKEN;

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://api.airtable.com/v0/${baseId}/${tableName}`;
      try {
        const res = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setData(res.data.records[1]?.fields)
        console.log("Fetched Airtable Records:", Data);
      } catch (error) {
        console.error("Error fetching from Airtable:", error);
      }
    };
    fetchData();
  }, [baseId, tableName, token]);


// animation use Effect
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
    if (currentStatsRef) observer.observe(currentStatsRef);
    return () => {
      if (currentStatsRef) observer.unobserve(currentStatsRef);
    };
  }, []);

  return (
    <section className="bg-[#010616] py-16 px-4 md:py-24">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row text-center md:text-left mb-16 px-4">
          <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center md:justify-start">
            <span className="h-fit text-xs md:text-sm text-gray-400 tracking-widest uppercase border border-gray-600 px-4 py-2 rounded-full inline-block">
              About Us
            </span>
          </div>

          <div className="md:w-2/3">
           

            {/* Airtable Title & Description */}
           
              <div  className="mb-4">
                 <h2 className="text-2xl sm:text-3xl lg:text-5xl font-normal leading-tight mb-6 bg-gradient-to-r from-gray-500 via-neutral-400 to-slate-300 bg-clip-text text-transparent">
                 {Data.Heading}
            </h2>
            <div className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mb-6 mx-auto md:mx-0">
            {Data.Description}
            </div>
              </div>
          

           

            <button className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors duration-300">
              More About Us
              <i className="fas fa-arrow-right text-sm"></i>
            </button>
          </div>
        </div>

        {/* Stats Section */}
        
        <div ref={statsRef} className="space-y-12 lg:px-52 max-auto">
  <StatItem
    value={Data?.Experience || 0}
    suffix=" +"
    label="Years of Experience"
    shouldAnimate={shouldAnimateStats}
  />
  <StatItem
    value={Data?.Projects || 0}
    suffix=" +"
    label="Successful Projects"
    shouldAnimate={shouldAnimateStats}
  />
  <StatItem
    value={Data?.Satisfaction || 0}
    suffix=" %"
    label="Client Satisfaction"
    shouldAnimate={shouldAnimateStats}
  />
</div>
        
        </div>
        

    </section>
  );
}