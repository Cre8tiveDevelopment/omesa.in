

const teamMembers = [
  {
    id: 1,
    name: "Ankit Tomar",
    role: "Head of Production-Films and Digital content",
    image: "/Teams/Member1.png",
    linkedin: "#",
    email: "robin@company.com",
  },
  {
    id: 2,
    name: "Rajat Meresh",
    role: "Founder, CEO, Chief Creative Officer",
    image: "/Teams/Member2.png",
    linkedin: "#",
    email: "syrine@company.com",
  },
  {
    id: 3,
    name: "Saksham Srivastava",
    role: "Director, Operations",
    image: "/Teams/Member3.png",
    linkedin: "#",
    email: "luca@company.com",
  },
];

const TeamSection = () => {
  return (
    <section className="bg-[#010616] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between gap-8 mb-12">
          <div className="flex-1">
            <span className="inline-block border border-gray-600 text-gray-300 mb-6 px-4 py-2 text-sm font-normal rounded-full">
              OUR TEAM
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-fs-54 font-[heading] leading-tight bg-gradient-to-r from-gray-500 via-neutral-300 to-slate-200 bg-clip-text text-transparent">
              Our Creative Team
            </h2>
          </div>
        </div>

        {/* Team Cards */}
        {/* Team Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800">
              {/* Image Container with Social Icons */}
              <div className="relative">
                <img
                  src={member.image || "/placeholder.svg?height=400&width=300"}
                  alt={member.name}
                  className="w-full h-80 object-cover"
                />

                {/* Social Icons - Positioned on the left side of the image */}
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-3">
                  <a
                    href={member.email}
                    className="w-10 h-10 bg-black hover:bg-white backdrop-blur-sm rounded-lg flex items-center justify-center transition-all duration-300"
                  >
                    <i className="fas fa-envelope h-4 w-4 text-white hover:text-black transition-colors duration-300"></i>
                  </a>

                  <a
                    href={member.linkedin}
                    className="w-10 h-10 bg-black hover:bg-white backdrop-blur-sm rounded-lg flex items-center justify-center transition-all duration-300"
                  >
                    <i className="fab fa-linkedin h-4 w-4 text-white hover:text-black transition-colors duration-300"></i>
                  </a>
                </div>

              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-[HeadingFont] text-fs-24 font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-fs-16 font-light text-gray-400 leading-relaxed font-[textFont]">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
