import { DesignLogo, Logo } from "@/icons";
import { AnimatePresence, cubicBezier } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { MdArrowOutward } from "react-icons/md";

export function TestNavbar({ language, setLanguage, setLoading }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigateAndScroll = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const offset = 72; // Height of the navbar
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        const offset = 72; // Height of the navbar
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  const smoothEasing = cubicBezier(0.45, 0, 0.55, 1);

  const toggleBodyScroll = (disable) => {
    if (disable) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100%";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "";
      document.body.style.height = "";
      document.body.style.position = "";
      document.body.style.width = "";
    }
  };

  const mobileMenuVariants = {
    hidden: { y: "-100%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: smoothEasing,
      },
    },
    exit: {
      y: "-100%",
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: smoothEasing,
      },
    },
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
                  className="md:w-[300px] w-[250px] md:ml-px -ml-[4px] mb-[3px] md:mb-0"
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
                  style={{ fontWeight: "300" }}
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
          <button
            className="lg:hidden  text-white"
            onClick={() => {
              setMobileMenuOpen(!mobileMenuOpen);
              toggleBodyScroll(!mobileMenuOpen);
            }}
          >
            <Menu size={30} />
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <AnimatePresence>
          <motion.div
            className="fixed inset-0 z-50 bg-black/90 flex flex-col items-start justify-start pt-20 px-6 overflow-y-auto h-screen"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <button
              className="absolute top-6 right-6 text-white"
              onClick={() => {
                setMobileMenuOpen(false);
                toggleBodyScroll(false);
              }}
            >
              <X size={24} />
            </button>
            <div className="flex items-center gap-4 mb-12 mt-4">
              <Logo className="w-24 h-auto text-white" />
              <DesignLogo className="w-24 h-auto text-white" />
            </div>
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
                    toggleBodyScroll(false);
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
              <Link to="/privacy" className="underline">
                PRIVACY POLICY
              </Link>
              {/* <Link to="/terms" className="underline">
                TERMS OF CONDITIONS
              </Link> */}
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </header>
  );
}
