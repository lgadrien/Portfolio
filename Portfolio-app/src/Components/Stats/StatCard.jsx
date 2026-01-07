import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const StatCard = ({ icon, title, value, color }) => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div
      className={`${
        darkMode
          ? "bg-dark-surface border-gray-800"
          : "bg-light-surface border-gray-200"
      } border-2 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1`}
    >
      <div className={`flex items-center justify-between mb-4`}>
        <div className={`${color} text-4xl`}>{icon}</div>
        <div
          className={`text-4xl font-bold ${
            darkMode ? "text-dark-text" : "text-light-text"
          }`}
        >
          {value}
        </div>
      </div>
      <h3
        className={`text-lg font-semibold ${
          darkMode ? "text-gray-400" : "text-light-text-secondary"
        }`}
      >
        {title}
      </h3>
    </div>
  );
};

export default StatCard;
