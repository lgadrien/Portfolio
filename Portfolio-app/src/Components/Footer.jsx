import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const { darkMode } = useContext(ThemeContext);
  const { t } = useContext(LanguageContext);
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`border-t py-6 ${
        darkMode
          ? "bg-dark-bg text-gray-300 border-gray-800"
          : "bg-light-bg text-light-accent border-gray-300"
      }`}
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">
          © {currentYear} Adrien Le Guen. {t.footer.rights}
        </p>
        <div className="flex space-x-6">
          <a
            href="https://www.linkedin.com/in/adrien-le-guen/"
            target="_blank"
            rel="noopener noreferrer"
            className={`${
              darkMode ? "text-dark-accent" : "text-light-accent"
            } hover:text-dark-accent`}
            title="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://github.com/lgadrien"
            target="_blank"
            rel="noopener noreferrer"
            className={`${
              darkMode ? "text-gray-400" : "text-light-accent"
            } hover:text-dark-accent`}
            title="GitHub"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="mailto:adrien.leguen.p@gmail.com"
            className={`${
              darkMode ? "text-gray-300" : "text-light-accent"
            } hover:text-dark-accent`}
            title="E-mail"
          >
            <FaEnvelope size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
