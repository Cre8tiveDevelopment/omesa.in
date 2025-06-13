import { useState } from "react";


function ContactForm() {
    // form variables 
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phoneNumber: "",
    subject: "",
    comments: "",
  });

  const [errors, setErrors] = useState({
    firstName: false,
    email: false,
    subject: false,
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: false }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {
      firstName: !formData.firstName.trim(),
      email: !formData.email.trim(),
      subject: !formData.subject.trim(),
    };
    setErrors(newErrors);

    if (!Object.values(newErrors).some((error) => error)) {
      console.log("Form submitted:", formData);
    }
  };
  return (
   <>
    <div id="main">

         {/* main area */}

    <div className=" bg-slate-950 contact-form flex justify-center items-center">
        <div className=" w-[70%] lg:m-16 md:mt-10 sm:mt-10 bg-slate-950 p-4 md:p-8 text-white border-2 border-gray-500">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              {/* Left Side - Info Card */}
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-lg p-8 md:p-12 h-full flex flex-col justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent rounded-lg"></div>
                  <div className="relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                      Let's work together
                    </h2>
                    <p className="text-blue-100 text-lg leading-relaxed">
                      Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
                      imperdiet a, venenatis vitae.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Side - Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block mb-2 font-medium">Name *</label>
                  <input
                    type="text"
                    className={`w-full p-3 rounded-md bg-slate-800 border ${errors.firstName ? "border-red-500" : "border-gray-600"
                      } text-white`}
                    placeholder="Enter your name"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                  />
                </div>
                <div>
                  <label className="block mb-2 font-medium">Email *</label>
                  <input
                    type="email"
                    className={`w-full p-3 rounded-md bg-slate-800 border ${errors.email ? "border-red-500" : "border-gray-600"
                      } text-white`}
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                  />
                </div>
                <div>
                  <label className="block mb-2 font-medium">Phone</label>
                  <input
                    type="text"
                    className="w-full p-3 rounded-md bg-slate-800 border border-gray-600 text-white"
                    placeholder="Enter your phone number"
                    value={formData.phoneNumber}
                    onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                  />
                </div>
                <div>
                  <label className="block mb-2 font-medium">Subject *</label>
                  <input
                    type="text"
                    className={`w-full p-3 rounded-md bg-slate-800 border ${errors.subject ? "border-red-500" : "border-gray-600"
                      } text-white`}
                    placeholder="Enter subject"
                    value={formData.subject}
                    onChange={(e) => handleInputChange("subject", e.target.value)}
                  />
                </div>
                <div>
                  <label className="block mb-2 font-medium">Comments</label>
                  <textarea
                    className="w-full p-3 rounded-md bg-slate-800 border border-gray-600 text-white min-h-[120px]"
                    placeholder="Enter your message"
                    value={formData.comments}
                    onChange={(e) => handleInputChange("comments", e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-full transition"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>

      </div>
      {/* Contact Info Icons */}
      <div className="flex justify-center items-center bg-slate-950 ">
        <div className="  p-6 grid h-60 w-[70%]  sm:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-300">
          <div className="flex items-center border-2 border-slate-800 gap-4">
            <i className="fas fa-phone-alt text-3xl font-semibold text-blue-400 p-6"></i>
            <span>+1 123 456-7890</span>
          </div>
          <div className="flex items-center border-2 border-slate-800 gap-4">
            <i className="fas fa-envelope text-xl text-blue-400 p-6"></i>
            <span>@company.com</span>
          </div>
          <div className="flex items-center border-2 border-slate-800 gap-4">
            <i className="fas fa-map-marker-alt text-xl text-blue-400 p-6"></i>
            <span>1234 Main City, Country</span>
          </div>
        </div>
      </div>
      {/* map section */}
      <div className="px-4 pb-0">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-gray-200 rounded-t-2xl overflow-hidden h-96">
            <iframe
              src="https://www.google.com/maps/search/+R-8,+Ground+Floor+(Gate+no.+2)+Nehru+Enclave+New+Delhi+110019+India/@28.5414721,77.2373329,15z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI1MDYwNC4wIKXMDSoASAFQAw%3D%3D"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale"
            />
          </div>
        </div>
      </div>
    </div>

   </>
  )
}

export default ContactForm
