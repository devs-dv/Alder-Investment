import React from "react";
import { motion } from "framer-motion";

const tickerItems = [
  "FTSE 100: 7,556.23 ▲ 0.4%",
  "S&P 500: 4,137.64 ▼ 0.2%",
  "Gold: $1,843.50 ▲ 0.3%",
  "Bitcoin: $30,123.45 ▲ 1.5%",
  "EUR/USD: 1.0876 ▼ 0.1%",
];

export default function MarketTicker() {
  return (
    <div className="bg-black text-white py-3 mt-8 overflow-hidden">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        {tickerItems.concat(tickerItems).map((item, index) => (
          <motion.span
            key={index}
            className="mx-8 text-sm font-semibold"
            whileHover={{ scale: 1.1, color: "#FFD700" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            {item}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}
