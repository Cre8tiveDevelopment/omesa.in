
//Company data
const trustedCompanies = [
  {
    id: 1,
    name: "Company One",
    logo: "/Clients/Omesa_Clients1.png",
  },
  {
    id: 2,
    name: "Company Two",
    logo: "/Clients/Omesa_Client2.png",
  },
  
  {
    id: 3,
    name: "Company Four",
    logo: "/Clients/Omesa_Client4.png",
  },
  {
    id: 4,
    name: "Company Five",
    logo: "/Clients/Omesa_Client5.png",
  },
  {
    id: 5,
    name: "Company Six",
    logo: "/Clients/Omesa_Client6.png",
  },
  {
    id: 6,
    name: "Company Seven",
    logo: "/Clients/Omesa_Client7.png",
  },
   {
    id: 7,
    name: "Company Seven",
    logo: "/Clients/Omesa_Client8.png",
  },
   {
    id: 8,
    name: "Company Seven",
    logo: "/Clients/Omesa_Client9.png",
  },
   {
    id: 9,
    name: "Company Seven",
    logo: "/Clients/Omesa_Client10.png",
  },
]

export default function ClientSlider() {
  const extendedCompanies = [...trustedCompanies, ...trustedCompanies] // Duplicate for loop

  return (
   <div className="w-full bg-[#010616] py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-normal bg-gradient-to-r from-gray-400 via-neutral-300 to-slate-200 bg-clip-text text-transparent mb-12 text-center md:text-left">
          Trusted by Companies
        </h2>

        <div className="relative overflow-hidden">
          {/* Marquee wrapper */}
          <div className="marquee-track">
            <div className="marquee-content">
              {extendedCompanies.map((company, index) => (
                <div key={`${company.id}-${index}`} className="logo-item">
                  <img
                    src={company.logo}
                    alt={`${company.name} logo`}
                    className="h-14 w-auto object-contain opacity-100 grayscale transition duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS */}
      <style>{`
        .marquee-track {
          overflow: hidden;
          white-space: nowrap;
        }
        .marquee-content {
          display: flex;
          animation: scroll-marquee 20s linear infinite;
        }
        .logo-item {
          flex-shrink: 0;
          padding: 0 2rem;
          display: flex;
          align-items: center;
        }
        @keyframes scroll-marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  )
}
