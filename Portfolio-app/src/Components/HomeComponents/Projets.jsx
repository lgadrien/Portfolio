import { useState, useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { LanguageContext } from "../../context/LanguageContext";

const projectData = [
  {
    title: "Yowl",
    description:
      "Créer un réseau social de A à Z avec React et Tailwind CSS. Créer un back complet avec JS et Express. Avec une base de donnée en PHP avec PHPMyAdmin.",
    descriptionEn:
      "Create a social network from scratch with React and Tailwind CSS. Build a complete backend with JS and Express. With a PHP database using PHPMyAdmin.",
    technologies: [
      {
        name: "React",
        logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      },
      {
        name: "Tailwind CSS",
        logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
      },
      {
        name: "JavaScript",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
      },
      {
        name: "Express",
        logo: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
      },
      {
        name: "PHPMyAdmin",
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/4f/PhpMyAdmin_logo.svg",
      },
    ],
    github: "https://github.com/lgadrien/YOWL",
    status: "Fini",
  },
  {
    title: "SneaKR",
    description:
      "Créer un site e-commerce de sneakers avec React et Node.js. Créer un back complet avec Strapi.",
    descriptionEn:
      "Create a sneakers e-commerce website with React and Node.js. Build a complete backend with Strapi.",
    technologies: [
      {
        name: "React",
        logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      },
      {
        name: "Tailwind CSS",
        logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
      },
      {
        name: "JavaScript",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
      },
      {
        name: "Strapi",
        logo: "https://cdn.worldvectorlogo.com/logos/strapi-2.svg",
      },
    ],
    github: "https://github.com/lgadrien/SneaKR",
    status: "Fini",
  },
  {
    title: "Portfolio",
    description: "Mon portfolio afin que mes projets soient répertoriés.",
    descriptionEn: "My portfolio to showcase my projects.",
    technologies: [
      {
        name: "React",
        logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      },
      {
        name: "Tailwind CSS",
        logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
      },
      {
        name: "JavaScript",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
      },
    ],
    github: "https://github.com/lgadrien/Portfolio",
    status: "En cours",
  },
  {
    title: "Back2Fest",
    description:
      "Créer un site vitrine pour un festival avec React et Tailwind CSS. Créer un back complet avec une API en Python et en JS avec un base de donnée en PHP.",
    descriptionEn:
      "Create a showcase website for a festival with React and Tailwind CSS. Build a complete backend with a Python and JS API with a PHP database.",
    technologies: [
      {
        name: "React",
        logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      },
      {
        name: "Tailwind CSS",
        logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
      },
      {
        name: "JavaScript",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
      },
      {
        name: "Express",
        logo: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
      },
      {
        name: "PHPMyAdmin",
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/4f/PhpMyAdmin_logo.svg",
      },
      {
        name: "Python",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      },
    ],
    github: "https://github.com/lgadrien/Back2Fest",
    status: "Fini",
  },
];

const Projects = () => {
  const { darkMode } = useContext(ThemeContext);
  const { t, language } = useContext(LanguageContext);
  const [selectedProject, setSelectedProject] = useState(null);
  const [sortStatus, setSortStatus] = useState(
    language === "fr" ? "Tous" : "All"
  );

  const handleSortChange = (status) => {
    setSortStatus(status);
  };

  const statusMapping = {
    Tous: ["Tous", "All"],
    "En cours": ["En cours", "In Progress"],
    "En pause": ["En pause", "On Hold"],
    Fini: ["Fini", "Finished"],
  };

  const getStatusInCurrentLanguage = (projectStatus) => {
    for (const [key, values] of Object.entries(statusMapping)) {
      if (values.includes(projectStatus)) {
        return language === "fr" ? values[0] : values[1];
      }
    }
    return projectStatus;
  };

  const filteredProjects =
    sortStatus === t.projects.all ||
    sortStatus === "Tous" ||
    sortStatus === "All"
      ? projectData
      : projectData.filter((project) => {
          const translatedStatus = getStatusInCurrentLanguage(project.status);
          return translatedStatus === sortStatus;
        });

  return (
    <div id="projets" className="w-full mx-auto max-w-6xl px-4">
      {/* Titre */}
      <h2 className="text-4xl font-extrabold text-center mb-4 animate-fadeInUp">
        <span
          className={`${
            darkMode ? "text-custom-purple-light" : "text-custom-purple-dark"
          } font-bold`}
        >
          {t.projects.title}
        </span>
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-12 animate-fadeInUp delay-100">
        {t.projects.subtitle}
      </p>

      {/* Boutons de tri */}
      <div
        className="flex justify-center flex-wrap gap-4 mb-12 animate-fadeInUp delay-200"
        role="group"
        aria-label="Filtres de projets"
      >
        {[
          t.projects.all,
          t.projects.inProgress,
          language === "fr" ? "En pause" : "On Hold",
          t.projects.finished,
        ].map((status, index) => (
          <button
            key={status}
            onClick={() => handleSortChange(status)}
            className={`px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-custom-purple-light ${
              sortStatus === status
                ? darkMode
                  ? "bg-custom-purple-light text-custom-black shadow-lg"
                  : "bg-custom-purple-dark text-white shadow-lg"
                : darkMode
                ? "bg-custom-dark text-gray-300 hover:bg-custom-purple-light hover:text-custom-black"
                : "bg-white text-custom-purple-dark border border-custom-purple-dark hover:bg-custom-purple-dark hover:text-white"
            }`}
            aria-pressed={sortStatus === status}
            aria-label={`Filtrer les projets par statut: ${status}`}
          >
            {status}
          </button>
        ))}
      </div>

      {/* Message si aucun projet trouvé */}
      {filteredProjects.length === 0 ? (
        <div className="text-center py-12 animate-fadeIn">
          <p className="text-lg font-medium dark:text-gray-300">
            {language === "fr"
              ? "Aucun projet trouvé pour le type :"
              : "No projects found for type:"}{" "}
            <span
              className={`${
                darkMode
                  ? "text-custom-purple-light"
                  : "text-custom-purple-dark"
              } font-semibold`}
            >
              {sortStatus}
            </span>
            .
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              onClick={() => setSelectedProject(project)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedProject(project);
                }
              }}
              role="button"
              tabIndex={0}
              className={`relative group p-6 ${
                darkMode ? "bg-custom-dark" : "bg-white"
              } rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300 cursor-pointer border ${
                darkMode ? "border-gray-800" : "border-gray-200"
              } hover:border-custom-purple-light focus:outline-none focus:ring-2 focus:ring-custom-purple-light overflow-hidden animate-scaleIn`}
              style={{ animationDelay: `${index * 0.1}s` }}
              aria-label={`Voir les détails du projet ${project.title}`}
            >
              {/* Effet de brillance au hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent dark:via-gray-700 opacity-0 group-hover:opacity-20 transform -skew-x-12 group-hover:translate-x-full transition-all duration-1000"></div>

              <div className="relative z-10">
                <h3
                  className={`text-xl font-bold mb-3 ${
                    darkMode ? "text-white" : "text-custom-purple-dark"
                  } group-hover:text-custom-purple-light`}
                >
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 line-clamp-3 mb-4 leading-relaxed">
                  {language === "en" && project.descriptionEn
                    ? project.descriptionEn
                    : project.description}
                </p>
                <div className="flex flex-wrap gap-3 mt-4">
                  {project.technologies.map((tech) => (
                    <div key={tech.name} className="relative group/tech">
                      <img
                        src={tech.logo}
                        alt={`Logo ${tech.name}`}
                        className="h-9 w-9 transform group-hover:scale-110 transition-transform duration-300"
                        loading="lazy"
                      />
                      <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex justify-between items-center">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className={`${
                      darkMode
                        ? "text-custom-purple-light"
                        : "text-custom-purple-dark"
                    } hover:text-custom-purple-light font-semibold hover:underline flex items-center gap-1`}
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    {t.projects.viewCode}
                  </a>
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      project.status === "Fini" || project.status === "Finished"
                        ? darkMode
                          ? "bg-green-900 text-green-200"
                          : "bg-green-200 text-green-900"
                        : project.status === "En cours" ||
                          project.status === "In Progress"
                        ? darkMode
                          ? "bg-custom-purple-light bg-opacity-20 text-custom-purple-light"
                          : "bg-custom-purple-dark bg-opacity-20 text-custom-purple-dark"
                        : darkMode
                        ? "bg-yellow-900 text-yellow-200"
                        : "bg-yellow-200 text-yellow-900"
                    }`}
                  >
                    {getStatusInCurrentLanguage(project.status)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal de détails */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-md flex justify-center items-center z-50 p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedProject(null);
          }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div
            className={`relative w-full max-w-4xl max-h-[85vh] p-8 rounded-2xl overflow-y-auto transition-all duration-500 transform ${
              darkMode ? "bg-custom-dark" : "bg-custom-beige"
            } shadow-2xl border ${
              darkMode ? "border-gray-800" : "border-gray-300"
            } animate-scaleIn`}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 text-3xl hover:text-red-500 hover:rotate-90 transform transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 rounded-full w-10 h-10 flex items-center justify-center"
              aria-label="Fermer le modal"
            >
              &times;
            </button>
            <h4
              id="modal-title"
              className={`text-3xl font-bold mb-4 ${
                darkMode
                  ? "text-custom-purple-light"
                  : "text-custom-purple-dark"
              }`}
            >
              {selectedProject.title}
            </h4>
            <span
              className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4 ${
                selectedProject.status === "Fini"
                  ? darkMode
                    ? "bg-green-900 text-green-200"
                    : "bg-green-200 text-green-900"
                  : selectedProject.status === "En cours"
                  ? darkMode
                    ? "bg-custom-purple-light bg-opacity-20 text-custom-purple-light"
                    : "bg-custom-purple-dark bg-opacity-20 text-custom-purple-dark"
                  : darkMode
                  ? "bg-yellow-900 text-yellow-200"
                  : "bg-yellow-200 text-yellow-900"
              }`}
            >
              {getStatusInCurrentLanguage(selectedProject.status)}
            </span>
            <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg leading-relaxed">
              {language === "en" && selectedProject.descriptionEn
                ? selectedProject.descriptionEn
                : selectedProject.description}
            </p>
            <h5 className="text-lg font-semibold mb-4 dark:text-white">
              {language === "fr"
                ? "Technologies utilisées"
                : "Technologies used"}
            </h5>
            <div className="flex flex-wrap gap-4 mb-8">
              {selectedProject.technologies.map((tech) => (
                <div
                  key={tech.name}
                  className={`flex flex-col items-center gap-2 p-3 ${
                    darkMode ? "bg-custom-black" : "bg-white"
                  } rounded-lg hover:scale-110 transition-transform duration-300 border ${
                    darkMode ? "border-gray-800" : "border-gray-200"
                  }`}
                >
                  <img
                    src={tech.logo}
                    alt={`Logo ${tech.name}`}
                    className="h-12 w-12"
                    loading="lazy"
                  />
                  <span className="text-xs font-medium dark:text-gray-300">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
            <a
              href={selectedProject.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 ${
                darkMode
                  ? "bg-custom-purple-light text-custom-black hover:bg-white"
                  : "bg-custom-purple-dark text-white hover:bg-custom-dark"
              } font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              Voir sur GitHub
            </a>
          </div>
        </div>
      )}

      {/* Animation CSS supprimée : on utilise les classes globales d'animation */}
    </div>
  );
};

export default Projects;
