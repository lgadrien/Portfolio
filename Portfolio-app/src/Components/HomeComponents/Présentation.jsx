import { useState, useEffect, useContext } from "react";
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

const Présentation = () => {
  const { darkMode } = useContext(ThemeContext);
  const { t, language } = useContext(LanguageContext);
  const [age, setAge] = useState(calculateAge("2005-03-07"));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setAge(calculateAge("2005-03-07"));
    }, 86400000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      id="présentation"
      className={`flex flex-col lg:flex-row items-center justify-between px-4 lg:px-16 py-20 mx-auto max-w-7xl transition-colors duration-300 ${
        darkMode ? "dark:text-white text-gray-900" : "text-gray-900"
      }`}
    >
      {/* Image de profil en haut pour mobile */}
      <div className="flex items-center justify-center w-full lg:w-1/2 lg:order-2 order-1 mb-6 lg:mb-0 animate-fadeIn">
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
        <div className="flex items-center justify-center lg:justify-start space-x-3 animate-slideInLeft">
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
          <span className="wave text-3xl lg:text-5xl" aria-label="wave">
            👋
          </span>
        </div>
        <p className="text-lg lg:text-xl leading-relaxed animate-slideInLeft delay-100">
          {language === "fr" ? (
            <>
              Développeur{" "}
              <span
                className={`${
                  darkMode
                    ? "text-custom-purple-light"
                    : "text-custom-purple-dark"
                } font-semibold`}
              >
                full-stack
              </span>
              , et{" "}
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
              l&apos;entrepreneuriat et la finance.
            </>
          ) : (
            <>
              <span
                className={`${
                  darkMode
                    ? "text-custom-purple-light"
                    : "text-custom-purple-dark"
                } font-semibold`}
              >
                Full-stack
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
              finance.
            </>
          )}
        </p>
        <ul className="space-y-3 text-lg animate-slideInLeft delay-200">
          <li className="hover:translate-x-2 transition-transform duration-300">
            {language === "fr" ? (
              <>
                🎓 Étudiant à <strong>Epitech Paris</strong>, promotion{" "}
                <strong>2028</strong>.
              </>
            ) : (
              <>
                🎓 Student at <strong>Epitech Paris</strong>, class of{" "}
                <strong>2028</strong>.
              </>
            )}
          </li>
          <li className="hover:translate-x-2 transition-transform duration-300">
            {language === "fr" ? (
              <>
                📅 Âge actuel : <strong>{age} ans</strong>.
              </>
            ) : (
              <>
                📅 Current age: <strong>{age} years old</strong>.
              </>
            )}
          </li>
          <li className="hover:translate-x-2 transition-transform duration-300">
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
              } hover:underline font-semibold`}
            >
              GitHub
            </a>
            .
          </li>
          <li className="hover:translate-x-2 transition-transform duration-300">
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
              } hover:underline font-semibold`}
            >
              {language === "fr" ? "mon email" : "my email"}
            </a>
            .
          </li>
        </ul>
        <div className="flex justify-center lg:justify-start space-x-6 animate-slideInLeft delay-300">
          <a
            href="https://www.linkedin.com/in/adrien-le-guen/"
            target="_blank"
            rel="noopener noreferrer"
            className={`${
              darkMode ? "text-custom-purple-light" : "text-custom-purple-dark"
            } hover:text-custom-purple-light transition-all duration-300 hover:scale-125 transform`}
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
            } hover:text-custom-purple-light transition-all duration-300 hover:scale-125 transform`}
            aria-label="Voir mon profil GitHub"
          >
            <FaGithub size={32} aria-hidden="true" />
          </a>
          <a
            href="mailto:adrien.leguen.p@gmail.com"
            className={`${
              darkMode ? "text-gray-300" : "text-light-accent"
            } hover:text-custom-purple-light transition-all duration-300 hover:scale-125 transform`}
            aria-label="M'envoyer un email"
          >
            <FaEnvelope size={32} aria-hidden="true" />
          </a>
        </div>
        <a
          href="/CV_Adrien_Le_Guen.pdf"
          download="CV_Adrien_Le_Guen.pdf"
          className={`inline-block ${
            darkMode
              ? "bg-custom-purple-light text-custom-black hover:bg-white"
              : "bg-custom-purple-dark text-white hover:bg-custom-purple-light"
          } font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl mt-4 animate-slideInLeft delay-400`}
          aria-label="Télécharger le CV d'Adrien Le Guen au format PDF"
        >
          <FaDownload className="mr-2 inline" aria-hidden="true" />{" "}
          {t.home.downloadCV}
        </a>
      </div>
      <style>{`
        @keyframes waveAnimation {
          0% { transform: rotate(0deg); }
          10% { transform: rotate(14deg); }
          20% { transform: rotate(-8deg); }
          30% { transform: rotate(14deg); }
          40% { transform: rotate(-4deg); }
          50% { transform: rotate(10deg); }
          60% { transform: 0deg; }
          100% { transform: 0deg; }
        }
        .wave {
          animation: waveAnimation 2s infinite;
          transform-origin: 70% 70%;
        }
      `}</style>
    </div>
  );
};

export default Présentation;
