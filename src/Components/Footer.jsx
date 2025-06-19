
export default function Footer() {
  return (
    <footer

      className={`bg-gradient-to-t from-[#090D18] via-[#14161C] to-[#18191D]  text-white xl:py-16 transition-opacity duration-700 px-20`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Top Section */}
        <div className="border-b border-gray-800 pb-12 mb-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <h2 className="text-2xl md:text-5xl lg:text-5xl font-semibold max-w-xl mb-8 md:mb-0 bg-gradient-to-r from-gray-500 via-neutral-400 to-slate-200 bg-clip-text text-transparent">
              Let's begin the project together with us
            </h2>

            <div
              className="w-28 h-28 flex items-center justify-center rounded-full border border-gray-600  transition-all duration-300 cursor-pointer hover:rotate-[-45deg] transform"
            >
              <i className="fa solid fa-arrow-right text-white text-4xl transition-transform duration-300"></i>
            </div>

          </div>
        </div>

        {/* Middle Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Logo and Social as */}
          <div className="col-span-1 lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-3xl font-bold mb-1">OMESA</h3>
              <p className="text-lg text-gray-400">Sparks of creativity</p>
            </div>
            <div>
              <p className="mb-4 text-gray-400">Follow our social media:</p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-gray-400 transition-colors">
                  <i className="fab fa-instagram text-xl"></i>
                  <span className="sr-only">Instagram</span>
                </a>

                <a href="#" className="hover:text-gray-400 transition-colors">
                  <i className="fab fa-facebook text-xl"></i>
                  <span className="sr-only">Facebook</span>
                </a>

              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xl font-medium mb-6">Quick as</h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="hover:text-gray-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400 transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400 transition-colors">
                  Services
                </a>
              </li>
            </ul>
          </div>

          {/* Pages */}
          <div>
            <h4 className="text-xl font-medium mb-6">Pages</h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="hover:text-gray-400 transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400 transition-colors">
                  About Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            Copyright © {new Date().getFullYear()}
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Term & Services
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
