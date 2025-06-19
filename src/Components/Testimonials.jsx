

import { useState, useEffect } from "react"
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion"

const slides = [
  {
    type: "text",
    title: "Welcome to Our Platform",
    subtitle: "Discover Amazing Features",
    description:
      "Experience the next generation of digital solutions with our innovative platform. We provide cutting-edge tools and services designed to transform your workflow and boost productivity.",
    bgColor: "bg-gradient-to-r from-[#03051E] via-[#0e1f4b] to-[#1D53B7]",
  },
  {
    type: "image",
    image:
      "https://omesa.in/wp-content/uploads/2022/06/Untitled-1920-%C3%97-480-px-1920-%C3%97-560-px-1920-%C3%97-560-px-Desktop-Wallpaper-1.png",
    alt: "Mountain landscape at sunset",
    bgColor: "bg-[#010616]",
  },
  {
    type: "text",
    title: "Innovation at Its Best",
    subtitle: "Built for the Future",
    description:
      "Our team of experts has crafted every detail to ensure you get the most advanced and user-friendly experience. Join thousands of satisfied users who have already made the switch.",
    bgColor: "bg-gradient-to-r from-[#03051E] via-[#0e1f4b] to-[#1D53B7]",
  },
  {
    type: "image",
    title: "Modern Architecture",
    image:
      "https://omesa.in/wp-content/uploads/2022/06/Untitled-1920-%C3%97-480-px-1920-%C3%97-560-px-1920-%C3%97-560-px-Desktop-Wallpaper-2.png",
    alt: "Modern building architecture",
    bgColor: "bg-[#010616]",
  },
  {
    type: "text",
    title: "Get Started Today",
    subtitle: "Join Our Community",
    description:
      "Ready to take your projects to the next level? Start your journey with us today and discover what makes our platform the preferred choice for professionals worldwide.",
    bgColor: "bg-gradient-to-r from-[#03051E] via-[#0e1f4b] to-[#1D53B7]",
  },
  {
    type: "image",
    title: "Modern Architecture",
    image:
      "https://omesa.in/wp-content/uploads/2022/06/Untitled-1920-%C3%97-480-px-1920-%C3%97-560-px-1920-%C3%97-560-px-Desktop-Wallpaper-2.png",
    alt: "Modern building architecture",
    bgColor: "bg-[#010616]",
  },
]

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <div className="bg-[#010616] h-fit py-8 sm:py-12 lg:py-16">
        {/* Header Section - Responsive */}
        <div className="px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-normal bg-gradient-to-r from-gray-500 via-neutral-300 to-slate-200 bg-clip-text text-transparent text-center py-6 sm:py-8 lg:py-10">
            Trusted by the industry leaders.
          </h3>
        </div>

        {/* Main Slider Container - Responsive */}
        <div className="bg-[#010616] flex justify-center items-center px-4 sm:px-6 lg:px-8 sm:mb-0">
          <div className="relative w-full max-w-7xl mx-auto">
            {/* Slider Content - Responsive Heights */}
            <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[500px] overflow-hidden rounded-md">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 300 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -300 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30, duration: 0.5 }}
                  className={`absolute inset-0 ${slides[currentSlide].bgColor}`}
                >
                  <div className="flex items-center justify-center h-full">
                    {slides[currentSlide].type === "text" ? (
                      <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-center text-white w-full h-full flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8"
                      >
                        <motion.h1
                          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-normal mb-2 sm:mb-3 lg:mb-4 bg-gradient-to-r from-gray-500 via-neutral-300 to-slate-200 bg-clip-text text-transparent"
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3, duration: 0.6 }}
                        >
                          {slides[currentSlide].title}
                        </motion.h1>
                        <motion.h2
                          className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-normal mb-4 sm:mb-6 lg:mb-8 opacity-90 bg-gradient-to-r from-gray-500 via-neutral-300 to-slate-200 bg-clip-text text-transparent"
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4, duration: 0.6 }}
                        >
                          {slides[currentSlide].subtitle}
                        </motion.h2>
                        <motion.p
                          className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed opacity-80 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto text-gray-400 px-2"
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5, duration: 0.6 }}
                        >
                          {slides[currentSlide].description}
                        </motion.p>
                      </motion.div>
                    ) : (
                      <motion.div
                        className="text-center h-full w-full"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                      >
                        {/* Image Container - Responsive */}
                        <motion.div
                          className="relative p-0 h-full w-full"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.2, duration: 0.6 }}
                        >
                          <img
                            src={slides[currentSlide].image || "/placeholder.svg"}
                            alt={slides[currentSlide].alt}
                            className="shadow-2xl w-full h-full object-cover object-center"
                          />
                        </motion.div>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Dots - Responsive */}
            <div className="flex justify-center mt-4 sm:mt-6 lg:mt-8 space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? "bg-white scale-125" : "bg-white/40 hover:bg-white/60"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
