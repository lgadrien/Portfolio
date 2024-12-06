import { useState, useEffect, useContext } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaDownload } from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';
import { ThemeContext } from '../../context/ThemeContext';
import ProfilePic from '../../../img/profile-pic.png';

const calculateAge = (birthDate) => {
  const today = new Date();
  const birthDateObj = new Date(birthDate);
  let age = today.getFullYear() - birthDateObj.getFullYear();
  const monthDifference = today.getMonth() - birthDateObj.getMonth();
  if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDateObj.getDate())) {
    age--;
  }
  return age;
};

const Présentation = () => {
  const { darkMode } = useContext(ThemeContext);
  const [age, setAge] = useState(calculateAge('2005-03-07'));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setAge(calculateAge('2005-03-07'));
    }, 86400000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      id="présentation"
      className={`flex flex-col lg:flex-row items-center justify-between px-4 lg:px-16 py-12 mx-auto max-w-7xl transition-colors duration-300 ${
        darkMode ? 'dark:text-white text-gray-900' : 'text-gray-900'
      }`}
      style={{ paddingTop: 'calc(10vh + 2rem)' }} // Padding-top ajusté
    >
      {/* Image de profil en haut pour mobile */}
      <div className="flex items-center justify-center w-full lg:w-1/2 lg:order-2 order-1 mb-6 lg:mb-0">
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
            borderRadius: '50%',
            overflow: 'hidden',
          }}
        >
          <div className="relative w-full h-full rounded-full shadow-xl overflow-hidden">
            <img src={ProfilePic} alt="Profil" className="w-full h-full object-cover" />
          </div>
        </Tilt>
      </div>
      {/* Texte de présentation */}
      <div className="flex flex-col justify-center w-full lg:w-1/2 lg:order-1 order-2 space-y-6 text-center lg:text-left">
        <div className="flex items-center justify-center lg:justify-start space-x-3">
          <h1 className="text-3xl lg:text-5xl font-extrabold whitespace-nowrap">
            Bonjour, je suis <span className="text-blue-500">Adrien</span>
          </h1>
          <span className="wave text-3xl lg:text-5xl" aria-label="wave">👋</span>
        </div>
        <p className="text-lg lg:text-xl leading-relaxed">
          Développeur <span className="text-blue-500 font-semibold">full-stack</span>, passionné par le code, les nouvelles technologies, l&apos;entrepreneuriat et de finances.
        </p>
        <ul className="space-y-3 text-lg">
          <li>🎓 Étudiant à <strong>Epitech Paris</strong>, promotion <strong>2028</strong>.</li>
          <li>📅 Âge actuel : <strong>{age} ans</strong>.</li>
          <li>
            💻 Découvrez mes projets sur{' '}
            <a
              href="https://github.com/lgadrien"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              GitHub
            </a>.
          </li>
          <li>
            ✉️ Contactez-moi via{' '}
            <a
              href="mailto:adrien.leguen.p@gmail.com"
              className="text-blue-500 hover:underline"
            >
              mon email
            </a>.
          </li>
        </ul>
        <div className="flex justify-center lg:justify-start space-x-6">
          <a
            href="https://www.linkedin.com/in/adrien-le-guen-a544b62a9/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 transition duration-300"
          >
            <FaLinkedin size={28} />
          </a>
          <a
            href="https://github.com/lgadrien"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 dark:text-gray-300 hover:text-gray-600 dark:hover:text-gray-400 transition duration-300"
          >
            <FaGithub size={28} />
          </a>
          <a
            href="mailto:adrien.leguen.p@gmail.com"
            className="text-gray-800 dark:text-gray-300 hover:text-gray-600 dark:hover:text-gray-400 transition duration-300"
          >
            <FaEnvelope size={28} />
          </a>
        </div>
        <a
          href="src\Components\Infos\CV Adrien Le Guen.pdf"
          download
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 mt-4"
        >
          <FaDownload className="mr-2 inline" /> Télécharger mon CV
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
