

export default function TrustedClients() {
  return (
    <div className="min-h-screen bg-[#010616] p-8 flex items-center justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Card - Trusted Agency */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#03051E] via-[#0e1f4b] to-[#1D53B7] p-8 lg:p-12">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm mb-8">
            <span className="text-white text-sm font-medium tracking-wide">
              TRUSTED AGENCY
            </span>
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              Trusted by the industry leaders.
            </h2>

            <p className="text-blue-100 text-lg leading-relaxed max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>

          {/* Reviews Section */}
          <div className="mt-12 flex items-center gap-6">
            {/* Profile Images */}
            <div className="flex -space-x-3">
              {[1, 2, 3].map((_, index) => (
                <div
                  key={index}
                  className="w-12 h-12 rounded-full border-4 border-white overflow-hidden"
                >
                  <img
                    src="/placeholder.svg?height=48&width=48"
                    alt="Client testimonial"
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Stats */}
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-white">
                128 K+
              </div>
              <div className="text-blue-100 text-sm">Reviews</div>
            </div>
          </div>
        </div>

        {/* Right Card - Testimonial */}
        <div className="relative overflow-hidden rounded-3xl">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="https://plus.unsplash.com/premium_photo-1658527049634-15142565537a?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Professional woman testimonial"
              width={800}
              height={600}
              className="w-full h-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative h-full min-h-[500px] lg:min-h-[600px] flex flex-col justify-end p-8 lg:p-12">
            <div className="space-y-6">
              <blockquote className="text-2xl lg:text-3xl font-light text-white leading-relaxed italic">
                "Sirion brought our vision to life with such precision and creativity."
              </blockquote>

              <div className="space-y-1">
                <div className="text-xl font-semibold text-white">
                  Jhonatan Hills
                </div>
                <div className="text-gray-300">CEO @eastcape</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
