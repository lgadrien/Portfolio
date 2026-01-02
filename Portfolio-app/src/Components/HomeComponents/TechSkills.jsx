import { useState, useMemo } from "react";
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
} from "react-icons/si";
import { FaFigma } from "react-icons/fa";

const TechCard = ({ href, Icon, color, name }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    title={name}
    className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-300 dark:border-gray-700 hover:border-blue-500"
    aria-label={`En savoir plus sur ${name}`}
  >
    <Icon color={color} size={40} aria-hidden="true" />
    <p className="text-sm font-medium mt-3 text-gray-800 dark:text-white">
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
  const [filter, setFilter] = useState("Tout");

  const filteredTechnologies = useMemo(
    () =>
      filter === "Tout"
        ? technologies
        : technologies.filter((tech) => tech.type === filter),
    [filter]
  );

  return (
    <div id="compétences" className="pt-40 px-4 py-16 mx-auto w-full max-w-5xl">
      {/* Titre aligné au centre */}
      <h3 className="text-3xl font-extrabold text-center mb-8 dark:text-gray-200">
        Technologies que j'utilise
      </h3>

      {/* Boutons de filtrage centrés */}
      <div className="flex flex-wrap justify-center mb-8 gap-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-6 py-2 rounded-full font-semibold text-sm transition ${
              filter === category
                ? "bg-blue-500 text-white shadow-lg"
                : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-300 hover:bg-blue-500 hover:text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Cartes technologiques */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {filteredTechnologies.map((tech) => (
          <TechCard
            key={tech.name}
            href={tech.href}
            Icon={tech.Icon}
            color={tech.color}
            name={tech.name}
          />
        ))}
      </div>
    </div>
  );
};

export default TechSkills;
