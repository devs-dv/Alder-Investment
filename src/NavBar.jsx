import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { MdArrowOutward } from "react-icons/md";

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
    <header className="z-50 bg-black/50 px-4 py-4">
      <div className="flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-8">
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
          <nav className="hidden lg:block ml-[66px]">
            <div className="flex gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  className="text-white uppercase hover:text-gray-300"
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

        {/* Language Selector and Menu */}
        <div className="flex justify-between items-center gap-[74px]">
          <div>
            <div className="hidden lg:flex text-white">
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
            <button
              className="lg:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu size={24} />
            </button>
          </div>
          <img
            src="logo.png"
            className="w-32 filter brightness-0 invert hidden md:block"
          />
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 lg:hidden">
          <div className="p-4">
            <button
              className="text-white mb-8"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X size={24} />
            </button>
            <nav className="flex flex-col gap-4 items-start">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  className="text-white text-xl uppercase"
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
              <div className="absolute bottom-10 p-4">
                <div className="text-white gap-2 underline flex flex-col">
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
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
