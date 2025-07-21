export default function TrustedClients() {
  return (
    <div className="bg-[#010616] p-4 sm:p-6 lg:p-8 flex flex-col lg:flex-row items-stretch gap-6">
      {/* Left Card */}
      <div className="w-full lg:w-[55vw] relative lg:right-10 overflow-hidden rounded-xl p-6 sm:p-8 lg:p-12" style={{ backgroundImage: "url('/backgroundImages/WhyChoose.jpeg')" }}>
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm mb-6 sm:mb-8">
          <span className="text-white font-[HeadingFont] tracking-wide">
            TRUSTED AGENCY
          </span>
        </div>

        {/* Main Content */}
        <div className="space-y-4 sm:space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-fs-46 font-semibold font-[HeadingFont] text-white leading-tight">
            Trusted by the industry leaders.
          </h2>
          <p className="text-blue-100 font-[TextFont] text-fs-16 font-light sm:text-lg leading-relaxed max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>

        {/* Reviews Section */}
        <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
          {/* Profile Images */}
          <div className="flex -space-x-3">
            {[1, 2, 3].map((_, index) => (
              <div
                key={index}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-4 border-white overflow-hidden"
              >
                <img
                  src="/placeholder.svg?height=48&width=48"
                  alt="Client testimonial"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Stats */}
          <div>
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              128 K+
            </div>
            <div className="text-blue-100 text-sm">Reviews</div>
          </div>
        </div>
      </div>

      {/* Right Card */}
      <div className="w-full lg:w-[45vw] relative overflow-hidden rounded-xl">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://plus.unsplash.com/premium_photo-1690086519096-0594592709d3?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Professional woman testimonial"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative h-full min-h-[400px] sm:min-h-[500px] lg:min-h-[400px] flex flex-col justify-end p-6 sm:p-8 lg:p-12">
          <div className="space-y-2 sm:space-y-3">
            <blockquote className="text-xl sm:text-2xl lg:text-3xl font-light text-white leading-relaxed italic">
              "Sirion brought our vision to life with such precision and creativity."
            </blockquote>
            <div className="space-y-1">
              <div className="text-lg sm:text-xl font-semibold text-white">
                Jhonatan Hills
              </div>
              <div className="text-gray-300 text-sm">CEO @eastcape</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
