import { useState, useEffect, useContext, useRef } from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaDownload } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import { ThemeContext } from "../../context/ThemeContext";
import { LanguageContext } from "../../context/LanguageContext";

const calculateAge = (birthDate) => {
  const today = new Date();
  const birthDateObj = new Date(birthDate);
  let age = today.getFullYear() - birthDateObj.getFullYear();
  const monthDifference = today.getMonth() - birthDateObj.getMonth();
  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birthDateObj.getDate())
  ) {
    age--;
  }
  return age;
};

const useScrollReveal = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReducedMotion =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return { ref, isVisible };
};

const Présentation = () => {
  const { darkMode } = useContext(ThemeContext);
  const { t, language } = useContext(LanguageContext);
  const [age, setAge] = useState(calculateAge("2005-03-07"));
  const [heroReady, setHeroReady] = useState(false);

  const heroTitle = useScrollReveal();
  const heroSubtitle = useScrollReveal();
  const heroList = useScrollReveal();
  const heroSocial = useScrollReveal();
  const heroCta = useScrollReveal();
  const profileBlock = useScrollReveal();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setAge(calculateAge("2005-03-07"));
    }, 86400000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHeroReady(true);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      id="présentation"
      className={`flex flex-col lg:flex-row items-center justify-between px-4 lg:px-16 py-20 mx-auto max-w-7xl ${
        darkMode ? "dark:text-white text-gray-900" : "text-gray-900"
      }`}
    >
      {/* Image de profil en haut pour mobile */}
      <div
        ref={profileBlock.ref}
        className={`flex items-center justify-center w-full lg:w-1/2 lg:order-2 order-1 mb-6 lg:mb-0 reveal ${
          profileBlock.isVisible ? "reveal-visible" : ""
        }`}
        style={{ transitionDelay: "120ms" }}
      >
        <Tilt
          className="w-48 h-48 lg:w-64 lg:h-64"
          tiltMaxAngleX={20}
          tiltMaxAngleY={20}
          perspective={1000}
          scale={1.05}
          glareEnable
          glareMaxOpacity={0.5}
          glarePosition="bottom"
          style={{
            borderRadius: "50%",
            overflow: "hidden",
          }}
        >
          <div className="relative w-full h-full rounded-full shadow-2xl overflow-hidden ring-4 ring-custom-purple-light ring-opacity-70">
            <img
              src="/img/PP.png"
              alt="Photo de profil d'Adrien Le Guen, développeur full-stack"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
        </Tilt>
      </div>
      {/* Texte de présentation */}
      <div className="flex flex-col justify-center w-full lg:w-1/2 lg:order-1 order-2 space-y-6 text-center lg:text-left">
        <div
          ref={heroTitle.ref}
          className={`flex items-center justify-center lg:justify-start space-x-3 hero-sequence ${
            heroReady && heroTitle.isVisible ? "hero-sequence-visible" : ""
          }`}
          style={{ transitionDelay: heroReady ? "0ms" : undefined }}
        >
          <h1 className="text-3xl lg:text-5xl font-extrabold whitespace-nowrap">
            {t.presentation.greeting}{" "}
            <span
              className={`${
                darkMode
                  ? "text-custom-purple-light"
                  : "text-custom-purple-dark"
              } font-bold`}
            >
              Adrien
            </span>
          </h1>
          <span className="text-3xl lg:text-5xl" aria-label="wave">
            👋
          </span>
        </div>
        <p
          ref={heroSubtitle.ref}
          className={`text-lg lg:text-xl leading-relaxed hero-sequence ${
            heroReady && heroSubtitle.isVisible ? "hero-sequence-visible" : ""
          }`}
          style={{ transitionDelay: heroReady ? "120ms" : undefined }}
        >
          {language === "fr" ? (
            <>
              Je suis développeur{" "}
              <span
                className={`${
                  darkMode
                    ? "text-custom-purple-light"
                    : "text-custom-purple-dark"
                } font-semibold`}
              >
                full-stack
              </span>{" "}
              et{" "}
              <span
                className={`${
                  darkMode
                    ? "text-custom-purple-light"
                    : "text-custom-purple-dark"
                } font-semibold`}
              >
                data analyst
              </span>
              , passionné par le code, les nouvelles technologies,
              l&apos;entrepreneuriat et la finance. J&apos;aime transformer des
              idées (ou des datasets un peu chaotiques) en projets concrets et
              utiles.
            </>
          ) : (
            <>
              I&apos;m a{" "}
              <span
                className={`${
                  darkMode
                    ? "text-custom-purple-light"
                    : "text-custom-purple-dark"
                } font-semibold`}
              >
                full-stack
              </span>{" "}
              developer and{" "}
              <span
                className={`${
                  darkMode
                    ? "text-custom-purple-light"
                    : "text-custom-purple-dark"
                } font-semibold`}
              >
                data analyst
              </span>
              , passionate about code, new technologies, entrepreneurship and
              finance. I enjoy turning raw ideas (or messy datasets) into
              concrete, useful projects.
            </>
          )}
        </p>
        <ul ref={heroList.ref} className="space-y-3 text-lg">
          <li
            className={`transform-gpu transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
              heroReady && heroList.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-3"
            }`}
            style={{
              transitionDelay:
                heroReady && heroList.isVisible ? "0ms" : undefined,
            }}
          >
            {language === "fr" ? (
              <>
                🎓 Étudiant à <strong>Epitech Paris</strong>, promotion{" "}
                <strong>2028</strong>, je prépare le{" "}
                <strong>Master of Science Business & Technology Manager</strong>
                .
              </>
            ) : (
              <>
                🎓 Student at <strong>Epitech Paris</strong>, class of{" "}
                <strong>2028</strong>, preparing for a{" "}
                <strong>Master of Science Business & Technology Manager</strong>
                .
              </>
            )}
          </li>
          <li
            className={`transform-gpu transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
              heroReady && heroList.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-3"
            }`}
            style={{
              transitionDelay:
                heroReady && heroList.isVisible ? "80ms" : undefined,
            }}
          >
            {language === "fr" ? (
              <>
                🚀 En 2026, je recherche une alternance en data / IA pour
                continuer à monter en compétences et travailler sur des projets
                concrets.
              </>
            ) : (
              <>
                🚀 In 2026, I&apos;m looking for an apprenticeship in data / AI
                to keep learning and work on real-world projects.
              </>
            )}
          </li>
          <li
            className={`transform-gpu transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
              heroReady && heroList.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-3"
            }`}
            style={{
              transitionDelay:
                heroReady && heroList.isVisible ? "160ms" : undefined,
            }}
          >
            {language === "fr" ? (
              <>
                📅 Âge actuel : <strong>{age} ans</strong>.
              </>
            ) : (
              <>
                📅 Current age : <strong>{age} years old</strong>.
              </>
            )}
          </li>
          <li
            className={`transform-gpu transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
              heroReady && heroList.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-3"
            }`}
            style={{
              transitionDelay:
                heroReady && heroList.isVisible ? "240ms" : undefined,
            }}
          >
            {language === "fr" ? (
              <>💻 Découvrez mes projets sur </>
            ) : (
              <>💻 Check out my projects on </>
            )}
            <a
              href="https://github.com/lgadrien"
              target="_blank"
              rel="noopener noreferrer"
              className={`${
                darkMode
                  ? "text-custom-purple-light"
                  : "text-custom-purple-dark"
              } link-underline font-semibold`}
            >
              GitHub
            </a>
            .
          </li>
          <li
            className={`transform-gpu transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
              heroReady && heroList.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-3"
            }`}
            style={{
              transitionDelay:
                heroReady && heroList.isVisible ? "320ms" : undefined,
            }}
          >
            {language === "fr" ? (
              <>✉️ Contactez-moi via </>
            ) : (
              <>✉️ Contact me via </>
            )}
            <a
              href="mailto:adrien.leguen.p@gmail.com"
              className={`${
                darkMode
                  ? "text-custom-purple-light"
                  : "text-custom-purple-dark"
              } link-underline font-semibold`}
            >
              {language === "fr" ? "mon email" : "my email"}
            </a>
            .
          </li>
        </ul>
        <div
          ref={heroSocial.ref}
          className={`flex justify-center lg:justify-start space-x-6 hero-sequence ${
            heroReady && heroSocial.isVisible ? "hero-sequence-visible" : ""
          }`}
          style={{ transitionDelay: heroReady ? "320ms" : undefined }}
        >
          <a
            href="https://www.linkedin.com/in/adrien-le-guen/"
            target="_blank"
            rel="noopener noreferrer"
            className={`${
              darkMode ? "text-custom-purple-light" : "text-custom-purple-dark"
            } hover:text-custom-purple-light transition-transform duration-300 transform-gpu hover:scale-110`}
            aria-label="Voir mon profil LinkedIn"
          >
            <FaLinkedin size={32} aria-hidden="true" />
          </a>
          <a
            href="https://github.com/lgadrien"
            target="_blank"
            rel="noopener noreferrer"
            className={`${
              darkMode ? "text-gray-300" : "text-light-accent"
            } hover:text-custom-purple-light transition-transform duration-300 transform-gpu hover:scale-110`}
            aria-label="Voir mon profil GitHub"
          >
            <FaGithub size={32} aria-hidden="true" />
          </a>
          <a
            href="mailto:adrien.leguen.p@gmail.com"
            className={`${
              darkMode ? "text-gray-300" : "text-light-accent"
            } hover:text-custom-purple-light transition-transform duration-300 transform-gpu hover:scale-110`}
            aria-label="M'envoyer un email"
          >
            <FaEnvelope size={32} aria-hidden="true" />
          </a>
        </div>
        <a
          ref={heroCta.ref}
          href="/CV_Adrien_Le_Guen.pdf"
          download="CV_Adrien_Le_Guen.pdf"
          className={`inline-block transform-gpu ${
            darkMode
              ? "bg-custom-purple-light text-custom-black hover:bg-white"
              : "bg-custom-purple-dark text-white hover:bg-custom-purple-light"
          } font-semibold py-3 px-8 rounded-lg shadow-lg transition-[transform,box-shadow,background-color,color] duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] hover:scale-[1.03] hover:shadow-2xl mt-4 hero-sequence ${
            heroReady && heroCta.isVisible ? "hero-sequence-visible" : ""
          }`}
          style={{ transitionDelay: heroReady ? "420ms" : undefined }}
          aria-label="Télécharger le CV d'Adrien Le Guen au format PDF"
        >
          <FaDownload className="mr-2 inline" aria-hidden="true" />{" "}
          {t.home.downloadCV}
        </a>
      </div>
    </div>
  );
};

export default Présentation;
