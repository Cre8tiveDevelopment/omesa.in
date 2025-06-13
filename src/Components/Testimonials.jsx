

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
    bgColor: "bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900",
  },
  {
    type: "image",
    image: "https://omesa.in/wp-content/uploads/2022/06/Untitled-1920-%C3%97-480-px-1920-%C3%97-560-px-1920-%C3%97-560-px-Desktop-Wallpaper-1.png",
    alt: "Mountain landscape at sunset",
    bgColor: "bg-black",
  },
  {
    type: "text",
    title: "Innovation at Its Best",
    subtitle: "Built for the Future",
    description:
      "Our team of experts has crafted every detail to ensure you get the most advanced and user-friendly experience. Join thousands of satisfied users who have already made the switch.",
    bgColor: "bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900",
  },
  {
    type: "image",
    title: "Modern Architecture",
    image: "/placeholder.svg?height=600&width=800",
    alt: "Modern building architecture",
    bgColor: "bg-white",
  },
  {
    type: "text",
    title: "Get Started Today",
    subtitle: "Join Our Community",
    description:
      "Ready to take your projects to the next level? Start your journey with us today and discover what makes our platform the preferred choice for professionals worldwide.",
    bgColor: "bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900",
  },
]

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0)
  

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4000)

    return () => clearInterval(interval)
  }, )

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

 

 

  return (
    <>
    <div className=" bg-gray-900 flex justify-center items-center h-screen w-screen overflow-hidden" >
     <div className="relative w-[80%] h-[90%] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -300 }}
          transition={{ type: "spring", stiffness: 300, damping: 30, duration: 0.5 }}
          className={`absolute inset-0 ${slides[currentSlide].bgColor}`}
        >
          <div className="flex items-center justify-center h-full p-8">
            {slides[currentSlide].type === "text" ? (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-center text-white w-full h-full flex flex-col justify-center items-center"
              >
                <motion.h1
                  className="text-5xl md:text-7xl font-bold mb-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  {slides[currentSlide].title}
                </motion.h1>
                <motion.h2
                  className="text-2xl md:text-3xl font-light mb-8 opacity-90"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  {slides[currentSlide].subtitle}
                </motion.h2>
                <motion.p
                  className="text-lg md:text-xl leading-relaxed opacity-80 max-w-3xl mx-auto"
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
                {/* image div */}
                <motion.div
                  className="relative h-full w-full object-fit"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  <img
                    src={slides[currentSlide].image || "/placeholder.svg"}
                    alt={slides[currentSlide].alt}
                    className="shadow-2xl w-full h-full object-cover "
                  />
                </motion.div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Left Arrow */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10">
        <button
          onClick={prevSlide}
          className="p-3 rounded-full bg-white/20 text-white border border-white/30 hover:bg-white/30 backdrop-blur-sm"
        >
          <i className="fas fa-chevron-left"></i>
        </button>
      </div>

      {/* Right Arrow */}
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10">
        <button
          onClick={nextSlide}
          className="p-3 rounded-full bg-white/20 text-white border border-white/30 hover:bg-white/30 backdrop-blur-sm"
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>

    </div>
  
    </>
  
  )
}
