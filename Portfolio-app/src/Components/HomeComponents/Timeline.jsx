import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { LanguageContext } from "../../context/LanguageContext";
import { FaGraduationCap, FaBriefcase, FaCode, FaRocket } from "react-icons/fa";

const Timeline = () => {
  const { darkMode } = useContext(ThemeContext);
  const { t } = useContext(LanguageContext);

  const timelineData = [
    {
      year: "2024 - Présent",
      yearEn: "2024 - Present",
      title: "Étudiant à Epitech Paris",
      titleEn: "Student at Epitech Paris",
      description:
        "Formation en développement informatique avec une spécialisation en développement web full-stack et data analyse.",
      descriptionEn:
        "Computer science training with a specialization in full-stack web development and data analysis.",
      icon: <FaGraduationCap />,
      color: "bg-blue-500",
    },
    {
      year: "2024",
      yearEn: "2024",
      title: "Projet Back2Fest",
      titleEn: "Back2Fest Project",
      description:
        "Création d'un site vitrine pour un festival avec React, Python et Express. Gestion complète du backend avec API REST et base de données.",
      descriptionEn:
        "Creation of a showcase website for a festival with React, Python and Express. Complete backend management with REST API and database.",
      icon: <FaRocket />,
      color: "bg-purple-500",
    },
    {
      year: "2023",
      yearEn: "2023",
      title: "Projet SneaKR",
      titleEn: "SneaKR Project",
      description:
        "Développement d'un site e-commerce de sneakers avec React et Strapi. Intégration de systèmes de paiement et gestion de contenu.",
      descriptionEn:
        "Development of a sneakers e-commerce site with React and Strapi. Payment systems integration and content management.",
      icon: <FaBriefcase />,
      color: "bg-green-500",
    },
    {
      year: "2023",
      yearEn: "2023",
      title: "Projet YOWL",
      titleEn: "YOWL Project",
      description:
        "Création d'un réseau social complet de A à Z avec React, Express et PHP. Gestion des utilisateurs, publications et interactions.",
      descriptionEn:
        "Creation of a complete social network from scratch with React, Express and PHP. User management, posts and interactions.",
      icon: <FaCode />,
      color: "bg-yellow-500",
    },
    {
      year: "2022",
      yearEn: "2022",
      title: "Début du développement web",
      titleEn: "Web development beginnings",
      description:
        "Premiers pas dans le développement web avec HTML, CSS et JavaScript. Découverte de React et des frameworks modernes.",
      descriptionEn:
        "First steps in web development with HTML, CSS and JavaScript. Discovery of React and modern frameworks.",
      icon: <FaCode />,
      color: "bg-red-500",
    },
  ];

  const TimelineItem = ({ item, index }) => {
    const isLeft = index % 2 === 0;
    const isFrench = t === undefined || !t.timeline;

    return (
      <div className={`flex items-center w-full mb-8`}>
        {isLeft ? (
          <>
            {/* Left side - Content */}
            <div className="w-5/12 text-right pr-8">
              <div
                className={`${
                  darkMode
                    ? "bg-gray-800 border-gray-700"
                    : "bg-white border-gray-200"
                } border-2 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
              >
                <span
                  className={`text-sm font-semibold ${
                    darkMode
                      ? "text-custom-purple-light"
                      : "text-custom-purple-dark"
                  }`}
                >
                  {isFrench ? item.year : item.yearEn}
                </span>
                <h3
                  className={`text-xl font-bold mt-2 mb-3 ${
                    darkMode ? "text-white" : "text-custom-black"
                  }`}
                >
                  {isFrench ? item.title : item.titleEn}
                </h3>
                <p
                  className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}
                >
                  {isFrench ? item.description : item.descriptionEn}
                </p>
              </div>
            </div>

            {/* Center - Icon */}
            <div className="w-2/12 flex justify-center relative">
              <div
                className={`${item.color} rounded-full w-16 h-16 flex items-center justify-center text-white text-2xl shadow-lg z-10`}
              >
                {item.icon}
              </div>
              {index !== timelineData.length - 1 && (
                <div
                  className={`absolute top-16 w-1 h-24 ${
                    darkMode ? "bg-gray-700" : "bg-gray-300"
                  }`}
                ></div>
              )}
            </div>

            {/* Right side - Empty */}
            <div className="w-5/12"></div>
          </>
        ) : (
          <>
            {/* Left side - Empty */}
            <div className="w-5/12"></div>

            {/* Center - Icon */}
            <div className="w-2/12 flex justify-center relative">
              <div
                className={`${item.color} rounded-full w-16 h-16 flex items-center justify-center text-white text-2xl shadow-lg z-10`}
              >
                {item.icon}
              </div>
              {index !== timelineData.length - 1 && (
                <div
                  className={`absolute top-16 w-1 h-24 ${
                    darkMode ? "bg-gray-700" : "bg-gray-300"
                  }`}
                ></div>
              )}
            </div>

            {/* Right side - Content */}
            <div className="w-5/12 text-left pl-8">
              <div
                className={`${
                  darkMode
                    ? "bg-gray-800 border-gray-700"
                    : "bg-white border-gray-200"
                } border-2 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
              >
                <span
                  className={`text-sm font-semibold ${
                    darkMode
                      ? "text-custom-purple-light"
                      : "text-custom-purple-dark"
                  }`}
                >
                  {isFrench ? item.year : item.yearEn}
                </span>
                <h3
                  className={`text-xl font-bold mt-2 mb-3 ${
                    darkMode ? "text-white" : "text-custom-black"
                  }`}
                >
                  {isFrench ? item.title : item.titleEn}
                </h3>
                <p
                  className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}
                >
                  {isFrench ? item.description : item.descriptionEn}
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
      id="timeline"
      className={`w-full py-20 ${
        darkMode ? "bg-custom-black" : "bg-custom-beige"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2
          className={`text-5xl font-bold text-center mb-4 ${
            darkMode ? "text-white" : "text-custom-black"
          }`}
        >
          {t?.timeline?.title || "Mon Parcours"}
        </h2>
        <p
          className={`text-center text-xl mb-16 ${
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
            const isFrench = t === undefined || !t.timeline;
            return (
              <div key={index} className="flex mb-8">
                <div className="flex flex-col items-center mr-4">
                  <div
                    className={`${item.color} rounded-full w-12 h-12 flex items-center justify-center text-white text-xl shadow-lg`}
                  >
                    {item.icon}
                  </div>
                  {index !== timelineData.length - 1 && (
                    <div
                      className={`w-1 h-full min-h-[80px] ${
                        darkMode ? "bg-gray-700" : "bg-gray-300"
                      }`}
                    ></div>
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <div
                    className={`${
                      darkMode
                        ? "bg-gray-800 border-gray-700"
                        : "bg-white border-gray-200"
                    } border-2 rounded-lg p-4 shadow-lg`}
                  >
                    <span
                      className={`text-sm font-semibold ${
                        darkMode
                          ? "text-custom-purple-light"
                          : "text-custom-purple-dark"
                      }`}
                    >
                      {isFrench ? item.year : item.yearEn}
                    </span>
                    <h3
                      className={`text-lg font-bold mt-2 mb-2 ${
                        darkMode ? "text-white" : "text-custom-black"
                      }`}
                    >
                      {isFrench ? item.title : item.titleEn}
                    </h3>
                    <p
                      className={`text-sm ${
                        darkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {isFrench ? item.description : item.descriptionEn}
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
