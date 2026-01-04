import React from "react";
import { FaExclamationTriangle, FaHome } from "react-icons/fa";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Mettre à jour l'état pour afficher l'UI de secours
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Vous pouvez aussi logger l'erreur vers un service de monitoring
    console.error("ErrorBoundary caught an error:", error, errorInfo);
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
    window.location.href = "/";
  };

  render() {
    if (this.state.hasError) {
      // UI de secours personnalisée
      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 p-4">
          <div className="max-w-2xl w-full bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-red-100 dark:bg-red-900/30 p-4 rounded-full">
                <FaExclamationTriangle
                  className="text-red-500 dark:text-red-400"
                  size={64}
                />
              </div>
            </div>

            <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
              Oups ! Une erreur est survenue
            </h1>

            <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
              Une erreur inattendue s'est produite. Ne vous inquiétez pas, ce
              n'est pas de votre faute !
            </p>

            {process.env.NODE_ENV === "development" && this.state.error && (
              <details className="mb-6 text-left bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
                <summary className="cursor-pointer font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Détails de l'erreur (développement uniquement)
                </summary>
                <pre className="text-sm text-red-600 dark:text-red-400 overflow-auto">
                  {this.state.error.toString()}
                  {"\n"}
                  {this.state.errorInfo?.componentStack}
                </pre>
              </details>
            )}

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={this.handleReset}
                className="flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <FaHome />
                Retour à l'accueil
              </button>

              <button
                onClick={() => window.location.reload()}
                className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg"
              >
                Recharger la page
              </button>
            </div>

            <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
              Si le problème persiste, n'hésitez pas à me contacter.
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
