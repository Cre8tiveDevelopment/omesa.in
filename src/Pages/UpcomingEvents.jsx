
import { useAirtable } from "../Context/AirTableContext";
import { useState,useEffect } from "react";
export default function UpcomingEvents() {

  // const events = [
  //   {
  //     id: 1,
  //     title: "Gazer Studio Pop Up - Houston",
  //     description: "Join us in Houston, TX. Explore our Gazer on display and meet our team.",
  //     image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1112&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     date: "Nov 2, 2024 - Nov 16, 2024",
  //     venue: "The Texas Expo Center",
  //     address: "7469 Westheimer Rd",
  //     location: "Houston, TX 77063",
  //     country: "US",
  //   },
  //   {
  //     id: 2,
  //     title: "Gazer Studio Pop Up - NeYork",
  //     description: "Join us in NeYork. Explore our Gazer on display and meet our team.",
  //     image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1112&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     date: "Oct 05, 2024 - Oct 12, 2024",
  //     venue: "The NeYork Expo Center",
  //     address: "7469 Westheimer Rd",
  //     location: "NeYork, 047760",
  //     country: "US",
  //   },
  //   {
  //     id: 3,
  //     title: "Gazer Studio Pop Up - Vegans",
  //     description: "Join us in Vegans. Explore our Gazer on display and meet our team.",
  //     image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1112&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     date: "Aug 16, 2023 - Aug 30, 2023",
  //     venue: "The Vegans Expo Center",
  //     address: "4501 Westheimer Rd",
  //     location: "Vegans, 017841",
  //     country: "US",
  //   },
  //   {
  //     id: 4,
  //     title: "Gazer Studio Pop Up - Minesota",
  //     description: "Join us in Minesota. Explore our Gazer on display and meet our team.",
  //     image: "/placeholder.svg?height=300&width=400",
  //     date: "Sep 8, 2024 - Sep 22, 2024",
  //     address: "3201 Westheimer Rd",
  //     location: "Minesota, 055432",
  //     country: "US",
  //   },
  //   {
  //     id: 5,
  //     title: "Gazer Studio Pop Up - Clayten",
  //     description: "Join us in Clayten. Explore our Gazer on display and meet our team.",
  //     image: "/placeholder.svg?height=300&width=400",
  //     date: "Jul 14, 2024 - Jul 28, 2024",
     
  //     address: "8901 Westheimer Rd",
  //     location: "Clayten, 029876",
  //     country: "US",
  //   },
  //   {
  //     id: 6,
  //     title: "Gazer Studio Pop Up - Lapland",
  //     description: "Join us in Lapland. Explore our Gazer on display and meet our team.",
  //     image: "/placeholder.svg?height=300&width=400",
  //     date: "Dec 3, 2024 - Dec 17, 2024",
    
  //     address: "1234 Downtown Ave",
  //     location: "Lapland, 098765",
  //     country: "US",
  //   },
  // ];

   const { getTableData } = useAirtable();
  const [Events, setEvents] = useState([]);

  // fetching portfolio airtable data
  useEffect(() => {
    const fetchData = async () => {
      const data = await getTableData("UpcomingEvents");
      setEvents(data);
      console.log("fetched Events details", data);
    };

    fetchData();
  }, [getTableData]);

  return (
    <div className="min-h-screen bg-[#010616] mt-20">
      <main className="px-6 py-12 max-w-7xl mx-auto">
       

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Events.map((event) => (
            <div key={event.id} className="bg-white rounded shadow-none border-0">
              <div className=" overflow-hidden mb-1">
                <img
                  src={event.image|| "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1112&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                  alt={event.fields.Title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-4">
                <h3 className="font-[HeadingText] text-fs-24 font-medium leading-tight">{event.fields.Title}</h3>
                <p className="text-fs-16 font-[TextFont] font-medium text-gray-900  leading-relaxed">{event.fields.description}</p>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-xs font-semibold text-gray-500 tracking-wider mb-2">TIME</h4>
                    <div className="text-sm space-y-1">
                      <p className="font-medium">{event.fields.Date}</p>
                      
                      <p className="text-gray-900 text-fs-16 font-[TextFont] font-medium">{event.fields.Address}</p>
                     
                     
                    </div>
                  </div>

                  <button
                    className="p-0 h-auto font-semibold text-xs tracking-wider hover:bg-transparent group text-blue-600 flex items-center"
                  >
                    VIEW LOCATION
                    <i className="fas fa-plus ml-2 text-xs group-hover:rotate-90 transition-transform duration-200"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
