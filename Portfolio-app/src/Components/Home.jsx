import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../App.css";
import Présentation from "./HomeComponents/Présentation";
import TechSkills from "./HomeComponents/TechSkills";
import Timeline from "./HomeComponents/Timeline";
import Contact from "./HomeComponents/Contact";
import AnimatedBackground from "./AnimatedBackground";
import { useScrollToSection } from "../hooks/useScrollToSection";

const Home = () => {
  const location = useLocation();
  const { scrollToSection } = useScrollToSection();

  useEffect(() => {
    if (location.state?.targetId) {
      // Petit délai technique pour laisser le temps au layout de se stabiliser
      // et s'assurer que le DOM est prêt.
      requestAnimationFrame(() => {
        scrollToSection(location.state.targetId);
      });

      // Nettoyage de l'état pour éviter de rescroller au refresh
      window.history.replaceState({}, document.title);
    }
  }, [location.state, scrollToSection]);

  return (
    <div className="min-h-screen relative bg-custom-beige dark:bg-custom-black">
      <AnimatedBackground />
      <div className="relative z-10">
        <div
          id="présentation"
          className="min-h-fit lg:min-h-screen flex items-center justify-center pt-28 pb-8"
        >
          <Présentation />
        </div>
        <div
          id="techskills"
          className="min-h-fit lg:min-h-screen flex items-center justify-center pt-28 pb-8"
        >
          <TechSkills />
        </div>
        <div
          id="timeline"
          className="min-h-fit lg:min-h-screen flex items-center justify-center pt-28 pb-8"
        >
          <Timeline />
        </div>
        <div
          id="contact"
          className="min-h-fit lg:min-h-screen flex items-center justify-center pt-28 pb-8"
        >
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Home;
