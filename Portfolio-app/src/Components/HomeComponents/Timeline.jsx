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
      color: "bg-purple-600",
      tags: ["Epitech", "Full-Stack", "Data"],
      tagsEn: ["Epitech", "Full-Stack", "Data"],
    },
    {
      year: "Janvier 2025 - Juillet 2025",
      yearEn: "January 2025 - July 2025",
      title: "Stage Data Analyste - BNP Paribas",
      titleEn: "Data Analyst Internship - BNP Paribas",
      description:
        "Stage de 6 mois au sein de l'équipe SWIFT en tant que Data Analyste. Analyse et traitement de données financières, création de tableaux de bord et reporting.",
      descriptionEn:
        "6-month internship within the SWIFT team as a Data Analyst. Financial data analysis and processing, dashboard creation and reporting.",
      icon: <FaBriefcase />,
      color: "bg-blue-600",
      tags: ["Data Analysis", "SWIFT", "Finance"],
      tagsEn: ["Data Analysis", "SWIFT", "Finance"],
    },
    {
      year: "2026",
      yearEn: "2026",
      title: "À la recherche d'une alternance",
      titleEn: "Looking for an apprenticeship",
      description:
        "Recherche active d'une alternance dans la data et l'intelligence artificielle pour poursuivre ma formation et mettre en pratique mes compétences.",
      descriptionEn:
        "Actively seeking an apprenticeship in data and artificial intelligence to continue my training and apply my skills.",
      icon: <FaSearch />,
      color: "bg-green-500",
      tags: ["Data Science", "IA", "Alternance"],
      tagsEn: ["Data Science", "AI", "Apprenticeship"],
    },
  ];

  const TimelineItem = ({ item, index }) => {
    const isLeft = index % 2 === 0;
    const isEnglish = language === "en";

    return (
      <div className="flex items-start w-full mb-0 relative">
        {isLeft ? (
          <>
            {/* Left side - Content */}
            <div className="w-5/12 text-right pr-8 pb-8">
              <div
                className={`${
                  darkMode
                    ? "bg-gray-800 border-gray-700"
                    : "bg-white border-gray-300"
                } border rounded-xl p-6 shadow-sm`}
              >
                <div className="flex justify-end items-center mb-3">
                  <span
                    className={`text-xs font-medium px-3 py-1 rounded-md ${
                      darkMode
                        ? "bg-purple-900/50 text-purple-300"
                        : "bg-purple-100 text-purple-700"
                    }`}
                  >
                    {isEnglish ? item.yearEn : item.year}
                  </span>
                </div>
                <h3
                  className={`text-xl font-bold mb-3 ${
                    darkMode ? "text-white" : "text-custom-black"
                  } tracking-tight`}
                >
                  {isEnglish ? item.titleEn : item.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {isEnglish ? item.descriptionEn : item.description}
                </p>
              </div>
            </div>

            {/* Center - Icon */}
            <div className="w-2/12 flex flex-col items-center pb-8">
              <div
                className={`${item.color} rounded-full w-16 h-16 flex items-center justify-center text-white text-2xl shadow-md`}
              >
                {item.icon}
              </div>
              {index !== timelineData.length - 1 && (
                <div
                  className={`w-1 flex-1 ${
                    darkMode ? "bg-gray-700" : "bg-gray-400"
                  }`}
                ></div>
              )}
            </div>

            {/* Right side - Empty */}
            <div className="w-5/12 pb-8"></div>
          </>
        ) : (
          <>
            {/* Left side - Empty */}
            <div className="w-5/12 pb-8"></div>

            {/* Center - Icon */}
            <div className="w-2/12 flex flex-col items-center pb-8">
              <div
                className={`${item.color} rounded-full w-16 h-16 flex items-center justify-center text-white text-2xl shadow-md`}
              >
                {item.icon}
              </div>
              {index !== timelineData.length - 1 && (
                <div
                  className={`w-1 flex-1 ${
                    darkMode ? "bg-gray-700" : "bg-gray-400"
                  }`}
                ></div>
              )}
            </div>

            {/* Right side - Content */}
            <div className="w-5/12 text-left pl-8 pb-8">
              <div
                className={`${
                  darkMode
                    ? "bg-gray-800 border-gray-700"
                    : "bg-white border-gray-300"
                } border rounded-xl p-6 shadow-sm`}
              >
                <div className="flex items-center mb-3">
                  <span
                    className={`text-xs font-medium px-3 py-1 rounded-md ${
                      darkMode
                        ? "bg-purple-900/50 text-purple-300"
                        : "bg-purple-100 text-purple-700"
                    }`}
                  >
                    {isEnglish ? item.yearEn : item.year}
                  </span>
                </div>
                <h3
                  className={`text-xl font-bold mb-3 ${
                    darkMode ? "text-white" : "text-custom-black"
                  } tracking-tight`}
                >
                  {isEnglish ? item.titleEn : item.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${
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
      className={`w-full pt-16 pb-20 ${
        darkMode ? "bg-custom-black" : "bg-custom-beige"
      }`}
    >
      <div id="timeline" className="max-w-6xl mx-auto px-4">
        <h2
          className={`text-5xl font-bold text-center mb-4 ${
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
          className={`text-center text-xl mb-20 ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {t?.timeline?.subtitle || "De mes débuts à aujourd'hui"}
        </p>

        {/* Timeline for desktop */}
        <div className="hidden md:block">
          {timelineData.map((item, index) => (
            <TimelineItem key={index} item={item} index={index} />
          ))}
        </div>

        {/* Timeline for mobile - simplified vertical */}
        <div className="md:hidden">
          {timelineData.map((item, index) => {
            const isEnglish = language === "en";
            return (
              <div key={index} className="flex mb-8">
                <div className="flex flex-col items-center mr-4">
                  <div
                    className={`${item.color} rounded-full w-12 h-12 flex items-center justify-center text-white text-lg shadow-md`}
                  >
                    {item.icon}
                  </div>
                  {index !== timelineData.length - 1 && (
                    <div
                      className={`w-1 flex-1 ${
                        darkMode ? "bg-gray-700" : "bg-gray-400"
                      }`}
                    ></div>
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <div
                    className={`${
                      darkMode
                        ? "bg-gray-800 border-gray-700"
                        : "bg-white border-gray-300"
                    } border rounded-xl p-4 shadow-sm`}
                  >
                    <div className="mb-3">
                      <span
                        className={`text-xs font-medium px-3 py-1 rounded-md ${
                          darkMode
                            ? "bg-purple-900/50 text-purple-300"
                            : "bg-purple-100 text-purple-700"
                        }`}
                      >
                        {isEnglish ? item.yearEn : item.year}
                      </span>
                    </div>
                    <h3
                      className={`text-lg font-bold mb-2 ${
                        darkMode ? "text-white" : "text-custom-black"
                      } tracking-tight`}
                    >
                      {isEnglish ? item.titleEn : item.title}
                    </h3>
                    <p
                      className={`text-sm leading-relaxed ${
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
