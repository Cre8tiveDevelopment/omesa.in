import { useAirtable } from "../Context/AirTableContext";
import { useState, useEffect } from "react";

//Company data
const trustedCompanies = [
  {
    id: 1,
    name: "Company One",
    logo: "/Clients/Omesa_Clients1.png"
  },
  {
    id: 2,
    name: "Company Two",
    logo: "/Clients/Omesa_Client2.png"
  },

  {
    id: 3,
    name: "Company Four",
    logo: "/Clients/Omesa_Client4.png"
  },
  {
    id: 4,
    name: "Company Five",
    logo: "/Clients/Omesa_Client5.png"
  },
  {
    id: 5,
    name: "Company Six",
    logo: "/Clients/Omesa_Client6.png"
  },
  {
    id: 6,
    name: "Company Seven",
    logo: "/Clients/Omesa_Client7.png"
  },
  {
    id: 7,
    name: "Company Seven",
    logo: "/Clients/Omesa_Client8.png"
  },
  {
    id: 8,
    name: "Company Seven",
    logo: "/Clients/Omesa_Client9.png"
  },
  {
    id: 9,
    name: "Company Seven",
    logo: "/Clients/Omesa_Client10.png"
  }
];

export default function ClientSlider() {
  const { getTableData } = useAirtable();
  const [Logo, setLogo] = useState([]);

  // Fetch Airtable data
  useEffect(() => {
    const fetchData = async () => {
      const data = await getTableData("clientsLogo");
      const formatted = data.map((record) => ({
        id: record.id,
        ...record.fields
      }));
      // Sort by number

      setLogo(formatted);
    
    };
    fetchData();
  }, [getTableData]);

  const extendedCompanies = [...trustedCompanies, ...trustedCompanies]; // Duplicate for loop

  return (
    <div className="w-full bg-[#010616] py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-2">
        <h2 className="text-2xl md:text-3xl font-[heading] text-white mb-12 text-center md:text-left">
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
                    className="h-12 w-auto object-contain opacity-80 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
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
        position: relative;
        width: 100%;
      }
      .marquee-content {
        display: flex;
        gap: 3rem;
        width: max-content;
        animation: scroll-marquee 27s linear infinite;
      }
      .logo-item {
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
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
  );
}
