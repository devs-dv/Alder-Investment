import {
  AnimatePresence,
  cubicBezier,
  motion,
  useAnimation,
} from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { DesignLogo, Logo } from "./icons";
import { useActiveSection } from "./utils/useActiveSection";

import Content from "./Content";
import Heading from "./Heading";

const NavLink = ({
  name,
  id,
  index,
  isActive,
  onClick,
  to,
  isScrollLink,
  scrolled,
  scrollDirection,
  activeSection,
  isMobile,
}) => {
  const showLink =
    !scrolled ||
    scrollDirection === "up" ||
    activeSection === id ||
    (activeSection === "home" && id === "philosophy");
  const showDots = !isMobile && scrolled && scrollDirection === "down";
  const isActiveLink = isActive && (scrollDirection === "down" || !scrolled);

  const LinkComponent = isScrollLink ? ScrollLink : Link;
  const linkProps = isScrollLink
    ? {
        to: id,
        spy: true,
        smooth: true,
        duration: 0,
        offset: -72,
      }
    : { to: to || `#${id}` };

  return (
    <div className={`flex items-center gap-2 ${showLink ? "" : "hidden"}`}>
      <LinkComponent
        {...linkProps}
        className={`text-[#898981] uppercase cursor-pointer hover:text-gray-300 transition-colors duration-200 ${
          isActiveLink && !isMobile ? "text-white" : ""
        }`}
        onClick={onClick}
        style={{ fontWeight: "300" }}
      >
        {name}
      </LinkComponent>
      {showDots && id !== "news" && (
        <div className="flex gap-2 items-center ml-3">
          {[0, 1, 2, 3].map((dotIndex) => (
            <div
              key={dotIndex}
              className={`w-[5px] h-[5px] rounded-full ${
                isActiveLink &&
                (id === "contact" ? dotIndex === 3 : dotIndex === index)
                  ? "bg-white"
                  : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const LandingPage = ({ language, setLanguage, loading, setLoading }) => {
  const [animationStep, setAnimationStep] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [isMobile, setIsMobile] = useState(false);
  const [isWidescreen, setIsWidescreen] = useState(false);

  const [scrollDirection, setScrollDirection] = useState("down");
  const location = useLocation();
  const [screenSize, setScreenSize] = useState("default");
  const navigate = useNavigate();

  const [isFullscreen, setIsFullscreen] = useState(false);
  const fullscreenControls = useAnimation();
  const fullscreenAnimationDuration = 30; // in seconds

  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const videoRef = useRef(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // useEffect(() => {
  //   let lastScrollY = window.pageYOffset;

  //   const handleScroll = () => {
  //     const currentScrollY = window.pageYOffset;
  //     const direction = currentScrollY > lastScrollY ? "down" : "up";
  //     const isScrolled = currentScrollY > 10;

  //     setScrolled(isScrolled);
  //     setScrollDirection(direction);
  //     setIsScrollingDown(direction === "down");

  //     lastScrollY = currentScrollY;
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

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
        duration: 0.3,
        ease: smoothEasing,
      },
    },
  };

  useEffect(() => {
    const checkWidescreen = () => {
      setIsWidescreen(
        window.matchMedia("(min-width: 1024px) and (max-width: 1310px)").matches
      );
    };

    checkWidescreen();
    window.addEventListener("resize", checkWidescreen);

    return () => window.removeEventListener("resize", checkWidescreen);
  }, []);

  useEffect(() => {
    const video = document.querySelector("video");
    if (video) {
      const playPromise = video.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log("Autoplay started successfully");
            setIsVideoPlaying(true);
          })
          .catch((error) => {
            console.log("Autoplay was prevented:", error);
            // Attempt to play again after a user interaction
            const playButton = document.createElement("button");
            playButton.textContent = "Play Video";
            playButton.style.position = "absolute";
            playButton.style.zIndex = "1000";
            playButton.style.top = "50%";
            playButton.style.left = "50%";
            playButton.style.transform = "translate(-50%, -50%)";
            document.body.appendChild(playButton);

            playButton.addEventListener("click", () => {
              video.play();
              playButton.remove();
            });
          });
      }
    }
  }, []);

  const handleNavigateAndScroll = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const offset = window.innerWidth < 768 ? 20 : 72;
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
        const offset = window.innerWidth < 768 ? 20 : 72;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
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
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover scale-110 pointer-events-none"
            playsInline
            loop
            muted
            preload="auto"
          >
            <source src="heronew.mp4" type="video/mp4" />
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
            className="flex flex-col items-start justify-center min-h-screen"
          >
            <Heading />
            <Content language={language} />
          </motion.div>
          {/* <motion.div
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
          ></motion.div> */}
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
                    custom={{ isMobile, isWidescreen }}
                    transition={{
                      duration: animationStep === 3 ? 3 : 1,
                      ease: smoothEasing,
                    }}
                  >
                    <img
                      src="navlogo_black.png"
                      className="md:w-[300px] w-[250px] nest-hub:w-[250px] widescreen:w-[250px]"
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
                    custom={{ isMobile, isWidescreen }}
                    transition={{
                      duration: animationStep === 3 ? 0.5 : 1,
                      ease: smoothEasing,
                    }}
                  >
                    <DesignLogo
                      className={`md:w-[115px] nest-hub:w-[105px] widescreen:w-[105px] w-20 h-auto ${
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
            <div className="flex items-center gap-4 md:gap-24 nest-hub:gap-2 nest-hub-max:gap-12 widescreen:gap-3">
              <div>
                <motion.div
                  variants={logoVariants}
                  initial="up"
                  animate="final"
                  custom={{ scrolled, isMobile }}
                  transition={{
                    duration: 0.5,
                    ease: smoothEasing,
                    delay: 2,
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
                      src="header.png"
                      className="md:w-[300px] w-[250px] mb-0.5 nest-hub:w-[250px] widescreen:w-[220px]"
                      alt="Logo"
                    />
                  </a>
                </motion.div>
              </div>
              <nav className="hidden custom-lg:flex items-center nest-hub:text-left nest-hub:text-sm text-center gap-6 justify-center mb-0.5 mt-6 max-w-7xl ml-px widescreen:text-left widescreen:text-sm">
                <div className="lg:flex justify-center items-center tracking-wide gap-6">
                  {[
                    { name: "Our Philosophy", id: "philosophy" },
                    { name: "Our Services", id: "services" },
                    { name: "Our People", id: "people" },
                    { name: "News", id: "news", to: "/news" },
                    { name: "Contact Us", id: "contact" },
                  ].map((link, index) => (
                    <NavLink
                      key={link.name}
                      name={language ? link.name : link.name}
                      id={link.id}
                      index={index}
                      isActive={activeSection === link.id}
                      onClick={() => {
                        if (link.to) {
                          navigate(link.to);
                        } else {
                          handleNavigateAndScroll(link.id);
                        }
                      }}
                      to={link.to}
                      isScrollLink={location.pathname === "/" && !link.to}
                      scrolled={scrolled}
                      scrollDirection={scrollDirection}
                      activeSection={activeSection}
                      isMobile={false}
                    />
                  ))}
                </div>
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
                <DesignLogo className="w-[115px] nest-hub:w-[105px] widescreen:w-[105px] mb-0.5 h-auto text-[#898981]" />
              </motion.div>
              <button
                className="custom-lg:hidden block text-[#898981] mt-5"
                onClick={() => {
                  setMobileMenuOpen(!mobileMenuOpen);
                  toggleBodyScroll(true);
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
              <nav className="flex flex-col items-start gap-6 w-full">
                {[
                  { name: "Our Philosophy", id: "philosophy" },
                  { name: "Our Services", id: "services" },
                  { name: "Our People", id: "people" },
                  { name: "News", id: "news", to: "/news" },
                  { name: "Contact Us", id: "contact" },
                ].map((link, index) => (
                  <NavLink
                    key={link.name}
                    name={language ? link.name : link.name}
                    id={link.id}
                    index={index}
                    isActive={activeSection === link.id}
                    onClick={() => {
                      if (link.to) {
                        navigate(link.to);
                      } else {
                        handleNavigateAndScroll(link.id);
                      }
                      setMobileMenuOpen(false);
                      toggleBodyScroll(false);
                    }}
                    to={link.to}
                    isScrollLink={location.pathname === "/" && !link.to}
                    scrolled={scrolled}
                    scrollDirection={scrollDirection}
                    activeSection={activeSection}
                    isMobile={true}
                  />
                ))}
              </nav>
              <div className="text-white gap-2 flex flex-col absolute bottom-10">
                <div className="text-white">
                  <button
                    className={`pr-1 ${language ? "" : "text-[#90908D]"}`}
                    onClick={() => setLanguage(true)}
                  >
                    ENG
                  </button>
                  /
                  <button
                    className={`pl-1 ${language ? "text-[#90908D]" : ""}`}
                    onClick={() => setLanguage(false)}
                  >
                    한국어
                  </button>
                </div>
                <a
                  href="https://www.linkedin.com/company/alder-management/?viewAsMember=true"
                  className="underline"
                >
                  <div className="flex gap-3">
                    LINKEDIN <MdArrowOutward className="text-xl" />
                  </div>
                </a>
                <Link to="/privacy" className="underline">
                  PRIVACY POLICY
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default LandingPage;
