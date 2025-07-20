import React, { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    quote: "Sirion brought our vision to life with such precision and creativity.",
    author: "Jhonatan Hills",
    position: "CEO",
    company: "@eastcape",
    trustBadge: "TRUSTED AGENCY",
    trustTitle: "Trusted by the industry leaders.",
    trustDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    reviewCount: "128 K+",
    reviewLabel: "Reviews",
    avatars: [
      "/placeholder.svg?height=50&width=50",
      "/placeholder.svg?height=50&width=50",
      "/placeholder.svg?height=50&width=50",
    ],
  },
  {
    id: 2,
    quote:
      "Outstanding service and exceptional results. They exceeded all our expectations.",
    author: "Sarah Johnson",
    position: "Marketing Director",
    company: "@techcorp",
    trustBadge: "AWARD WINNING",
    trustTitle: "Recognized for excellence worldwide.",
    trustDescription:
      "Our commitment to quality and innovation has earned us recognition from industry leaders and satisfied clients globally.",
    reviewCount: "95 K+",
    reviewLabel: "Happy Clients",
    avatars: [
      "/placeholder.svg?height=50&width=50",
      "/placeholder.svg?height=50&width=50",
      "/placeholder.svg?height=50&width=50",
    ],
  },
  {
    id: 3,
    quote:
      "The team's attention to detail and creative approach transformed our brand completely.",
    author: "Michael Chen",
    position: "Founder",
    company: "@innovate",
    trustBadge: "INDUSTRY LEADER",
    trustTitle: "Setting new standards in design.",
    trustDescription:
      "We push boundaries and create innovative solutions that help businesses stand out in today's competitive market.",
    reviewCount: "200 K+",
    reviewLabel: "Projects",
    avatars: [
      "/placeholder.svg?height=50&width=50",
      "/placeholder.svg?height=50&width=50",
      "/placeholder.svg?height=50&width=50",
    ],
  },
];

export default function TestimonialSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const currentTestimonial = testimonials[currentSlide];

  return (
    <div className="bg-gradient-to-r from-[#03051E] via-[#0e1f4b] to-[#1D53B7] ">
      <div className=" max-w-6xl mx-auto relative z-10 container min-h-[80vh] lg:min-h-[80vh] flex flex-col justify-center">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[80vh]">
          {/* Trust Section - Left Side */}
          <div className="space-y-8 text-white order-2 lg:order-1">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium tracking-wider border border-white/20">
                  {currentTestimonial.trustBadge}
                </span>
              </div>

              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                {currentTestimonial.trustTitle}
              </h2>

              <p className="text-lg lg:text-xl text-white/80 leading-relaxed max-w-lg">
                {currentTestimonial.trustDescription}
              </p>
            </div>

            {/* Stats Section */}
            <div className="flex items-center space-x-6">
              <div className="flex -space-x-3">
                {currentTestimonial.avatars.map((avatar, index) => (
                  <div key={index} className="relative">
                    <img
                      src={avatar || "/placeholder.svg"}
                      alt={`User ${index + 1}`}
                      width={50}
                      height={50}
                      className="w-12 h-12 lg:w-14 lg:h-14 rounded-full border-3 border-white object-cover"
                      style={{ aspectRatio: "50/50", objectFit: "cover" }}
                    />
                  </div>
                ))}
              </div>

              <div>
                <div className="text-3xl lg:text-4xl font-bold">{currentTestimonial.reviewCount}</div>
                <div className="text-white/70 text-sm lg:text-base">{currentTestimonial.reviewLabel}</div>
              </div>
            </div>
          </div>

          {/* Testimonial Section - Right Side */}
          <div className="relative order-1 lg:order-2">
            <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 lg:p-12 border border-white/20 shadow-2xl">
              {/* Quote */}
              <div className="space-y-6 text-white">
                <blockquote className="text-xl lg:text-2xl xl:text-3xl font-light italic leading-relaxed">
                  "{currentTestimonial.quote}"
                </blockquote>

                <div className="space-y-1">
                  <div className="font-semibold text-lg lg:text-xl">{currentTestimonial.author}</div>
                  <div className="text-white/70 text-sm lg:text-base">
                    {currentTestimonial.position} {currentTestimonial.company}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center space-x-4 mt-12">
          <button
            onClick={prevSlide}
            className="p-3 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 backdrop-blur-sm"
          >
            <i className="fas fa-chevron-left"></i>
          </button>

          {/* Dots Indicator */}
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "bg-white scale-125" : "bg-white/40 hover:bg-white/60"
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="p-3 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 backdrop-blur-sm"
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
