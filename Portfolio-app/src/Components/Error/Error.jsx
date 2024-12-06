import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const ErrorPage = () => {
  const { darkMode } = useContext(ThemeContext);

  const loaderStyle = {
    wrapper: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '20px auto',
    },
    circle: {
      width: '20px',
      height: '20px',
      margin: '0 5px',
      borderRadius: '50%',
      animation: 'pulse 1.5s infinite ease-in-out',
      background: darkMode ? '#ffffff' : '#000000',
    },
  };

  return (
    <div className={`flex flex-col min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <div className="flex-grow flex flex-col justify-center items-center p-4">
        <h1 className={`text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>404</h1>
        <p className={`text-xl mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'} text-center`}>
          Oups ! La page que vous cherchez n&apos;existe pas.
        </p>
        <div style={loaderStyle.wrapper}>
          <div style={{ ...loaderStyle.circle, animationDelay: '0s' }} />
          <div style={{ ...loaderStyle.circle, animationDelay: '0.2s' }} />
          <div style={{ ...loaderStyle.circle, animationDelay: '0.4s' }} />
        </div>
        <a
          href="/"
          className={`mt-8 px-6 py-2 rounded border ${
            darkMode
              ? 'border-gray-500 text-gray-300 hover:bg-gray-700'
              : 'border-gray-500 text-gray-700 hover:bg-gray-200'
          } transition duration-300`}
        >
          Retour à l&apos;accueil
        </a>
      </div>
      <style>
        {`
          @keyframes pulse {
            0%, 100% {
              transform: scale(0.8);
              opacity: 0.5;
            }
            50% {
              transform: scale(1.5);
              opacity: 1;
            }
          }

          a {
            text-decoration: none;
          }

          a:hover {
            opacity: 0.8;
          }

          @media (max-width: 768px) {
            .text-5xl {
              font-size: 3rem;
            }
            .text-xl {
              font-size: 1.25rem;
            }
          }

          @media (max-width: 480px) {
            .text-5xl {
              font-size: 2.5rem;
            }
            .text-xl {
              font-size: 1rem;
            }
          }
        `}
      </style>
    </div>
  );
};

export default ErrorPage;
