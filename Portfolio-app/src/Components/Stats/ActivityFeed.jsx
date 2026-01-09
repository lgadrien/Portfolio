import React, { useContext } from "react";
import { motion } from "framer-motion";
import { FaGitAlt, FaStar, FaPlus, FaHistory } from "react-icons/fa";
import { ThemeContext } from "../../context/ThemeContext";
import { LanguageContext } from "../../context/LanguageContext";

const ActivityFeed = ({ activity }) => {
  const { darkMode } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  const getIcon = (type) => {
    switch (type) {
      case "push":
        return <FaGitAlt className="text-yellow-500" />;
      case "star":
        return <FaStar className="text-yellow-400" />;
      case "create":
        return <FaPlus className="text-green-500" />;
      default:
        return <FaHistory className="text-gray-400" />;
    }
  };

  if (!activity || activity.length === 0) return null;

  return (
    <div className="mb-12">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-dark-accent/10 rounded-lg">
          <FaHistory className="text-2xl text-dark-accent" />
        </div>
        <h2
          className={`text-2xl font-bold ${
            darkMode ? "text-dark-text" : "text-light-text"
          }`}
        >
          {language === "fr" ? "Activité Récente" : "Recent Activity"}
        </h2>
      </div>

      <div
        className={`rounded-2xl border overflow-hidden ${
          darkMode
            ? "bg-dark-surface/40 border-white/5"
            : "bg-light-surface/60 border-gray-200"
        } backdrop-blur-md shadow-lg`}
      >
        {activity.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`flex items-center p-4 border-b last:border-0 hover:bg-white/5 transition-colors ${
              darkMode ? "border-white/5" : "border-gray-100"
            }`}
          >
            <div
              className={`p-3 rounded-full mr-4 ${
                darkMode ? "bg-white/5" : "bg-black/5"
              }`}
            >
              {getIcon(event.type)}
            </div>

            <div className="flex-1 min-w-0">
              <p
                className={`text-sm font-medium truncate ${
                  darkMode ? "text-dark-text" : "text-light-text"
                }`}
              >
                <span className="font-bold">{event.description}</span>
                <span className="mx-1 text-gray-400">on</span>
                <a
                  href={event.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark-accent hover:underline"
                >
                  {event.repoName}
                </a>
              </p>
              <p className="text-xs text-gray-500">
                {new Date(event.date).toLocaleDateString(
                  language === "fr" ? "fr-FR" : "en-US",
                  {
                    day: "numeric",
                    month: "short",
                    hour: "2-digit",
                    minute: "2-digit",
                  }
                )}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;
