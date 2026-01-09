import { useContext } from "react";
import { motion } from "framer-motion";
import { FaCodeBranch, FaChartLine, FaCode } from "react-icons/fa";
import { LanguageContext } from "../../context/LanguageContext";
import { ThemeContext } from "../../context/ThemeContext";

const MetricItem = ({ icon: Icon, title, value, color, subValue, index }) => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
      className={`relative overflow-hidden ${
        darkMode
          ? "bg-dark-surface/40 border-white/5"
          : "bg-light-surface/60 border-gray-200"
      } backdrop-blur-md border rounded-2xl p-6 group`}
    >
      <div className="flex items-start justify-between">
        <div className="flex flex-col">
          <span
            className={`text-sm font-medium mb-1 ${
              darkMode ? "text-gray-400" : "text-gray-500"
            }`}
          >
            {title}
          </span>
          <span
            className={`text-3xl font-bold ${
              darkMode ? "text-dark-text" : "text-light-text"
            }`}
          >
            {value}
          </span>
          {subValue && (
            <span className="text-xs text-gray-500 mt-1">{subValue}</span>
          )}
        </div>
        <div className={`p-3 rounded-xl bg-white/5 ${color} bg-opacity-10`}>
          <Icon className={`text-2xl ${color}`} />
        </div>
      </div>

      {/* Background Decoration */}
      <div
        className={`absolute top-0 right-0 w-32 h-full opacity-5 -skew-x-12 transform translate-x-8 ${color.replace(
          "text-",
          "bg-"
        )}`}
      />
    </motion.div>
  );
};

const MetricsGrid = ({ stats }) => {
  const { language } = useContext(LanguageContext);
  const { totalForks, averageStarsPerRepo, reposWithDescription, publicRepos } =
    stats;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
      <MetricItem
        index={0}
        icon={FaCodeBranch}
        title={language === "fr" ? "Forks totaux" : "Total Forks"}
        value={totalForks}
        color="text-purple-500"
      />

      <MetricItem
        index={1}
        icon={FaChartLine}
        title={language === "fr" ? "Moyenne par repo" : "Avg per Repo"}
        value={averageStarsPerRepo}
        subValue="Stars / Repo"
        color="text-green-500"
      />

      <MetricItem
        index={2}
        icon={FaCode}
        title={language === "fr" ? "Repos documentés" : "Documented Repos"}
        value={`${reposWithDescription}/${publicRepos}`}
        subValue={language === "fr" ? "Avec README" : "With README"}
        color="text-pink-500"
      />
    </div>
  );
};

export default MetricsGrid;
