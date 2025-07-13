"use client"

import { useState, useEffect } from "react"


const testimonials = [
  {
    id: 1,
    name: "Rodger Struck",
    title: "CEO",
    company: "Company Name",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet ipsum lorem. Donec vitae est vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique ligula, sed viverra dolor mi eget urna.",
    image: "https://images.pexels.com/photos/785667/pexels-photo-785667.jpeg",
    avatar: "https://images.pexels.com/photos/785667/pexels-photo-785667.jpeg",
    companyLogo: "/placeholder.svg?height=40&width=120",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    title: "CTO",
    company: "Tech Solutions",
    content:
      "Exceptional service and outstanding results. The team delivered beyond our expectations and helped transform our business processes completely. Highly recommended for any organization.",
    image: "https://images.pexels.com/photos/785667/pexels-photo-785667.jpeg",
    avatar: "/placeholder.svg?height=40&width=40",
    companyLogo: "/placeholder.svg?height=40&width=120",
  },
  {
    id: 3,
    name: "Michael Chen",
    title: "Product Manager",
    company: "Innovation Labs",
    content:
      "Working with this team was a game-changer for our product development. Their expertise and dedication to quality made all the difference in our success story.",
    image: "/placeholder.svg?height=400&width=300",
    avatar: "/placeholder.svg?height=40&width=40",
    companyLogo: "/placeholder.svg?height=40&width=120",
  },
  {
    id: 4,
    name: "Emily Davis",
    title: "Marketing Director",
    company: "Creative Agency",
    content:
      "The results speak for themselves. Our engagement increased by 300% and we saw immediate improvements in our conversion rates. Truly professional service.",
    image: "/placeholder.svg?height=400&width=300",
    avatar: "/placeholder.svg?height=40&width=40",
    companyLogo: "/placeholder.svg?height=40&width=120",
  },
  {
    id: 5,
    name: "David Wilson",
    title: "Founder",
    company: "StartupCo",
    content:
      "From concept to execution, the team provided invaluable guidance and support. They understood our vision and helped bring it to life with precision and creativity.",
    image: "/placeholder.svg?height=400&width=300",
    avatar: "/placeholder.svg?height=40&width=40",
    companyLogo: "/placeholder.svg?height=40&width=120",
  },
]

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext()
    }, 2000)
    return () => clearInterval(interval)
  }, [currentIndex])

  const handleNext = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const handlePrevious = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const handleAvatarClick = (index) => {
    if (isAnimating || index === currentIndex) return
    setIsAnimating(true)
    setCurrentIndex(index)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <div className="min-h-screen w-full bg-[#010616]  p-4">
      <h1 className="text-5xl py-12 text-center font-[HeadingFont] text-gray-400">
        Trusted by the industry leaders.
      </h1>
      <div className="max-w-6xl mx-auto ">
        {/* Main Testimonial Card */}
        <div className="relative mb-8 h-full w-full">
          <div className="bg-gradient-to-r from-[#03051E] via-[#0e1f4b] to-[#1D53B7]  border  overflow-hidden rounded-xl shadow-lg">
            <div className="flex flex-col lg:flex-row">
              {/* Image Section */}
              <div className="lg:w-2/5 relative overflow-hidden">
                <div className={`transition-all duration-500 ease-in-out ${isAnimating ? "opacity-0 scale-105" : "opacity-100 scale-100"}`}>
                  <img
                    src={currentTestimonial.image || "/placeholder.svg"}
                    alt={currentTestimonial.name}
                    width={400}
                    height={500}
                    className="w-full h-[400px] lg:h-[500px] object-cover"
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className="lg:w-3/5 p-8 lg:p-12 flex flex-col justify-center">
                <div className={`transition-all duration-500 ease-in-out ${isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}>
                  {/* Company Logo */}
                  <div className="mb-6">
                    <div className="flex items-center space-x-2">
                      {/* <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                        <div className="w-4 h-4 bg-white rounded-sm"></div>
                      </div> */}
                      <span className="text-white font-semibold text-lg">COMPANY</span>
                    </div>
                  </div>

                  {/* Testimonial Content */}
                  <blockquote className="text-white/90 text-lg leading-relaxed mb-8">
                    "{currentTestimonial.content}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="flex items-center space-x-4">
                    <img
                      src={currentTestimonial.avatar || "/placeholder.svg"}
                      alt={currentTestimonial.name}
                      // width={60}
                    
                      className="rounded-full h-[50px] w-14"
                    />
                    <div>
                      <h4 className="text-white font-semibold text-lg">{currentTestimonial.name}</h4>
                      <p className="text-white/70">
                        {currentTestimonial.title} of {currentTestimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Avatar Navigation */}
        <div className="flex justify-center items-center space-x-4">
          <button
            onClick={handlePrevious}
            className="text-white/70 hover:text-white hover:bg-white/10 p-2 rounded-full "
          >
            <i className="fas fa-chevron-left text-lg"></i>
          </button>

          <div className="flex space-x-3">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.id}
                onClick={() => handleAvatarClick(index)}
                className={`relative transition-all duration-300 ${
                  index === currentIndex
                    ? "ring-4  rounded-full scale-110"
                    : "hover:scale-105 opacity-70 hover:opacity-100"
                }`}
              >
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={60}
             
                  className="rounded-full h-[55px]"
                />
              </button>
            ))}
          </div>

          <button
            onClick={handleNext}
            className="text-white/70 hover:text-white hover:bg-white/10 p-2 rounded-full"
          >
            <i className="fas fa-chevron-right text-lg"></i>
          </button>
        </div>

        {/* Progress Indicators */}
        {/* <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`h-1 rounded-full transition-all duration-300 ${
                index === currentIndex ? "w-8 bg-gray-500" : "w-2 bg-white/30"
              }`}
            />
          ))}
        </div> */}
      </div>
    </div>
  )
}
