import { useContext } from "react";
import "../App.css";
import Présentation from "./HomeComponents/Présentation";
import Projets from "./HomeComponents/Projets";
import TechSkills from "./HomeComponents/TechSkills";
import Contact from "./HomeComponents/Contact";
import { ThemeContext } from "../context/ThemeContext";

const Home = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div
      className={`${
        darkMode ? "bg-gray-800" : "bg-white"
      } transition-colors duration-300`}
    >
      <section id="présentation" className="py-24">
        <Présentation />
      </section>
      <section id="tech-skills" className="py-24">
        <TechSkills />
      </section>
      <section id="projets" className="py-24">
        <Projets />
      </section>
      <section id="contact" className="py-24">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
