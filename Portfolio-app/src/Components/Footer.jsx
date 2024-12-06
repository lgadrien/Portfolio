import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const { darkMode } = useContext(ThemeContext);
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`border-t py-6 ${
        darkMode ? 'bg-gray-900 text-gray-300 border-gray-700' : 'bg-white text-gray-800 border-gray-200'
      }`}
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">© {currentYear} Adrien Le Guen. Tous droits réservés.</p>
        <div className="flex space-x-6">
          <a
            href="https://www.linkedin.com/in/adrien-le-guen-a544b62a9/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 transition-colors duration-300"
            title="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://github.com/lgadrien"
            target="_blank"
            rel="noopener noreferrer"
            className={`${darkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-600 hover:text-black'} transition-colors duration-300`}
            title="GitHub"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="mailto:adrien.leguen.p@gmail.com"
            className={`${darkMode ? 'text-gray-300 hover:text-gray-400' : 'text-gray-800 hover:text-gray-600'} transition-colors duration-300`}
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
