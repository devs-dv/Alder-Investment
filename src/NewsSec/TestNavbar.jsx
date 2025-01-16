import { DesignLogo } from "@/icons";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export function TestNavbar({ language, setLanguage, setLoading }) {
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
    <header className="sticky top-0 flex items-center px-4 h-[72px] transition-colors duration-200 z-[9999] backdrop-blur supports-[backdrop-filter]:bg-black/30 text-white">
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center gap-4 md:gap-24">
          <div className="">
            <div className="flex items-center">
              <Link
                to="/"
                className="flex items-center gap-4"
                onClick={() => {
                  if (location.pathname !== "/") {
                    setLoading(true);
                    setTimeout(() => setLoading(false), 3000);
                  }
                }}
              >
                <img
                  src="nav logo_white.png"
                  className="md:w-[300px] w-[250px] ml-px"
                  alt="Logo"
                />
              </Link>
            </div>
          </div>

          <nav className="hidden lg:flex items-center text-center gap-1 justify-center max-w-7xl">
            <div className="lg:flex justify-center items-center tracking-wide gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  className="uppercase cursor-pointer transition-colors duration-200 p-0 m-0 hover:text-gray-300 "
                  onClick={() => {
                    if (link.path) {
                      navigate(link.path);
                    } else {
                      handleNavigateAndScroll(link.id);
                    }
                  }}
                  style={{ fontWeight: "400" }}
                >
                  {language ? link.name : link.name}
                </button>
              ))}
            </div>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="fixed top-5 right-48 z-[52] px-4 py-1 hidden lg:block">
            <button
              className={`${language ? "font-bold" : "font-extralight"}`}
              onClick={() => setLanguage(true)}
            >
              ENG
            </button>
            /
            <button
              className={`${language ? "font-extralight" : "font-bold"}`}
              onClick={() => setLanguage(false)}
            >
              KR
            </button>
          </div>
          <div className="hidden lg:block mr-[1px]">
            <DesignLogo className="w-[115px] h-auto" />
          </div>
        </div>
      </div>
    </header>
  );
}
