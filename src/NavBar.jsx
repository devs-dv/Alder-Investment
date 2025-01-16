import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { MdArrowOutward } from "react-icons/md";
import { DesignLogo } from "./icons";

const NavBar = ({ language, setLanguage, setLoading }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigateAndScroll = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { name: "Our Philosophy", id: "philosophy" },
    { name: "Our Services", id: "services" },
    { name: "Our People", id: "people" },
    { name: "News", path: "/news" },
    { name: "Contact Us", id: "contact" },
  ];

  return (
    <header className="flex items-center h-[72px] px-4 transition-colors duration-200 border-b bg-black/50">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-4 md:gap-24">
          <div>
            <Link
              to="/"
              className="flex items-center"
              onClick={() => {
                if (location.pathname !== "/") {
                  setLoading(true);
                  setTimeout(() => setLoading(false), 3000);
                }
              }}
            >
              <img
                src="/nav logo_white.png"
                className="md:w-[300px] w-[250px]"
                alt="Logo"
              />
            </Link>
          </div>
          <nav className="hidden lg:flex items-center">
            <div className="flex items-center gap-7">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  className="text-white uppercase cursor-pointer hover:text-gray-300 transition-colors duration-200 p-0 m-0"
                  style={{ fontWeight: "300" }}
                  onClick={() => {
                    if (link.path) {
                      navigate(link.path);
                    } else {
                      handleNavigateAndScroll(link.id);
                    }
                  }}
                >
                  {language ? link.name : link.name}
                </button>
              ))}
            </div>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex gap-20 text-white">
            <div>
              <button
                onClick={() => setLanguage(true)}
                className={language ? "font-bold" : ""}
              >
                ENG
              </button>
              /
              <button
                onClick={() => setLanguage(false)}
                className={!language ? "font-bold" : ""}
              >
                KR
              </button>
            </div>
            <DesignLogo className="w-[115px] h-auto text-white hidden md:block" />
          </div>

          <button
            className="lg:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu size={30} />
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 flex flex-col items-start justify-start pt-20 px-6 overflow-y-auto h-full">
          <button
            className="absolute top-6 right-6 text-white"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X size={24} />
          </button>
          <nav className="flex flex-col items-start gap-3 w-full">
            {navLinks.map((link) => (
              <button
                key={link.name}
                className="text-white text-2xl uppercase hover:text-gray-300 transition-colors duration-200 w-full text-left"
                onClick={() => {
                  if (link.path) {
                    navigate(link.path);
                  } else {
                    handleNavigateAndScroll(link.id);
                  }
                  setMobileMenuOpen(false);
                }}
              >
                {language ? link.name : link.name}
              </button>
            ))}
          </nav>
          <div className="text-white gap-2 underline flex flex-col absolute bottom-10">
            <div className="text-white">
              <button
                className={` ${language ? "" : "text-[#90908D]"}`}
                onClick={() => setLanguage(true)}
              >
                ENG
              </button>
              /
              <button
                className={` ${language ? "text-[#90908D]" : ""}`}
                onClick={() => setLanguage(false)}
              >
                KR
              </button>
            </div>
            <a
              href="https://www.linkedin.com/in/alder-partners-674336306/"
              className="underline"
            >
              <div className="flex gap-3">
                LINKEDIN <MdArrowOutward className="text-xl" />
              </div>
            </a>
            <Link to="/privacy" className="underline text-nowrap">
              PRIVACY POLICY
            </Link>
            <Link to="/terms" className="underline text-nowrap">
              TERMS OF CONDITIONS
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
