import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Courses", to: "/courses" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // tells us the current URL path
  const location = useLocation();

  return (
    <nav className="bg-slate-900 text-white shadow-md relative z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="shrink-0 flex items-center gap-2">
            <div className="w-8 h-8 rounded-md bg-teal-400 flex items-center justify-center font-bold text-slate-900">
              R
            </div>
            <span className="font-semibold text-lg tracking-tight">
              ReactAcademy
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === link.to
                    ? "bg-slate-800 text-teal-400"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/signup"
              className="ml-4 bg-teal-400 text-slate-900 px-4 py-2 rounded-md text-sm font-semibold hover:bg-teal-300 transition-colors"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile menu icon */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Toggle navigation menu"
            >
              <FontAwesomeIcon icon={isOpen ? faXmark : faBars} size="lg" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      {isOpen && (
        <div className="md:hidden px-4 pt-2 pb-4 space-y-1 border-t border-slate-800">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                location.pathname === link.to
                  ? "bg-slate-800 text-teal-400"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          {/* Mobile sign up */}
          <Link
            to="/signup"
            className=" bg-teal-400 text-slate-900 px-4 py-2 rounded-md text-sm font-semibold hover:bg-teal-300 transition-colors"
          >
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
