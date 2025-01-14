import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function FeaturedInsight() {
  return (
    <motion.div
      className="bg-white rounded-lg overflow-hidden shadow-lg"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="md:flex">
        <motion.div
          className="md:flex-shrink-0 relative overflow-hidden"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <img
            className="h-48 w-full object-cover md:w-48"
            src="/placeholder.svg?height=400&width=600"
            alt="Featured insight"
          />
          <motion.div
            className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.span
              className="text-white text-lg font-bold"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              Featured Insight
            </motion.span>
          </motion.div>
        </motion.div>
        <div className="p-8">
          <motion.div
            className="uppercase tracking-wide text-sm font-semibold"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            Wealth Management
          </motion.div>
          <motion.a
            href="#"
            className="block mt-1 text-2xl font-semibold hover:underline"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            The Future of Private Wealth: Embracing Digital Transformation
          </motion.a>
          <motion.p
            className="mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Discover how ALDER is leveraging cutting-edge technology to provide
            unparalleled service and security for our ultra-high-net-worth
            clients in an increasingly digital world.
          </motion.p>
          <motion.div
            className="mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <motion.a
              href="#"
              className="inline-flex items-center hover:text-gray-700 transition-colors duration-200"
              whileHover={{ x: 5 }}
            >
              Read full insight
              <ArrowRight className="ml-2 h-4 w-4" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
