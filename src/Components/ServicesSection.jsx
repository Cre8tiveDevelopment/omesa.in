
// ServicesSection.jsx
import React, { useState, useEffect, useRef } from "react"
import { useMediaQuery } from "../Hooks/useMediaQuery"
import { Link } from "react-router-dom"

// responsiveness pending 
const services = [
  {
    id: "1",
    number: "01",
    title: "Exhibitions",
    description:
      "Well-planned, designed, developed and installed using the latest technology and engagement driven solutions.",

  },
  {
    id: "2",
    number: "02",
    title: "Events",
    description:
      "We provide a wholesome solution to plan your Event",

  },
  {
    id: "3",
    number: "03",
    title: "Digital & Media",
    description:
      "We create stand-out Digital Experiences which reach the end objective and also stay with the audiences for a long time using latest technologies",
  },
  {
    id: "4",
    number: "04",
    title: "Murals & Installations ",
    description:
      "We have your printing needs covered from conception to installation.",

  },
  {
    id: "5",
    number: "05",
    title: "Advertising & Brand Consulting",
    description:
      "Advertising, Posters, Promotional Giveaways, Print Media, Digital Media, Logo, Use Colour Palettes,",

  },
  {
    id: "6",
    number: "06",
    title: "Interactive",
    description:
      "Interaction with audience plays a major role in order to understand your potential clients needs and to lead generation.",

  },
]

function ServicesSection() {
  const [hoveredService, setHoveredService] = useState(null)
  const videoRefs = useRef({})
  const isSmallScreen = useMediaQuery("(max-width: 768px)")

  // Initialize videoRefs
  useEffect(() => {
    services.forEach((service) => {
      videoRefs.current[service.id] = null
    })
  }, [])

  // Play video on hover
  useEffect(() => {
    if (isSmallScreen) return;

    let video = videoRefs.current[hoveredService];

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
      <div className="max-w-7xl mx-auto">
        <h2 className="text-gray-400 uppercase text-sm mb-2 border w-fit py-2 px-4 rounded-full border-gray-500">Our Services</h2>

        <h3 className="text-6xl font-normal py-10 bg-gradient-to-r from-gray-500 via-neutral-300 to-slate-200 bg-clip-text text-transparent ">
          Our services cover
          <br />everything you need
        </h3>

        <div className="lg:w-full ">
          {services.map((service, index) => (
            <div
              key={service.id}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
              className={`relative border-t border-gray-700 lg:py-12 sm:py-7 px-4 transition-all ${hoveredService === service.id ? "bg-white/10" : "hover:bg-white/5"
                } ${index === services.length - 1 ? "border-b" : ""}`}
            >
              {/* Video Background (Desktop only) */}
              {!isSmallScreen && (
                <video
                  ref={(el) => (videoRefs.current[service.id] = el)}
                  className={`absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-500 ${hoveredService === service.id ? "opacity-50" : "opacity-0"
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

              {/* Overlay for small screens or fallback */}
              <div
                className={`absolute inset-0 z-0 transition-opacity duration-500 ${hoveredService === service.id
                    ? ""
                    : ""
                  }`}
              />

              {/* Content */}
              <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6">
                <div className="lg:text-3xl font-normal text-white">
                  {service.number}
                </div>
                <div className="flex-1">
                  <h4 className="lg:text-4xl camelcase font-normal text-white mb-1">
                    {service.title}
                  </h4>
                  <p className="text-gray-300 text-xl py-2">{service.description}</p>
                </div>
                <a
                  href={""}
                  className={`inline-flex items-center gap-2 lg:text-normal font-medium px-4 py-2 border rounded-full transition-all duration-300 ${hoveredService === service.id
                      ? "bg-white text-black border-white shadow-lg scale-105"
                      : "text-white border-gray-600 hover:border-white hover:bg-white/10 hover:scale-50"
                    }`}
                >
                  <Link to={'/Service/Details'}>
                    Learn More <i className="fas fa-arrow-right" />
                  </Link>
                
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default ServicesSection
