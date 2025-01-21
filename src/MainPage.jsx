import { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  cubicBezier,
  useAnimation,
} from "framer-motion";
import { Logo, DesignLogo } from "./icons";
import { Menu, X } from "lucide-react";
import { useActiveSection } from "./utils/useActiveSection";
import { Link, useLocation } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
import { Link as ScrollLink } from "react-scroll";

import Heading from "./Heading";
import Content from "./Content";

const LandingPage = ({ language, setLanguage, loading, setLoading }) => {
  const [animationStep, setAnimationStep] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("down");
  const location = useLocation();
  const [screenSize, setScreenSize] = useState("default");

  const [isFullscreen, setIsFullscreen] = useState(false);
  const fullscreenControls = useAnimation();
  const fullscreenAnimationDuration = 30; // in seconds

  const [isScrollingDown, setIsScrollingDown] = useState(false);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;
      const direction = currentScrollY > lastScrollY ? "down" : "up";
      const isScrolled = currentScrollY > 10;

      setScrolled(isScrolled);
      setScrollDirection(direction);
      setIsScrollingDown(direction === "down");

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (animationStep === 4) {
      setTimeout(() => {
        setIsFullscreen(true);
        fullscreenControls.start({
          clipPath: getClipPath(isMobile ? 30 : screenSize === "xl" ? 40 : 30),
          transition: {
            duration: fullscreenAnimationDuration,
            ease: [0.05, 0.2, 0.1, 0.95],
          },
        });
      }, 2500);
    }
  }, [animationStep, fullscreenControls, isMobile, screenSize]);

  const sectionIds = ["home", "philosophy", "services", "people", "contact"];
  const activeSection = useActiveSection(sectionIds);

  const smoothEasing = cubicBezier(0.45, 0, 0.55, 1);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) {
      const timer1 = setTimeout(() => setAnimationStep(1), 500);
      const timer2 = setTimeout(() => setAnimationStep(2), 1500);
      const timer3 = setTimeout(() => setAnimationStep(3), 2500);
      const timer4 = setTimeout(() => setAnimationStep(4), 3500);
      const timer5 = setTimeout(() => {
        setAnimationStep(5);
        setLoading(false);
      }, 6000);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
        clearTimeout(timer4);
        clearTimeout(timer5);
      };
    } else {
      const timer1 = setTimeout(() => setAnimationStep(1), 500);
      const timer2 = setTimeout(() => setAnimationStep(2), 1500);
      const timer3 = setTimeout(() => setAnimationStep(3), 2500);
      const timer4 = setTimeout(() => setAnimationStep(4), 3000);
      const timer5 = setTimeout(() => {
        setAnimationStep(5);
        setLoading(false);
      }, 3700);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
        clearTimeout(timer4);
        clearTimeout(timer5);
      };
    }
  }, [setLoading, isMobile]);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;
      const direction = currentScrollY > lastScrollY ? "down" : "up";
      const isScrolled = currentScrollY > 10;

      setScrolled(isScrolled);
      setScrollDirection(direction);

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const rectangleWidth = 160;
  const rectangleHeight = 240;

  const getClipPath = (scale, isExpanding = false) => {
    if (!isExpanding) {
      // Initial rectangle shape
      const width = rectangleWidth * scale;
      const height = rectangleHeight * scale;
      const x = `calc(50% - ${width / 2}px)`;
      const y = `calc(50% - ${height / 2}px)`;
      return `polygon(
        0% 0%,
        100% 0%,
        100% 100%,
        0% 100%,
        0% ${y},
        ${x} ${y},
        ${x} calc(${y} + ${height}px),
        calc(${x} + ${width}px) calc(${y} + ${height}px),
        calc(${x} + ${width}px) ${y},
        ${x} ${y},
        0% ${y}
      )`;
    } else {
      // Expanding animation using window dimensions
      const width = window.innerWidth * (scale / 5);
      const height = window.innerHeight * (scale / 5);
      const x = `calc(50% - ${width / 2}px)`;
      const y = `calc(50% - ${height / 2}px)`;
      return `polygon(
        0% 0%,
        100% 0%,
        100% 100%,
        0% 100%,
        0% ${y},
        ${x} ${y},
        ${x} calc(${y} + ${height}px),
        calc(${x} + ${width}px) calc(${y} + ${height}px),
        calc(${x} + ${width}px) ${y},
        ${x} ${y},
        0% ${y}
      )`;
    }
  };

  const squareVariants = {
    hidden: { clipPath: getClipPath(0) },
    visible: { clipPath: getClipPath(1) },
    scaling: {
      clipPath: getClipPath(isMobile ? 8 : screenSize === "xl" ? 10 : 5, true),
    },
  };

  const logoVariants = {
    center: { x: 0, y: 0, opacity: 1 },
    left: ({ isMobile }) => ({
      x: isMobile ? "-5vw" : "calc(-48.6vw + 200px)",
      y: 0,
      opacity: 1,
      transition: { duration: 2.5, ease: [0.16, 1, 0.3, 1] },
    }),
    pause: ({ isMobile }) => ({
      x: isMobile ? "-5vw" : "calc(-48.6vw + 200px)",
      y: 0,
      opacity: 1,
    }),
    up: ({ isMobile }) => ({
      x: isMobile ? "-5vw" : "calc(-48.6vw + 200px)",
      y: "-49vh",
      opacity: 0, // Change this to 0 to fade out
      transition: {
        duration: 3,
        ease: [0.16, 1, 0.3, 1],
        opacity: { duration: 1, ease: "easeOut" },
      },
    }),
    stop: ({ isMobile }) => ({
      x: isMobile ? "-5vw" : "calc(-48.6vw + 200px)",
      y: "-49vh",
      opacity: 0,
    }),
    final: ({ scrolled, isMobile }) => ({
      x: isMobile ? -5 : 1,
      y: isMobile ? 10 : scrolled ? 12 : 12,
      opacity: 1,
      transition: { duration: loading ? 2 : 0, ease: [0.16, 1, 0.3, 1] },
    }),
  };

  const designLogoVariants = {
    center: { x: 0, y: 0, opacity: 1 },
    right: ({ isMobile }) => ({
      x: isMobile ? "5vw" : "calc(48.6vw - 200px)",
      y: 0,
      opacity: 1,
      transition: { duration: 2.5, ease: [0.16, 1, 0.3, 1] },
    }),
    pause: ({ isMobile }) => ({
      x: isMobile ? "5vw" : "calc(48.6vw - 200px)",
      y: 0,
      opacity: 1,
    }),
    up: ({ isMobile }) => ({
      x: isMobile ? "5vw" : "calc(48.6vw - 200px)",
      y: "-49vh",
      opacity: 0,
      transition: {
        duration: 3,
        ease: [0.16, 1, 0.3, 1],
        opacity: { duration: 1, ease: "easeOut" },
      },
    }),
    stop: ({ isMobile }) => ({
      x: isMobile ? "5vw" : "calc(48.6vw - 200px)",
      y: "-49vh",
      opacity: 0,
    }),
    final: ({ scrolled, isMobile }) => ({
      x: isMobile ? -5 : -1,
      y: isMobile ? 10 : scrolled ? 12 : 12,
      opacity: 1,
      transition: {
        duration: loading ? 2 : 0,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
    mobileVisible: { opacity: 1, y: 0 },
    mobileHidden: { opacity: 0, y: 0 },
    fadeIn: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: smoothEasing },
    },
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

  return (
    <div className={`relative min-h-screen overflow-hidden bg-[#e7e6e2]`}>
      {/* Hero Section */}
      <div className="relative z-0">
        <motion.section
          id="home"
          className="relative min-h-screen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: smoothEasing }}
        >
          <video
            className="absolute inset-0 w-full h-full object-cover scale-110"
            src="LV1.mp4"
            autoPlay
            playsInline
            loop
            muted
            preload="auto"
          >
            <source src="LV1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: loading
                ? isMobile
                  ? animationStep >= 4
                    ? 1
                    : 0
                  : animationStep >= 5
                  ? 1
                  : 0
                : 1,
            }}
            transition={{ duration: 0.8, ease: smoothEasing }}
          >
            <Heading />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: loading
                ? isMobile
                  ? animationStep >= 4
                    ? 1
                    : 0
                  : animationStep >= 5
                  ? 1
                  : 0
                : 1,
            }}
            transition={{ duration: 3, ease: smoothEasing }}
          >
            <Content language={language} />
          </motion.div>
        </motion.section>
      </div>

      {/* Loading Overlay */}
      <AnimatePresence mode="wait">
        {loading && (
          <>
            {/* White background with square cutout */}
            <motion.div
              key="loading-mask"
              className="fixed inset-0 z-50 bg-white"
              variants={squareVariants}
              initial="hidden"
              animate={
                animationStep === 0
                  ? "hidden"
                  : animationStep === 1
                  ? "visible"
                  : animationStep === 2
                  ? "visible"
                  : "scaling"
              }
              transition={{ duration: 1 }}
            />

            {/* {isFullscreen && (
              <motion.div
                key="fullscreen-mask"
                className="fixed inset-0 z-51 bg-white"
                initial={{
                  clipPath: getClipPath(
                    isMobile ? 15 : screenSize === "xl" ? 25 : 15
                  ),
                }}
                animate={fullscreenControls}
              />
            )} */}

            {/* Loading content (logos) */}
            <motion.div
              key="loading-content"
              className="fixed inset-0 z-[51] flex items-center justify-center pointer-events-none"
              exit={{ opacity: 0 }}
              transition={{ duration: isMobile ? 0.3 : 0.5 }}
            >
              {!isMobile && (
                <>
                  <motion.div
                    className="relative"
                    variants={logoVariants}
                    initial="center"
                    animate={
                      animationStep === 0
                        ? "center"
                        : animationStep === 1
                        ? "left"
                        : animationStep === 2
                        ? "pause"
                        : animationStep === 3
                        ? "up"
                        : animationStep === 4
                        ? "stop"
                        : "final"
                    }
                    custom={{ isMobile }}
                    transition={{
                      duration: animationStep === 3 ? 3 : 1,
                      ease: smoothEasing,
                    }}
                  >
                    <img
                      src="navlogo_black.png"
                      className="md:w-[300px] w-[250px] nest-hub:w-[250px]"
                      alt="Navigation Logo"
                    />
                  </motion.div>
                  <motion.div
                    className="relative"
                    variants={designLogoVariants}
                    initial="center"
                    animate={
                      animationStep === 0
                        ? "center"
                        : animationStep === 1
                        ? "right"
                        : animationStep === 2
                        ? "pause"
                        : animationStep === 3
                        ? "up"
                        : animationStep === 4
                        ? "stop"
                        : "final"
                    }
                    custom={{ isMobile }}
                    transition={{
                      duration: animationStep === 3 ? 0.5 : 1,
                      ease: smoothEasing,
                    }}
                  >
                    <DesignLogo
                      className={`md:w-[115px] nest-hub:w-[105px] w-20 h-auto ${
                        animationStep < 5 ? "text-black" : "text-white"
                      }`}
                    />
                  </motion.div>
                </>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Header and Navigation */}
      <div className="relative z-[52]">
        <motion.header
          className={`fixed top-0 left-0 right-0 flex items-center px-4 pb-[22px] h-[72px] transition-colors duration-200 ${
            scrolled
              ? "bg-black/50 backdrop-blur supports-[backdrop-filter]:bg-black/10"
              : "bg-transparent"
          }`}
          variants={headerVariants}
          initial="hidden"
          animate={
            loading
              ? animationStep >= 4
                ? "fadeIn"
                : "hidden"
              : isMobile
              ? isScrollingDown
                ? "mobileHidden"
                : "mobileVisible"
              : "visible"
          }
          transition={{ duration: loading ? 0.8 : 0.3, ease: smoothEasing }}
        >
          <div className="flex justify-between items-center w-full">
            <div className="flex items-center gap-4 md:gap-24 nest-hub:gap-2 nest-hub-max:gap-12">
              <div className="">
                <motion.div
                  variants={logoVariants}
                  initial="up"
                  animate="final"
                  custom={{ scrolled, isMobile }}
                  transition={{
                    duration: 0.5,
                    ease: smoothEasing,
                    delay: 2, // Add a delay to make it appear after the black logo has faded out
                  }}
                  className="flex items-center"
                >
                  <a
                    href="/"
                    className="flex items-center gap-4"
                    aria-label="Home"
                  >
                    <span className="sr-only">Home</span>
                    <img
                      src="nav logo_white.png"
                      className="md:w-[300px] w-[250px] mb-0.5 nest-hub:w-[250px]"
                      alt="Logo"
                    />
                  </a>
                </motion.div>
              </div>
              <nav className="hidden custom-lg:flex items-center nest-hub:text-left nest-hub:text-sm text-center gap-1 justify-center mb-0.5 mt-6 max-w-7xl ml-px">
                <div className="lg:flex justify-center items-center tracking-wide gap-6">
                  {location.pathname === "/" ? (
                    <ScrollLink
                      to="philosophy"
                      spy={true}
                      smooth={false}
                      duration={0}
                      offset={-72}
                      className={`text-white uppercase cursor-pointer hover:text-gray-300 transition-colors duration-200 ${
                        !scrolled ||
                        scrollDirection === "up" ||
                        activeSection === "philosophy" ||
                        (activeSection === "home" &&
                          "philosophy" === "philosophy")
                          ? ""
                          : "hidden"
                      }`}
                      style={{ fontWeight: "300" }}
                    >
                      {language ? "Our Philosophy" : "Our Philosophy"}
                    </ScrollLink>
                  ) : (
                    <Link
                      to="#philosophy"
                      className={`text-white uppercase hover:text-gray-300 transition-colors duration-200 ${
                        !scrolled ||
                        scrollDirection === "up" ||
                        activeSection === "philosophy" ||
                        (activeSection === "home" &&
                          "philosophy" === "philosophy")
                          ? ""
                          : "hidden"
                      }`}
                    >
                      {language ? "Our Philosophy" : "Our Philosophy"}
                    </Link>
                  )}

                  {location.pathname === "/" ? (
                    <ScrollLink
                      to="services"
                      spy={true}
                      smooth={false}
                      duration={0}
                      offset={-72}
                      className={`text-white uppercase cursor-pointer hover:text-gray-300 transition-colors duration-200 ${
                        !scrolled ||
                        scrollDirection === "up" ||
                        activeSection === "services" ||
                        (activeSection === "home" &&
                          "services" === "philosophy")
                          ? ""
                          : "hidden"
                      }`}
                      style={{ fontWeight: "300" }}
                    >
                      {language ? "Our Services" : "Our Services"}
                    </ScrollLink>
                  ) : (
                    <Link
                      to="#services"
                      className={`text-white uppercase hover:text-gray-300 transition-colors duration-200 ${
                        !scrolled ||
                        scrollDirection === "up" ||
                        activeSection === "services" ||
                        (activeSection === "home" &&
                          "services" === "philosophy")
                          ? ""
                          : "hidden"
                      }`}
                    >
                      {language ? "Our Services" : "Our Services"}
                    </Link>
                  )}

                  {location.pathname === "/" ? (
                    <ScrollLink
                      to="people"
                      spy={true}
                      smooth={false}
                      duration={0}
                      offset={-72}
                      className={`text-white uppercase cursor-pointer hover:text-gray-300 transition-colors duration-200 ${
                        !scrolled ||
                        scrollDirection === "up" ||
                        activeSection === "people" ||
                        (activeSection === "home" && "people" === "philosophy")
                          ? ""
                          : "hidden"
                      }`}
                      style={{ fontWeight: "300" }}
                    >
                      {language ? "Our People" : "Our People"}
                    </ScrollLink>
                  ) : (
                    <Link
                      to="#people"
                      className={`text-white uppercase hover:text-gray-300 transition-colors duration-200 ${
                        !scrolled ||
                        scrollDirection === "up" ||
                        activeSection === "people" ||
                        (activeSection === "home" && "people" === "philosophy")
                          ? ""
                          : "hidden"
                      }`}
                    >
                      {language ? "Our People" : "Our People"}
                    </Link>
                  )}

                  <Link
                    to="/news"
                    className={`text-white uppercase hover:text-gray-300 transition-colors duration-200 ${
                      !scrolled ||
                      scrollDirection === "up" ||
                      activeSection === "news" ||
                      (activeSection === "home" && "news" === "philosophy")
                        ? ""
                        : "hidden"
                    }`}
                    style={{ fontWeight: "300" }}
                  >
                    {language ? "News" : "News"}
                  </Link>

                  {location.pathname === "/" ? (
                    <ScrollLink
                      to="contact"
                      spy={true}
                      smooth={false}
                      duration={0}
                      offset={-72}
                      className={`text-white uppercase cursor-pointer hover:text-gray-300 transition-colors duration-200 ${
                        !scrolled ||
                        scrollDirection === "up" ||
                        activeSection === "contact" ||
                        (activeSection === "home" && "contact" === "philosophy")
                          ? ""
                          : "hidden"
                      }`}
                      style={{ fontWeight: "300" }}
                    >
                      {language ? "Contact Us" : "Contact Us"}
                    </ScrollLink>
                  ) : (
                    <Link
                      to="#contact"
                      className={`text-white uppercase hover:text-gray-300 transition-colors duration-200 ${
                        !scrolled ||
                        scrollDirection === "up" ||
                        activeSection === "contact" ||
                        (activeSection === "home" && "contact" === "philosophy")
                          ? ""
                          : "hidden"
                      }`}
                    >
                      {language ? "Contact Us" : "Contact Us"}
                    </Link>
                  )}
                </div>

                {scrolled && scrollDirection === "down" && (
                  <div className="hidden lg:flex items-center gap-2 ml-4">
                    {["philosophy", "services", "people", "contact"].map(
                      (section) => {
                        const element = document.getElementById(section);
                        const isFullyVisible =
                          element &&
                          (() => {
                            const rect = element.getBoundingClientRect();
                            const visibleHeight =
                              Math.min(rect.bottom, window.innerHeight) -
                              Math.max(rect.top, 0);
                            return visibleHeight >= rect.height * 0.5;
                          })();

                        return (
                          <div
                            key={section}
                            className={`w-[0.25rem] h-[0.25rem] rounded-full ${
                              activeSection === section && isFullyVisible
                                ? "bg-white"
                                : "bg-gray-400"
                            }`}
                          />
                        );
                      }
                    )}
                  </div>
                )}
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <motion.div
                variants={designLogoVariants}
                initial="up"
                animate="final"
                custom={{ scrolled, isMobile }}
                transition={{
                  duration: 0.5,
                  ease: smoothEasing,
                  delay: 2,
                }}
                className="hidden custom-lg:block"
              >
                <DesignLogo className="w-[115px] nest-hub:w-[105px] mb-0.5 h-auto text-white" />
              </motion.div>
              <button
                className="custom-lg:hidden  text-white mt-5"
                onClick={() => {
                  setMobileMenuOpen(!mobileMenuOpen);
                  // toggleBodyScroll(!mobileMenuOpen);
                }}
              >
                <Menu size={30} />
              </button>
            </div>
          </div>
        </motion.header>
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="fixed inset-0 z-50 bg-black/90 flex flex-col items-start justify-start pt-20 px-6 overflow-y-auto h-full"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* 
                NOTE: To adjust the scrolling speed on mobile, modify the `duration` prop of the ScrollLink components below. 
                Higher values will result in slower scrolling. The current value is set to 2000ms (1 second).
              */}
              <button
                className="absolute top-6 right-6 text-white"
                onClick={() => {
                  setMobileMenuOpen(false);
                  toggleBodyScroll(false);
                }}
              >
                <X size={24} />
              </button>
              <a href="/" className="flex items-center gap-4 mb-12 mt-4">
                <Logo className="w-24 h-auto text-white" />
                <DesignLogo className="w-24 h-auto text-white" />
              </a>
              <nav className="flex flex-col items-start gap-3 w-full">
                <ScrollLink
                  to="philosophy"
                  spy={true}
                  smooth={true}
                  // Increased duration for slower scrolling on mobile
                  offset={-20}
                  className="text-white text-2xl uppercase hover:text-gray-300 transition-colors duration-200 w-full"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    toggleBodyScroll(false);
                  }}
                >
                  {language ? "Our Philosophy" : "Our Philosophy"}
                </ScrollLink>

                <ScrollLink
                  to="services"
                  spy={true}
                  smooth={true}
                  // Increased duration for slower scrolling on mobile
                  offset={-20}
                  className="text-white text-2xl uppercase hover:text-gray-300 transition-colors duration-200 w-full"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    toggleBodyScroll(false);
                  }}
                >
                  {language ? "Our Services" : "Our Services"}
                </ScrollLink>

                <ScrollLink
                  to="people"
                  spy={true}
                  smooth={true}
                  // Increased duration for slower scrolling on mobile
                  offset={-20}
                  className="text-white text-2xl uppercase hover:text-gray-300 transition-colors duration-200 w-full"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    toggleBodyScroll(false);
                  }}
                >
                  {language ? "Our People" : "Our People"}
                </ScrollLink>

                <Link
                  to="/news"
                  className="text-white text-2xl uppercase hover:text-gray-300 transition-colors duration-200 w-full"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    toggleBodyScroll(false);
                  }}
                >
                  {language ? "News" : "News"}
                </Link>

                <ScrollLink
                  to="contact"
                  spy={true}
                  smooth={true}
                  // Increased duration for slower scrolling on mobile
                  offset={-20}
                  className="text-white text-2xl uppercase hover:text-gray-300 transition-colors duration-200 w-full"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    toggleBodyScroll(false);
                  }}
                >
                  {language ? "Contact Us" : "Contact Us"}
                </ScrollLink>
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
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default LandingPage;
