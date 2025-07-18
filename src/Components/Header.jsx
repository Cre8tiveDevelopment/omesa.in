import React, { useState } from "react";
import { Link, useLocation, NavLink } from "react-router-dom";

const Header = () => {
  // Removed "Contact Us" from navItems
  const navItems = [
    { label: "About Us", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Portfolio", path: "/portfolio" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="relative z-50 bg-gradient-to-r from-[#03051E] via-[#0e1f4b] to-[#1D53B7]">
      <div className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#03051E] via-[#0e1f4b] to-[#1D53B7]">
        <div className="flex items-center justify-between px-8 lg:px-24 py-9">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <span className="text-white text-xl font-extrabold tracking-wider">
              <Link to="/">
                <img
                  className="text-black h-10 px-7 "
                  src="https://omesa.in/wp-content/uploads/2019/07/omesa-logo-white-50.png"
                  alt=""
                />
              </Link>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center text-xl space-x-6 relative text-fs-18 font-[textFont]">
            {navItems.map(({ label, path }) => (
              <NavLink
                key={label}
                to={path}
                className={({ isActive }) =>
                  `transition-colors ${isActive ? "text-gray-100 font-normal" : "text-gray-400"}`
                }
              >
                {label}
              </NavLink>
            ))}

            {/* Resources Dropdown */}
            <div className="group relative">
              <span className="text-gray-400 cursor-pointer transition-colors flex items-center gap-1">
                Resources <i className="fas fa-chevron-down text-sm"></i>
              </span>
              <div className="absolute top-full left-0 mt-3 w-40 rounded-lg opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 group-hover:visible invisible transform transition-all duration-300 ease-out z-50 bg-white py-2 shadow-lg text-fs-18">
                <NavLink
                  to="/caseStudy"
                  className={({ isActive }) =>
                    `block px-4 py-2 transition-all duration-200 ease-out ${isActive ? "text-gray-900 font-medium" : "text-gray-600 hover:text-gray-900 font-normal"}`
                  }
                >
                  Case Studies
                </NavLink>

                <NavLink
                  to="/upcoming-events"
                  className={`block px-4 py-2 text-gray-600 hover:text-gray-900 transition-all duration-200 ease-out ${location.pathname === "/upcoming-events" ? "text-gray-900 font-medium" : "font-normal"}`}
                >
                  Upcoming Events
                </NavLink>
              </div>
            </div>

            {/* ✅ Contact Us moved here, after Resources */}
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `transition-colors ${isActive ? "text-gray-100 font-normal" : "text-gray-400"}`
              }
            >
              Contact Us
            </NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-black z-50 relative"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm transition-all duration-300 z-40 ${isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Sidebar */}
      <div
        className={`lg:hidden fixed top-0 left-0 h-full w-80 bg-slate-900 transform transition-transform duration-300 ease-in-out z-50 ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-700">
          <div className="flex items-center space-x-2">
            <span className="text-white text-xl font-normal tracking-wider">
              <img
                className="text-white h-10 px-0"
                src="https://omesa.in/wp-content/uploads/2019/07/omesa-logo-white-50.png"
                alt=""
              />
            </span>
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-black transition-colors"
            aria-label="Close menu"
          >
            <i className="fas fa-times text-xl text-white"></i>
          </button>
        </div>

        {/* Sidebar Navigation */}
        <nav className="flex flex-col p-6 space-y-6">
          {navItems.map(({ label, path }) => (
            <Link
              key={label}
              to={path}
              className="text-white text-lg hover:text-blue-200 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {label}
            </Link>
          ))}

          {/* Resources Title in Mobile */}
          <div className="flex items-center justify-between text-white text-lg">
            <span>Other</span>
            <i className="fas fa-chevron-down text-sm"></i>
          </div>

          {/* ✅ Contact Us also shown last in mobile */}
          <Link
            to="/contact"
            className="text-white text-lg hover:text-blue-200 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
