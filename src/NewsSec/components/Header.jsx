import React from "react";
import { motion } from "framer-motion";

const letterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const subtitleVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

export default function Header() {
  return (
    <header className="text-center relative py-8">
      <motion.h1
        className="text-5xl md:text-6xl font-serif font-bold mb-4"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
      >
        {Array.from("ALDER News").map((letter, index) => (
          <motion.span
            key={index}
            variants={letterVariants}
            transition={{ type: "spring", stiffness: 100 }}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </motion.h1>
      <motion.p
        className="text-2xl"
        variants={subtitleVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 1 }}
      >
        Cultivating Wealth, Nurturing Legacies
      </motion.p>
    </header>
  );
}
