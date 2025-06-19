

export default function WhyChooseUs() {
  return (
    <section className="bg-[#010616] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className=" text-slate-300 px-4 py-2 border border-gray-500 rounded-full text-sm font-normal tracking-wide uppercase">
                Why Choose Us
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-normal  leading-tight bg-gradient-to-r from-gray-500 via-neutral-300 to-slate-200 bg-clip-text text-transparent ">
              We deliver high 
              <br /> quality result
            </h2>

            <p className="text-slate-400 text-lg leading-relaxed max-w-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis eveniet nobis repellat ab beatae, esse aspernatur dolorem in itaque vero modi nam dolor corporis amet harum odio omnis voluptate error?
            </p>
          </div>

          {/* Right Content - Feature Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Creative Teams */}
            <div className="bg-gradient-to-br from-blue-800 to-blue-950 p-8 rounded-2xl">
              <div className="mb-6">
                <i className="fas fa-lightbulb text-white text-3xl"></i>
              </div>
              <h3 className="text-2xl font-medium  text-white mb-4">Creative Teams</h3>
              <p className="text-blue-100 font-normal leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
 
            {/* Fast Result */}
            <div className="bg-slate-800 border border-slate-700 p-8 rounded-2xl">
              <div className="mb-6">
                <i className="fas fa-bolt text-slate-300 text-3xl"></i>
              </div>
              <h3 className="text-2xl font-medium text-white mb-4">Fast Result</h3>
              <p className="text-slate-400 font-normal leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            {/* High Quality */}
            <div className="bg-slate-800 border border-slate-600 p-8 rounded-2xl">
              <div className="mb-6">
                <i className="fas fa-award text-slate-300 text-3xl"></i>
              </div>
              <h3 className="text-2xl font-medium text-white mb-4">High Quality</h3>
              <p className="text-slate-400  font-normal leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            {/* 24h Support */}
            <div className="bg-gradient-to-br from-blue-800 to-blue-950 p-8 rounded-2xl">
              <div className="mb-6">
                <i className="fas fa-headset text-white text-3xl"></i>
              </div>
              <h3 className="text-2xl font-medium text-white mb-4">24h Support</h3>
              <p className="text-blue-100 font-normal leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
