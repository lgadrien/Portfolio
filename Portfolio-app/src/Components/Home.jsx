import { useContext } from "react";
import "../App.css";
import Présentation from "./HomeComponents/Présentation";
import TechSkills from "./HomeComponents/TechSkills";
import Timeline from "./HomeComponents/Timeline";
import Contact from "./HomeComponents/Contact";
import AnimatedBackground from "./AnimatedBackground";
import { ThemeContext } from "../context/ThemeContext";

const Home = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div
      className={`${
        darkMode ? "bg-custom-black" : "bg-custom-beige"
      } min-h-screen relative`}
    >
      <AnimatedBackground />
      <div className="relative z-10">
        <div className="min-h-fit lg:min-h-screen flex items-center justify-center pt-28 pb-8">
          <Présentation />
        </div>
        <div className="min-h-fit lg:min-h-screen flex items-center justify-center pt-28 pb-8">
          <TechSkills />
        </div>
        <div className="min-h-fit lg:min-h-screen flex items-center justify-center pt-28 pb-8">
          <Timeline />
        </div>
        <div className="min-h-fit lg:min-h-screen flex items-center justify-center pt-28 pb-8">
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Home;
