import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

function ContactForm() {

  const contactInfo = [
    {
      label: "Email Us",
      value: "hello@example.com",
      href: "mailto:hello@example.com",
      iconClass: "fas fa-envelope",
      bgGradient: "bg-gradient-to-r from-[#03051E] via-[#0e1f4b] to-[#1D53B7]",
      gradient: "bg-gradient-to-r from-[#03051E] via-[#0e1f4b] to-[#1D53B7]",
    },
    {
      label: "Call Us",
      value: "+1 234 567 890",
      href: "tel:+1234567890",
      iconClass: "fas fa-phone",
      bgGradient: "bg-gradient-to-r from-[#03051E] via-[#0e1f4b] to-[#1D53B7]",
      gradient: "bg-gradient-to-r from-[#03051E] via-[#0e1f4b] to-[#1D53B7]",
    },
    {
      label: "Visit Office",
      value: "123 Business Rd",
      href: "https://maps.google.com",
      iconClass: "fas fa-map-marker-alt",
      bgGradient: "bg-gradient-to-r from-[#03051E] via-[#0e1f4b] to-[#1D53B7]",
      gradient: "bg-gradient-to-r from-[#03051E] via-[#0e1f4b] to-[#1D53B7]",
    },
  ];



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
      <div id="main h-screen w-7xl">

        {/* main area */}

        <div className=" bg-slate-950 contact-form flex justify-center items-center">
          <div
            className="w-full sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] 
                    h-fit 
                    mx-auto
                    mt-4 sm:mt-6 md:mt-8 lg:mt-12 xl:mt-16
                    mb-4 sm:mb-6 md:mb-8 lg:mb-12 xl:mb-16
                    bg-slate-950 
                    p-3 sm:p-4 md:p-6 lg:p-8
                    text-white 
                    border-2 border-gray-900 rounded-md"
          >
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12 lg:mb-16">
                {/* Left Side - Info Card */}
                <div className="relative order-2 lg:order-1">
                  <div
                    className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-lg 
                            p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 
                            h-full flex flex-col justify-center
                            min-h-[200px] sm:min-h-[250px] lg:min-h-[300px]"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent rounded-lg"></div>
                    <div className="relative z-10">
                      <h2
                        className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-[heading] mb-3 sm:mb-4 md:mb-6"
                      >
                        Let's work together
                      </h2>
                      <p
                        className="text-blue-100 
                              text-sm sm:text-base md:text-lg 
                              leading-relaxed font-[textFont]"
                      >
                        Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
                        imperdiet a, venenatis vitae.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Side - Form */}
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 order-1 lg:order-2">
                  <div>
                    <label className="block mb-2 font-medium text-sm sm:text-base">Name *</label>
                    <input
                      type="text"
                      className={`w-full p-2 sm:p-3 rounded-md bg-slate-800 border 
                           text-sm sm:text-base
                           ${errors.firstName ? "border-red-500" : "border-gray-600"} text-white`}
                      placeholder="Enter your name"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="block mb-2 font-medium text-sm sm:text-base">Email *</label>
                    <input
                      type="email"
                      className={`w-full p-2 sm:p-3 rounded-md bg-slate-800 border 
                           text-sm sm:text-base
                           ${errors.email ? "border-red-500" : "border-gray-600"} text-white`}
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="block mb-2 font-medium text-sm sm:text-base">Phone</label>
                    <input
                      type="text"
                      className="w-full p-2 sm:p-3 rounded-md bg-slate-800 border border-gray-600 text-white
                          text-sm sm:text-base"
                      placeholder="Enter your phone number"
                      value={formData.phoneNumber}
                      onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="block mb-2 font-medium text-sm sm:text-base">Subject *</label>
                    <input
                      type="text"
                      className={`w-full p-2 sm:p-3 rounded-md bg-slate-800 border 
                           text-sm sm:text-base
                           ${errors.subject ? "border-red-500" : "border-gray-600"} text-white`}
                      placeholder="Enter subject"
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="block mb-2 font-medium text-sm sm:text-base">Comments</label>
                    <textarea
                      className="w-full p-2 sm:p-3 rounded-md bg-slate-800 border border-gray-600 text-white 
                          min-h-[100px] sm:min-h-[120px]
                          text-sm sm:text-base"
                      placeholder="Enter your message"
                      value={formData.comments}
                      onChange={(e) => handleInputChange("comments", e.target.value)}
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white 
                        py-2 sm:py-3 px-4 sm:px-6 
                        rounded-full transition
                        text-sm sm:text-base
                        w-full sm:w-auto"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>

        </div>
        {/* Contact Info Icons */}
        <section className="py-16 px-4 bg-[#010616] ">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-4xl font-[heading] bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent mb-4">
                Get In Touch
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto font-[textFont]">
                Ready to start your project? Contact us through any of these channels
              </p>
            </motion.div>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="group relative overflow-hidden"
                >
                  <div className="relative p-6 rounded-2xl border border-slate-800/50 bg-slate-900/50 backdrop-blur-sm hover:border-slate-700/50 transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-slate-900/50">
                    {/* Background Gradient */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${item.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`}
                    />

                    {/* Content */}
                    <div className="relative flex items-center space-x-4">
                      {/* Icon Container */}
                      <div
                        className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} p-3 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 flex items-center justify-center`}
                      >
                        <i className={`${item.iconClass} text-white text-xl`}></i>
                      </div>

                      {/* Text Content */}
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-slate-400 mb-1 group-hover:text-slate-300 transition-colors font-[textFont]">
                          {item.label}
                        </p>
                        <p className="text-lg font-semibold text-white group-hover:text-white transition-colors truncate font-[textFont]">
                          {item.value}
                        </p>
                      </div>
                    </div>

                    {/* Hover Effect Border */}
                    <div
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none`}
                    />
                  </div>
                </motion.a>
              ))}
            </div>


          </div>
        </section>

        {/* map section */}
        <div className="w-full ">
          <div className="w-full bg-gray-200 overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7009.686445616255!2d77.24559302495355!3d28.54443168807697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3d01615f8e9%3A0xe12d8b739eeda3f1!2sNehru%20Enclave%2C%20Chittaranjan%20Park%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1750058527049!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[750px] border-0 shadow-md"
            />
          </div>
        </div>

      </div>



    </>
  )
}

export default ContactForm
