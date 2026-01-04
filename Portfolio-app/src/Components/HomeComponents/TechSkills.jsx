import { useState, useMemo, useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { LanguageContext } from "../../context/LanguageContext";
import {
  DiCss3,
  DiDocker,
  DiPython,
  DiReact,
  DiJavascript1,
  DiNodejsSmall,
  DiMysql,
  DiPhotoshop,
} from "react-icons/di";
import {
  SiPostman,
  SiCanva,
  SiExpress,
  SiTailwindcss,
  SiMongodb,
  SiPandas,
  SiDataiku,
  SiStreamlit,
  SiPowerbi,
} from "react-icons/si";
import { FaFigma } from "react-icons/fa";

const TechCard = ({ href, Icon, color, name, darkMode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    title={name}
    className={`flex flex-col items-center p-6 ${
      darkMode ? "bg-custom-dark" : "bg-white"
    } rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border ${
      darkMode ? "border-gray-800" : "border-gray-200"
    } hover:border-custom-purple-light group transform hover:-translate-y-2`}
    aria-label={`En savoir plus sur ${name}`}
  >
    <div className="transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
      <Icon color={color} size={48} aria-hidden="true" />
    </div>
    <p
      className={`text-sm font-semibold mt-4 ${
        darkMode ? "text-white" : "text-custom-purple-dark"
      } group-hover:text-custom-purple-light`}
    >
      {name}
    </p>
  </a>
);

const technologies = [
  // Web
  {
    href: "https://www.w3schools.com/css/",
    Icon: DiCss3,
    color: "#1572B6",
    name: "CSS3",
    type: "Web",
  },
  {
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    Icon: DiJavascript1,
    color: "#F7DF1E",
    name: "JavaScript",
    type: "Web",
  },
  {
    href: "https://reactjs.org/",
    Icon: DiReact,
    color: "#61DAFB",
    name: "React",
    type: "Web",
  },
  {
    href: "https://nodejs.org/",
    Icon: DiNodejsSmall,
    color: "#339933",
    name: "Node.js",
    type: "Web",
  },
  {
    href: "https://expressjs.com/",
    Icon: SiExpress,
    color: "#000000",
    name: "Express.js",
    type: "Web",
  },
  {
    href: "https://tailwindcss.com/",
    Icon: SiTailwindcss,
    color: "#38B2AC",
    name: "Tailwind CSS",
    type: "Web",
  },
  {
    href: "https://www.mongodb.com/",
    Icon: SiMongodb,
    color: "#47A248",
    name: "MongoDB",
    type: "Web",
  },
  {
    href: "https://www.docker.com/",
    Icon: DiDocker,
    color: "#2496ED",
    name: "Docker",
    type: "Web",
  },
  {
    href: "https://postman.com",
    Icon: SiPostman,
    color: "#FF6C37",
    name: "Postman",
    type: "Web",
  },

  // Data
  {
    href: "https://www.python.org",
    Icon: DiPython,
    color: "#3776AB",
    name: "Python",
    type: "Data",
  },
  {
    href: "https://pandas.pydata.org/",
    Icon: SiPandas,
    color: "#150458",
    name: "Pandas",
    type: "Data",
  },
  {
    href: "https://www.mysql.com/",
    Icon: DiMysql,
    color: "#4479A1",
    name: "MySQL",
    type: "Data",
  },
  {
    href: "https://www.dataiku.com/",
    Icon: SiDataiku,
    color: "#2AB1AC",
    name: "Dataiku",
    type: "Data",
  },
  {
    href: "https://streamlit.io/",
    Icon: SiStreamlit,
    color: "#FF4B4B",
    name: "Streamlit",
    type: "Data",
  },
  {
    href: "https://powerbi.microsoft.com/",
    Icon: SiPowerbi,
    color: "#F2C811",
    name: "Power BI",
    type: "Data",
  },

  // Design
  {
    href: "https://www.figma.com/",
    Icon: FaFigma,
    color: "#F24E1E",
    name: "Figma",
    type: "Design",
  },
  {
    href: "https://www.canva.com/",
    Icon: SiCanva,
    color: "#00C4CC",
    name: "Canva",
    type: "Design",
  },
  {
    href: "https://www.adobe.com/products/premiere.html",
    Icon: DiPhotoshop,
    color: "#31A8FF",
    name: "Photoshop",
    type: "Design",
  },
];

const categories = ["Tout", "Web", "Data", "Design"];

const TechSkills = () => {
  const { darkMode } = useContext(ThemeContext);
  const { t, language } = useContext(LanguageContext);
  const [filter, setFilter] = useState(language === "fr" ? "Tout" : "All");

  const categories =
    language === "fr"
      ? ["Tout", "Web", "Data", "Design"]
      : ["All", "Web", "Data", "Design"];

  const filteredTechnologies = useMemo(
    () =>
      filter === "Tout" || filter === "All"
        ? technologies
        : technologies.filter((tech) => tech.type === filter),
    [filter]
  );

  return (
    <div className="px-4 py-20 mx-auto w-full max-w-6xl">
      {/* Titre aligné au centre */}
      <h3
        id="techskills"
        className="text-4xl font-extrabold text-center mb-4 animate-fadeInUp"
      >
        <span
          className={`${
            darkMode ? "text-custom-purple-light" : "text-custom-purple-dark"
          } font-bold`}
        >
          {t.skills.title}
        </span>
      </h3>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-12 animate-fadeInUp delay-100">
        {t.skills.subtitle}
      </p>

      {/* Boutons de filtrage centrés */}
      <div className="flex flex-wrap justify-center mb-12 gap-4 animate-fadeInUp delay-200">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 transform hover:scale-105 ${
              filter === category
                ? darkMode
                  ? "bg-custom-purple-light text-custom-black shadow-lg"
                  : "bg-custom-purple-dark text-white shadow-lg"
                : darkMode
                ? "bg-custom-dark text-gray-300 hover:bg-custom-purple-light hover:text-custom-black"
                : "bg-white text-custom-purple-dark border border-custom-purple-dark hover:bg-custom-purple-dark hover:text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Cartes technologiques */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {filteredTechnologies.map((tech, index) => (
          <div
            key={tech.name}
            className="animate-scaleIn"
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <TechCard
              href={tech.href}
              Icon={tech.Icon}
              color={tech.color}
              name={tech.name}
              darkMode={darkMode}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechSkills;
