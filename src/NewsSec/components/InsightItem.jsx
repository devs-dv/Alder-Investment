import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function InsightItem({ id, title, excerpt, category, date }) {
  return (
    <motion.div
      className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl"
      whileHover={{ y: -5, scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <motion.span
            className="bg-black text-white py-1 px-3 rounded-full text-xs font-semibold"
            whileHover={{ scale: 1.05 }}
          >
            {category}
          </motion.span>
          <span className="text-sm">{date}</span>
        </div>
        <motion.h2
          className="text-xl font-semibold mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          {title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="line-clamp-2"
        >
          {excerpt}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <Link
            to={`/news/${id}`}
            className="inline-block mt-4 hover:text-gray-700 transition-colors duration-200"
          >
            <motion.span whileHover={{ x: 5 }} className="inline-block">
              Read more →
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
