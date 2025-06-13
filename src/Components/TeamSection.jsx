
const teamMembers = [
  {
    id: 1,
    name: "Ankit Tomar ",
    role: "Head of Production-Films and Digital content",
    image: "/Teams/Member1.png",
    linkedin: "#",
    email: "robin@company.com",
  },
  {
    id: 2,
    name: "Rajat Meresh ",
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
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between gap-8 mb-12">
          <div className="flex-1">
            <span className="inline-block border border-gray-600 text-gray-300 mb-6 px-4 py-2 text-sm font-medium rounded-full">
              OUR TEAM
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-100">
              Our Creative Team
            </h2>
          </div>
          <div className="flex-1 lg:max-w-md">
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
              imperdiet a.
            </p>
            
          </div>
        </div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-slate-950 border border-slate-700 rounded-lg overflow-hidden hover:border-slate-600 transition duration-300"
            >
              <div className="py-4 px-5 h-fit w-full rounded-xl ">
                  <img src={member.image} alt={member.name} className="  object-cover rounded-md " />
              </div>
              

              <div className="p-2 space-y-3">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-sm text-gray-400">{member.role}</p>
                <div className="flex items-center gap-4 pt-2">
                  <a href={member.linkedin} className="text-gray-300 hover:text-white transition text-lg">
                    <i class="fab fa-linkedin"></i>
                  </a>
                  <a href={`mailto:${member.email}`} className="text-gray-300 hover:text-white transition text-lg">
                  <i class="fas fa-envelope"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
