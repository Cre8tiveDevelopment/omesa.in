import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
   const [resourcesOpen, setResourcesOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: "About Us", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Portfolio", path: "/portfolio" },
  ];

  const isHomePage = location.pathname === "/";

  useEffect(() => {
    if (!isHomePage) return;
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  const headerBgClass = isHomePage
    ? isScrolled
      ? "bg-gradient-to-r from-[#03051E] via-[#0e1f4b] to-[#1D53B7]"
      : "bg-transparent"
    : "bg-gradient-to-r from-[#03051E] via-[#0e1f4b] to-[#1D53B7]";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${headerBgClass}`}
    >
      <div className="flex items-center justify-between px-8 lg:px-24 py-9">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link to="/">
            <img
              className="h-10"
              src="/omesa-logo-white.png"
              alt="Logo"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6 relative text-fs-18 font-[textFont] text-white">
          {navItems.map(({ label, path }) => (
            <NavLink
              key={label}
              to={path}
              className={({ isActive }) =>
                `transition-colors ${
                  isActive ? "text-gray-100 font-normal" : "text-gray-400"
                }`
              }
            >
              {label}
            </NavLink>
          ))}

          <div className="group relative">
            <span className="text-gray-400 cursor-pointer transition-colors flex      items-center gap-1">
              Resources <i className="fas fa-chevron-down text-sm"></i>
            </span>
            <div className="absolute top-full left-0 mt-3 w-40 rounded-lg opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 group-hover:visible invisible transform transition-all duration-300 ease-out z-50 bg-white py-2 shadow-lg text-fs-18">
              <NavLink
                to="/caseStudy"
                className={({ isActive }) =>
                  `block px-4 py-2 transition-all duration-200 ease-out ${
                    isActive
                      ? "text-gray-900 font-medium"
                      : "text-gray-600 hover:text-gray-900 font-normal"
                  }`
                }
              >
                Case Studies
              </NavLink>
              <NavLink
                to="/upcomingEvents"
                className={({ isActive }) =>
                  `block px-4 py-2 transition-all duration-200 ease-out ${
                    isActive
                      ? "text-gray-900 font-medium"
                      : "text-gray-600 hover:text-gray-900 font-normal"
                  }`
                }
              >
                Upcoming Events
              </NavLink>
            </div>
          </div>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `transition-colors ${
                isActive ? "text-gray-100 font-normal" : "text-gray-400"
              }`
            }
          >
            Contact Us
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white relative z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <i className="fas fa-bars text-xl"></i>
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Sidebar */}
       <div
      className={`lg:hidden fixed top-0 left-0 h-full w-80 bg-slate-900 transform transition-transform duration-300 ease-in-out z-50 ${
        isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between p-6 border-b border-slate-700">
        <Link to="/">
            <img
              className="h-10"
              src="/omesa-logo-white.png"
              alt="Logo"
            />
          </Link>
        {/* <img className="h-10" src="/omesa-logo-white.png" alt="Logo" /> */}
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          className="text-white"
        >
          <i className="fas fa-times text-xl"></i>
        </button>
      </div>

      <nav className="flex flex-col p-6 space-y-4 text-white">
        {navItems.map(({ label, path }) => (
          <Link
            key={label}
            to={path}
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-lg hover:text-blue-200 transition-colors"
          >
            {label}
          </Link>
        ))}

        {/* Resources dropdown */}
        <div>
          <button
            onClick={() => setResourcesOpen(!resourcesOpen)}
            className="w-full flex items-center justify-between text-lg text-gray-300 hover:text-blue-200 transition-colors"
          >
            <span>Resources</span>
            <i
              className={`fas ${
                resourcesOpen ? "fa-chevron-up" : "fa-chevron-down"
              } text-sm`}
            />
          </button>

          {/* Dropdown content */}
          {resourcesOpen && (
            <div className="mt-2 ml-4 py-2 ">
              <NavLink
                to="/caseStudy"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setResourcesOpen(false);
                }}
                className={({ isActive }) =>
                  `block px-4 py-2 text-sm transition-all duration-200 ${
                    isActive
                      ? "text-white font-medium text-lg"
                      : "text-white "
                  }`
                }
              >
                Case Studies
              </NavLink>
              <NavLink
                to="/upcomingEvents"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setResourcesOpen(false);
                }}
                className={({ isActive }) =>
                  `block px-4 py-2 text-sm transition-all duration-200 ${
                    isActive
                      ? "text-white font-medium"
                      : "text-white "
                  }`
                }
              >
                Upcoming Events
              </NavLink>
            </div>
          )}
        </div>

        <Link
          to="/contact"
          onClick={() => setIsMobileMenuOpen(false)}
          className="text-lg hover:text-blue-200 transition-colors"
        >
          Contact Us
        </Link>
      </nav>
    </div>
    </header>
  );
};

export default Header;
