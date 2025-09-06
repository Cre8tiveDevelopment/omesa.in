export default function WhyChooseUs() {
  return (
    <section className="bg-[#010616] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-block mb-3">
              <span className=" text-slate-300 px-4 py-2 border border-gray-500 rounded-full text-sm font-normal tracking-wide uppercase">
                Why Choose Us
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-fs-54 font-[HeadingFont] font-semibold leading-tight bg-gradient-to-r from-gray-500 via-neutral-300 to-slate-200 bg-clip-text text-transparent">
              We turn ideas into
              <br /> unforgettable experiences
            </h2>

            <p className="text-white leading-relaxed font-[textFont] text-fs-16 font-light ">
              From bold brand campaigns to immersive exhibitions and seamless
              event execution — we don’t just deliver services, we craft moments
              that connect, inspire, and stick with your audience.
            </p>
          </div>

          {/* Right Content - Feature Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 gap-y-6 ">
            {/* Creative Teams */}  
            <div  className=" w-[280px] h-[350px] p-6 border-2 border-[#FFFFFF73] rounded-2xl bg-cover bg-center bg-no-repeat"
               style={{ backgroundImage: "url('/backgroundImages/WhyChoose.jpeg')" }}>
                <i className="fas fa-lightbulb text-white text-fs-46 mb-36 "></i>
              
          
              <h3 className="font-[HeadingFont] font-semibold text-fs-24  text-white mb-4">
                Creative Solutions
              </h3>
              <p className="text-white leading-relaxed font-[textFont] text-fs-16 font-light">
                From advertising to brand consulting, we build campaigns that
                speak loud and clear.
              </p>
            </div>

            {/* Fast Result */}
            <div className="w-[290px] h-[350px] p-6 border-2 border-[#FFFFFF73] rounded-2xl bg-cover bg-gradient-to-r from-[#2B2B2B] to-[#00070D ]  bg-center bg-no-repeat">
              <i className="fas fa-cogs  text-white text-fs-46 mb-36"></i>
              <h3 className="font-[HeadingFont] font-semibold text-fs-24  text-white mb-4">
                Seamless Execution
              </h3>
              <p className="text-white leading-relaxed font-[textFont] text-fs-16 font-light">
                Be it exhibitions or turnkey setups, we handle everything—end to
                end.
              </p>
            </div>

            {/*impactful*/}
            <div className="w-[280px] h-[350px]  p-6 border-2 border-[#FFFFFF73] rounded-2xl bg-cover bg-center bg-gradient-to-r from-[#2B2B2B] to-[#00070D ] bg-no-repeat">
              <i className="fas fa-users text-white text-fs-46 mb-28"></i>
              <h3 className="font-[HeadingFont] font-semibold text-fs-24  text-white mb-4">
                Impactful Experiences
              </h3>
              <p className="text-white leading-relaxed font-[textFont] text-fs-16 font-light">
                From corporate events to large-scale conferences, we manage
                every detail including hospitality.
              </p>
            </div>

            {/* 24h Support */}
            <div className="w-[280px] h-[350px] p-6 border-2 border-[#FFFFFF73] rounded-2xl bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/backgroundImages/WhyChoose.jpeg')" }}>
          <i className="fas fa-vr-cardboard  text-white text-fs-46 mb-36"></i>
              <h3 className="font-[HeadingFont] font-semibold text-fs-24  text-white mb-4">
                Bold & Immersive
              </h3>
              <p className="text-white leading-relaxed font-[textFont] text-fs-16 font-light">
                Our murals, installations, and digital media bring stories to
                life like never before.
              </p>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
