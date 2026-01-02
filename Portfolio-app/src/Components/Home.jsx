import { useContext } from "react";
import "../App.css";
import Présentation from "./HomeComponents/Présentation";
import Projets from "./HomeComponents/Projets";
import TechSkills from "./HomeComponents/TechSkills";
import Timeline from "./HomeComponents/Timeline";
import Contact from "./HomeComponents/Contact";
import { ThemeContext } from "../context/ThemeContext";

const Home = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div
      className={`${
        darkMode ? "bg-custom-black" : "bg-custom-beige"
      } transition-colors duration-300`}
    >
      <section id="présentation" className="pt-20 pb-24">
        <Présentation />
      </section>
      <section id="tech-skills" className="pt-20 pb-24">
        <TechSkills />
      </section>
      <section id="projets" className="pt-20 pb-24">
        <Projets />
      </section>
      <section id="timeline" className="pt-20 pb-24">
        <Timeline />
      </section>
      <section id="contact" className="pt-20 pb-24">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
