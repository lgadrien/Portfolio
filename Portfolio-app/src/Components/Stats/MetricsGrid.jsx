import { useContext } from "react";
import { FaCodeBranch, FaChartLine, FaCode } from "react-icons/fa";
import { LanguageContext } from "../../context/LanguageContext";

const MetricsGrid = ({ stats }) => {
  const { language } = useContext(LanguageContext);
  const { totalForks, averageStarsPerRepo, reposWithDescription, publicRepos } =
    stats;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      {/* Total Forks */}
      <div className="bg-light-surface border-gray-200 dark:bg-dark-surface dark:border-gray-800 border-2 rounded-xl p-6 shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-light-text-secondary dark:text-gray-400">
              {language === "fr" ? "Forks totaux" : "Total Forks"}
            </h3>
            <p className="text-3xl font-bold mt-2 text-light-text dark:text-dark-text">
              {totalForks}
            </p>
          </div>
          <FaCodeBranch className="text-4xl text-purple-500" />
        </div>
      </div>

      {/* Average Stars per Repo */}
      <div className="bg-light-surface border-gray-200 dark:bg-dark-surface dark:border-gray-800 border-2 rounded-xl p-6 shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-light-text-secondary dark:text-gray-400">
              {language === "fr" ? "Moyenne par repo" : "Avg per Repo"}
            </h3>
            <p className="text-3xl font-bold mt-2 text-light-text dark:text-dark-text">
              {averageStarsPerRepo}
              <span className="text-lg ml-1">⭐</span>
            </p>
          </div>
          <FaChartLine className="text-4xl text-green-500" />
        </div>
      </div>

      {/* Documented Repos */}
      <div className="bg-light-surface border-gray-200 dark:bg-dark-surface dark:border-gray-800 border-2 rounded-xl p-6 shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-light-text-secondary dark:text-gray-400">
              {language === "fr" ? "Repos documentés" : "Documented Repos"}
            </h3>
            <p className="text-3xl font-bold mt-2 text-light-text dark:text-dark-text">
              {reposWithDescription} / {publicRepos}
            </p>
          </div>
          <FaCode className="text-4xl text-dark-accent" />
        </div>
      </div>
    </div>
  );
};

export default MetricsGrid;
