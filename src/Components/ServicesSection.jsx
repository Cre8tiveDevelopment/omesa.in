import React, { useState, useEffect, useRef } from "react";
import { useMediaQuery } from "../Hooks/useMediaQuery";
import { Link } from "react-router-dom";
import { useAirtable } from "../Context/AirTableContext"; // import context

function ServicesSection() {
  const { getTableData } = useAirtable();
  const [services, setServices] = useState([]);
  const [hoveredService, setHoveredService] = useState(null);
  const videoRefs = useRef({});
  const isSmallScreen = useMediaQuery("(max-width: 768px)");

  // Fetch Airtable data
  useEffect(() => {
    const fetchData = async () => {
      const data = await getTableData("services");
      const formatted = data.map((record) => ({
        id: record.id,
        ...record.fields
      }));
      // Sort by number

      setServices(formatted);
      console.log(services);
    };
    fetchData();
  }, [getTableData]);

  // Initialize videoRefs
  useEffect(() => {
    services.forEach((service) => {
      videoRefs.current[service.id] = null;
    });
  }, [services]);

  // Play video on hover
  useEffect(() => {
    if (isSmallScreen) return;

    const video = videoRefs.current[hoveredService];
    if (hoveredService && video) {
      video.currentTime = 0;
      video.play().catch((err) => {
        if (err.name !== "AbortError") {
          console.error("Video play error:", err);
        }
      });

      return () => {
        video.pause();
      };
    }
  }, [hoveredService, isSmallScreen]);

  return (
    <section className="w-full bg-[#010616] text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-gray-400 uppercase text-sm mb-2 border w-fit py-2 px-4 rounded-full border-gray-500">
          Our Services
        </h2>

        <h3 className="text-5xl font-[heading] py-10 bg-gradient-to-r from-gray-500 via-neutral-300 to-slate-200 bg-clip-text text-transparent lg:text-fs-54 ">
          Our services cover
          <br />
          everything you need
        </h3>

        <div className="lg:w-full">
          {services.map((service, index) => (
            <div
              key={service.id}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
              className={`relative border-t border-gray-700 lg:py-8 sm:py-7 px-4 transition-all ${
                hoveredService === service.id
                  ? "bg-white/10"
                  : "hover:bg-white/5"
              } ${index === services.length - 1 ? "border-b" : ""}`}
            >
              {!isSmallScreen && (
                <video
                  ref={(el) => (videoRefs.current[service.id] = el)}
                  className={`absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-500 ${
                    hoveredService === service.id ? "opacity-50" : "opacity-0"
                  }`}
                  muted
                  loop
                  playsInline
                  preload="metadata"
                >
                  <source
                    src="https://d15n4qct5igon0.cloudfront.net/Anteprima_Showreel_mobile_cc439adc9d.mp4"
                    type="video/mp4"
                  />
                </video>
              )}

              <div
                className={`absolute inset-0 z-0 transition-opacity duration-500 ${
                  hoveredService === service.id ? "" : ""
                }`}
              />

              <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6">
                {/* First Column - Number (30%) */}
                <div className="flex-[2] lg:text-3xl font-normal text-white">
                  {service.Number}
                </div>

                {/* Second Column - Title (30%) */}
                <div className="flex-[4]">
                  <h4 className="lg:text-3xl camelcase font-[heading] text-gray-300 mb-1">
                    {service.Title}
                  </h4>
                </div>

                {/* Third Column - Description + Button (40%) */}
                <div className="flex-[4]">

                  <p className="text-gray-300 text-xl py-2 font-[textFont]">

                    {service.description}
                  </p>
                  <i
                    className={`inline-flex items-center gap-2 lg:text-normal font-medium px-4 py-2 border rounded-full transition-all duration-300 ${
                      hoveredService === service.id
                        ? "bg-white text-black border-white shadow-lg scale-105"
                        : "text-white border-gray-600 hover:border-white hover:bg-white/10 hover:scale-50"
                    }`}
                  >
                    <Link to={`/service/details/${service.id}`}>
                      Learn More <i className="fas fa-arrow-right" />
                    </Link>
                  </i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;