import { useContext } from "react";
import "../App.css";
import Présentation from "./HomeComponents/Présentation";
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
      <div
        id="présentation"
        className="min-h-screen flex items-center justify-center pt-28 pb-8"
      >
        <Présentation />
      </div>
      <div
        id="techskills"
        className="min-h-screen flex items-center justify-center pt-28 pb-8"
      >
        <TechSkills />
      </div>
      <div
        id="timeline"
        className="min-h-screen flex items-center justify-center pt-28 pb-8"
      >
        <Timeline />
      </div>
      <div
        id="contact"
        className="min-h-screen flex items-center justify-center pt-28 pb-8"
      >
        <Contact />
      </div>
    </div>
  );
};

export default Home;
