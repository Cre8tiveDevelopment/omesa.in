
import { useState, useEffect} from "react";
import { useAirtable } from "../Context/AirTableContext";
import { useParams } from "react-router-dom";

const ServiceDetailPage = () => {

  const { id } = useParams("id"); // get id from URL
  const { getTableData } = useAirtable();
  const [service, setService] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [animateLines, setAnimateLines] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimateLines(true), 100);
  }, []);

  useEffect(() => {
    const fetchService = async () => {
      const data = await getTableData("services");
      const matchedService = data.find((item) => item.id === id);
      if (matchedService) {
        setService({ id: matchedService.id, ...matchedService.fields });
      }
    };

    fetchService();
  }, [id, getTableData]);

  if (!service) {
    return <div className="text-white p-10">Loading service details...</div>;
  }


  
  return (
    <>
      <div className="h-full w-full bg-[#010616] ">

        <div className="h-60 bg-gradient-to-r from-[#03051E] via-[#0e1f4b] to-[#1D53B7]">

          {/* <h1 className="text-4xl sm:text-2xl md:text-5xl lg:text-4xl xl:text-5xl 
                     px-4 sm:px-6 md:px-8 lg:px-12 xl:px-32
                     py-32 sm:py-10 md:py-40 lg:py-16 xl:py-48
                     mb-4 sm:mb-6 md:mb-8
                     font-normal text-white 
                     bg-gradient-to-r from-gray-500 via-neutral-300 to-slate-200 
                     bg-clip-text text-transparent
                     flex items-center">
            <span
              className={`block mb-1 transform transition-all duration-700 ease-out ${animateLines ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
            >
              {service.Title}
            </span>

          </h1> */}
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content Section */}
            <div className="lg:col-span-2 space-y-8">
              {/* Hero Image */}
              <div className="relative">
                <img
                  src="https://kit.wof-pack.com/sirion/wp-content/uploads/sites/6/2025/02/developers-searching-for-bugs-1024x682.jpg"
                  alt="Business meeting and collaboration"
                  className="w-full h-[400px] object-cover rounded-lg"
                />
              </div>

              {/* Description */}
              <div className="space-y-4">
                <h3 className="text-gray-300 bg-gradient-to-r from-gray-500 via-neutral-300 to-slate-200 bg-clip-text text-transparent  leading-loose font-[HeadingFont] text-3xl">{service.OneLiner}</h3>
                <p className="text-gray-300 leading-loose text-lg">
                 {service.Long_Description}
                </p>
              </div>

              {/* Section Title */}
              <div>
                <h2 className="text-2xl md:text-3xl font-[HeadingFont] text-gray-300 mb-6">Service Related Images</h2>
              </div>

              {/* Related Service Images */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <img
                    src="https://kit.wof-pack.com/sirion/wp-content/uploads/sites/6/2025/02/developers-searching-for-bugs-1024x682.jpg"
                    alt="Service related image 1"
                    className="w-full h-[250px] object-cover rounded-lg"
                  />
                </div>
                <div className="relative">
                  <img
                    src="https://kit.wof-pack.com/sirion/wp-content/uploads/sites/6/2025/02/developers-searching-for-bugs-1024x682.jpg"
                    alt="Service related image 2"
                    className="w-full h-[250px] object-cover rounded-lg"
                  />
                </div>
              </div>

              {/* Inquiry Form */}
              <div className="bg-slate-900 border border-slate-800 rounded-lg">
                <div className="p-6">
                  <h3 className="text-xl font-normal text-white mb-4">Send Us An Inquiry</h3>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        placeholder="Your Name"
                        className="bg-slate-800 border border-slate-700 text-white placeholder:text-gray-400 p-2 rounded"
                      />
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="bg-slate-800 border border-slate-700 text-white placeholder:text-gray-400 p-2 rounded"
                      />
                    </div>
                    <input
                      placeholder="Subject"
                      className="bg-slate-800 border border-slate-700 text-white placeholder:text-gray-400 p-2 rounded w-full"
                    />
                    <textarea
                      placeholder="Your Message"
                      rows={4}
                      className="bg-slate-800 border border-slate-700 text-white placeholder:text-gray-400 p-2 rounded w-full"
                    />
                    <button
                      type="submit"
                      className="bg-gradient-to-r from-[#03051E] via-[#0e1f4b] to-[#1D53B7] text-gray-400 font-semibold px-4 py-2 rounded"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Featured News */}
              <div className="bg-slate-900 border border-slate-800 rounded-lg">
                <div className="p-6">
                  <h3 className="text-xl font-[HeadingFont] text-gray-300 mb-6">Related Services</h3>
              
                  <ul className="list-disc ml-5 text-gray-300">
  {service.Related_services?.split("\n").map((item, index) => (
    <li className="text-gray-300 text-xl font-normal py-2" key={index}>{item}</li>
  ))}
</ul>
                </div>
              </div>



              {/* Contact Info */}
              <div className="bg-gradient-to-r from-[#03051E] via-[#0e1f4b] to-[#1D53B7] rounded-lg">
                <div className="p-6">
                  <h3 className="text-xl font-[HeadingFont] text-white mb-4">Have Any Question?</h3>
                  <p className="text-gray-400 text-base mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-300">
                      <i className="fas fa-phone-alt w-4 h-4 mr-3 text-gray-300"></i>
                      <span className="text-lg">(+62) 81 322 1467</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <i className="fas fa-envelope w-4 h-4 mr-3 text-gray-300"></i>
                      <span className="text-lg">support@domain.com</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default ServiceDetailPage
