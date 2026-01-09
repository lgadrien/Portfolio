import React, { useContext } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../../context/ThemeContext";

const StatCard = ({ icon, title, value, color, delay = 0 }) => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`relative group overflow-hidden ${
        darkMode
          ? "bg-dark-surface/40 border-white/5"
          : "bg-light-surface/60 border-gray-200"
      } backdrop-blur-xl border rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300`}
    >
      {/* Background Gradient Blob on Hover */}
      <div
        className={`absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-3xl ${color.replace(
          "text-",
          "bg-"
        )}`}
      ></div>

      <div className="flex items-center justify-between mb-4 relative z-10">
        <div
          className={`p-3 rounded-xl ${
            darkMode ? "bg-white/5" : "bg-black/5"
          } ${color}`}
        >
          <div className="text-3xl">{icon}</div>
        </div>
        <div
          className={`text-4xl font-black tracking-tight ${
            darkMode ? "text-dark-text" : "text-light-text"
          }`}
        >
          {value}
        </div>
      </div>
      <h3
        className={`text-sm font-medium uppercase tracking-wider ${
          darkMode ? "text-gray-400" : "text-light-text-secondary"
        }`}
      >
        {title}
      </h3>
    </motion.div>
  );
};

export default StatCard;
