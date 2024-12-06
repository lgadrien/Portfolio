import { useState, useContext } from 'react';
import projectData from '../Infos/projectData';
import { ThemeContext } from '../../context/ThemeContext';

const Projects = () => {
  const { darkMode } = useContext(ThemeContext);
  const [selectedProject, setSelectedProject] = useState(null);
  const [sortStatus, setSortStatus] = useState('Tous');

  const handleSortChange = (status) => {
    setSortStatus(status);
  };

  const filteredProjects =
    sortStatus === 'Tous'
      ? projectData
      : projectData.filter((project) => project.status === sortStatus);

  return (
    <div id="projets" className="w-full mx-auto max-w-6xl">
      {/* Titre */}
      <h2 className="text-3xl font-extrabold text-center mb-10 dark:text-gray-200">
        Mes Projets
      </h2>

      {/* Boutons de tri */}
      <div className="flex justify-center flex-wrap gap-4 mb-12">
        {['Tous', 'En cours', 'En pause', 'Fini'].map((status) => (
          <button
            key={status}
            onClick={() => handleSortChange(status)}
            className={`px-6 py-2 rounded-full font-semibold text-sm transition ${
              sortStatus === status
                ? 'bg-blue-500 text-white shadow-lg'
                : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-300 hover:bg-blue-500 hover:text-white'
            }`}
          >
            {status}
          </button>
        ))}
      </div>

      {/* Message si aucun projet trouvé */}
      {filteredProjects.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-lg font-medium dark:text-gray-300">
            Aucun projet trouvé pour le type :{' '}
            <span className="text-blue-500 font-semibold">{sortStatus}</span>.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.title}
              onClick={() => setSelectedProject(project)}
              className="relative p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transform transition cursor-pointer border border-gray-300 dark:border-gray-700 hover:border-blue-500"
            >
              <h3 className="text-lg font-semibold mb-3 dark:text-white">
                {project.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 line-clamp-3 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.technologies.map((tech) => (
                  <img
                    key={tech.name}
                    src={tech.logo}
                    alt={tech.name}
                    className="h-8 w-8"
                  />
                ))}
              </div>
              <div className="mt-6 flex justify-between items-center">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Voir sur GitHub
                </a>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Statut : {project.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal de détails */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="relative w-11/12 max-w-3xl max-h-[80vh] p-8 rounded-lg overflow-y-auto transition-all duration-500 transform bg-white dark:bg-gray-900 animate-fadeIn">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-3 right-3 text-gray-600 dark:text-gray-300 text-2xl hover:text-red-500"
            >
              &times;
            </button>
            <h4 className="text-2xl font-bold mb-6 dark:text-white">
              {selectedProject.title}
            </h4>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              {selectedProject.description}
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              {selectedProject.technologies.map((tech) => (
                <img
                  key={tech.name}
                  src={tech.logo}
                  alt={tech.name}
                  className="h-10 w-10"
                />
              ))}
            </div>
            <a
              href={selectedProject.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Voir sur GitHub
            </a>
            <br />
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Statut : {selectedProject.status}
            </span>
          </div>
        </div>
      )}

      {/* Animation CSS */}
      <style>{`
        .animate-fadeIn {
          animation: fadeInScale 0.5s ease-out forwards;
        }

        @keyframes fadeInScale {
          0% {
            opacity: 0;
            transform: scale(0.95);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default Projects;
