import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const ErrorPage = () => {
  const { darkMode } = useContext(ThemeContext);

  const loaderStyle = {
    wrapper: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "20px auto",
    },
    circle: {
      width: "20px",
      height: "20px",
      margin: "0 5px",
      borderRadius: "50%",
      animation: "pulse 1.5s infinite ease-in-out",
      background: darkMode ? "#8B5CF6" : "#475569",
    },
  };

  return (
    <div
      className={`flex flex-col min-h-screen ${
        darkMode ? "bg-dark-bg" : "bg-light-bg"
      }`}
    >
      <div className="flex-grow flex flex-col justify-center items-center p-4">
        <h1
          className={`text-5xl font-bold mb-4 ${
            darkMode ? "text-dark-text" : "text-light-text"
          }`}
        >
          404
        </h1>
        <p
          className={`text-xl mb-8 ${
            darkMode ? "text-gray-400" : "text-light-accent"
          } text-center`}
        >
          Oups ! La page que vous cherchez n&apos;existe pas.
        </p>
        <div style={loaderStyle.wrapper}>
          <div style={{ ...loaderStyle.circle, animationDelay: "0s" }} />
          <div style={{ ...loaderStyle.circle, animationDelay: "0.2s" }} />
          <div style={{ ...loaderStyle.circle, animationDelay: "0.4s" }} />
        </div>
        <a
          href="/"
          className={`mt-8 px-6 py-2 rounded border ${
            darkMode
              ? "border-dark-accent text-dark-accent hover:bg-dark-surface"
              : "border-light-accent text-light-accent hover:bg-light-surface"
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
