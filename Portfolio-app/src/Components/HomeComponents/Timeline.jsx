import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { LanguageContext } from "../../context/LanguageContext";
import {
  FaGraduationCap,
  FaBriefcase,
  FaCode,
  FaRocket,
  FaSearch,
} from "react-icons/fa";

const Timeline = () => {
  const { darkMode } = useContext(ThemeContext);
  const { t, language } = useContext(LanguageContext);

  const timelineData = [
    {
      year: "Septembre 2023 - Présent",
      yearEn: "September 2023 - Present",
      title: "Étudiant à Epitech Paris",
      titleEn: "Student at Epitech Paris",
      description:
        "Formation en développement informatique avec une spécialisation en développement web full-stack et data analyse.",
      descriptionEn:
        "Computer science training with a specialization in full-stack web development and data analysis.",
      icon: <FaGraduationCap />,
      color: "bg-custom-purple-light",
      tags: ["Epitech", "Full-Stack", "Data"],
      tagsEn: ["Epitech", "Full-Stack", "Data"],
    },
    {
      year: "Janvier 2025 - Juillet 2025",
      yearEn: "January 2025 - July 2025",
      title: "Stage Data Analyst - BNP Paribas",
      titleEn: "Data Analyst Internship - BNP Paribas",
      description:
        "Stage de 6 mois au sein de l'équipe SWIFT en tant que Data Analyst. Analyse et traitement de données financières, création de tableaux de bord et reporting.",
      descriptionEn:
        "6-month internship within the SWIFT team as a Data Analyst. Financial data analysis and processing, dashboard creation and reporting.",
      icon: <FaBriefcase />,
      color: "bg-custom-purple-dark",
      tags: ["Data Analysis", "SWIFT", "Finance"],
      tagsEn: ["Data Analysis", "SWIFT", "Finance"],
    },
    {
      year: "2026",
      yearEn: "2026",
      title: "À la recherche d'une alternance",
      titleEn: "Looking for an apprenticeship",
      description:
        "Recherche active d'une alternance dans la data et l'intelligence artificielle dans le cadre de ma formation et mettre en pratique mes compétences.",
      descriptionEn:
        "Actively seeking an apprenticeship in data and artificial intelligence to continue my training and apply my skills.",
      icon: <FaSearch />,
      color: "bg-custom-purple-light",
      tags: ["Data Science", "IA", "Alternance"],
      tagsEn: ["Data Science", "AI", "Apprenticeship"],
    },
  ];

  const TimelineItem = ({ item, index }) => {
    const isLeft = index % 2 === 0;
    const isEnglish = language === "en";

    return (
      <div className="flex items-start w-full mb-0 relative group">
        {isLeft ? (
          <>
            {/* Left side - Content */}
            <div className="w-5/12 text-right pr-4 lg:pr-8 pb-8 lg:pb-12">
              <div
                className={`${
                  darkMode
                    ? "bg-custom-dark border-gray-800"
                    : "bg-white border-gray-200"
                } border rounded-xl lg:rounded-2xl p-4 lg:p-6 shadow-lg transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-2xl`}
              >
                <div className="flex justify-end items-center mb-2 lg:mb-3">
                  <span
                    className={`text-xs font-medium px-2 lg:px-3 py-1 rounded-md ${
                      darkMode
                        ? "bg-purple-900/50 text-purple-300"
                        : "bg-purple-100 text-purple-700"
                    }`}
                  >
                    {isEnglish ? item.yearEn : item.year}
                  </span>
                </div>
                <h3
                  className={`text-base lg:text-xl font-bold mb-2 lg:mb-3 ${
                    darkMode ? "text-white" : "text-custom-black"
                  } tracking-tight`}
                >
                  {isEnglish ? item.titleEn : item.title}
                </h3>
                <p
                  className={`text-xs lg:text-sm leading-relaxed ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {isEnglish ? item.descriptionEn : item.description}
                </p>
              </div>
            </div>

            {/* Center - Icon */}
            <div className="w-2/12 flex flex-col items-center pb-8 lg:pb-12">
              <div
                className={`${item.color} rounded-full w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center text-white text-lg lg:text-2xl shadow-lg ring-4 ring-white/10 flex-shrink-0`}
              >
                {item.icon}
              </div>
              {index !== timelineData.length - 1 && (
                <div
                  className={`w-0.5 lg:w-1 flex-1 mt-2 ${
                    darkMode ? "bg-gray-700" : "bg-gray-400"
                  }`}
                ></div>
              )}
            </div>

            {/* Right side - Empty */}
            <div className="w-5/12 pb-8 lg:pb-12"></div>
          </>
        ) : (
          <>
            {/* Left side - Empty */}
            <div className="w-5/12 pb-8 lg:pb-12"></div>

            {/* Center - Icon */}
            <div className="w-2/12 flex flex-col items-center pb-8 lg:pb-12">
              <div
                className={`${item.color} rounded-full w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center text-white text-lg lg:text-2xl shadow-lg ring-4 ring-white/10 flex-shrink-0`}
              >
                {item.icon}
              </div>
              {index !== timelineData.length - 1 && (
                <div
                  className={`w-0.5 lg:w-1 flex-1 mt-2 ${
                    darkMode ? "bg-gray-700" : "bg-gray-400"
                  }`}
                ></div>
              )}
            </div>

            {/* Right side - Content */}
            <div className="w-5/12 text-left pl-4 lg:pl-8 pb-8 lg:pb-12">
              <div
                className={`${
                  darkMode
                    ? "bg-custom-dark border-gray-800"
                    : "bg-white border-gray-200"
                } border rounded-xl lg:rounded-2xl p-4 lg:p-6 shadow-lg transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-2xl`}
              >
                <div className="flex items-center mb-2 lg:mb-3">
                  <span
                    className={`text-xs font-medium px-2 lg:px-3 py-1 rounded-md ${
                      darkMode
                        ? "bg-purple-900/50 text-purple-300"
                        : "bg-purple-100 text-purple-700"
                    }`}
                  >
                    {isEnglish ? item.yearEn : item.year}
                  </span>
                </div>
                <h3
                  className={`text-base lg:text-xl font-bold mb-2 lg:mb-3 ${
                    darkMode ? "text-white" : "text-custom-black"
                  } tracking-tight`}
                >
                  {isEnglish ? item.titleEn : item.title}
                </h3>
                <p
                  className={`text-xs lg:text-sm leading-relaxed ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {isEnglish ? item.descriptionEn : item.description}
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    );
  };

  return (
    <div
      className={`w-full pt-12 md:pt-20 pb-16 md:pb-24 ${
        darkMode ? "bg-dark-bg" : "bg-custom-beige"
      }`}
    >
      <div
        id="timeline"
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative before:absolute before:left-1/2 before:top-32 before:bottom-8 before:-translate-x-1/2 before:w-px before:bg-gradient-to-b before:from-purple-500/40 before:via-gray-400/30 before:to-purple-500/40 before:hidden before:lg:block"
      >
        <h2
          className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-3 md:mb-4 ${
            darkMode ? "text-white" : "text-custom-black"
          }`}
        >
          <span
            className={
              darkMode ? "text-custom-purple-light" : "text-custom-purple-dark"
            }
          >
            {t?.timeline?.title || "Mon Parcours"}
          </span>
        </h2>
        <p
          className={`text-center text-base sm:text-lg lg:text-xl mb-12 md:mb-20 ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {t?.timeline?.subtitle || "De mes débuts à aujourd'hui"}
        </p>

        {/* Timeline for large screens (desktop) */}
        <div className="hidden lg:block relative z-10">
          {timelineData.map((item, index) => (
            <TimelineItem key={index} item={item} index={index} />
          ))}
        </div>

        {/* Timeline for tablets and mobile - simplified vertical */}
        <div className="lg:hidden">
          {timelineData.map((item, index) => {
            const isEnglish = language === "en";
            return (
              <div key={index} className="flex mb-6 sm:mb-8 last:mb-0">
                <div className="flex flex-col items-center mr-3 sm:mr-4">
                  <div
                    className={`${item.color} rounded-full w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center text-white text-base sm:text-lg md:text-xl shadow-md flex-shrink-0`}
                  >
                    {item.icon}
                  </div>
                  {index !== timelineData.length - 1 && (
                    <div
                      className={`w-0.5 flex-1 mt-2 ${
                        darkMode ? "bg-gray-700" : "bg-gray-400"
                      }`}
                    ></div>
                  )}
                </div>
                <div className="flex-1 pb-4 sm:pb-8">
                  <div
                    className={`${
                      darkMode
                        ? "bg-custom-dark border-gray-800"
                        : "bg-white border-gray-200"
                    } border rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300`}
                  >
                    <div className="mb-2 sm:mb-3">
                      <span
                        className={`text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 rounded-md inline-block ${
                          darkMode
                            ? "bg-purple-900/50 text-purple-300"
                            : "bg-purple-100 text-purple-700"
                        }`}
                      >
                        {isEnglish ? item.yearEn : item.year}
                      </span>
                    </div>
                    <h3
                      className={`text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 ${
                        darkMode ? "text-white" : "text-custom-black"
                      } tracking-tight`}
                    >
                      {isEnglish ? item.titleEn : item.title}
                    </h3>
                    <p
                      className={`text-sm sm:text-base leading-relaxed ${
                        darkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {isEnglish ? item.descriptionEn : item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
