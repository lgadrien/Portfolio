import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const AnimatedBackground = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Fond de base subtil */}
      <div
        className={`absolute inset-0 transition-colors duration-700 ${
          darkMode
            ? "bg-[#1a1c20]" // Plus sombre et profond que le gris Discord standard
            : "bg-[#f8f9fa]" // Blanc cassé très léger
        }`}
      ></div>

      {/* Texture Bruit (Noise) améliorée */}
      <div
        className={`absolute inset-0 z-[1] ${
          darkMode ? "opacity-[0.04]" : "opacity-[0.02]"
        }`}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      ></div>

      {/* Vignette pour focus central */}
      <div
        className={`absolute inset-0 z-[2] pointer-events-none ${
          darkMode
            ? "bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]"
            : "bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.05)_100%)]"
        }`}
      ></div>

      {/* Blobs d'arrière-plan avec animations plus complexes */}
      <div
        className={`absolute top-0 w-full h-full z-0 ${
          darkMode
            ? "mix-blend-screen opacity-40"
            : "mix-blend-multiply opacity-60"
        }`}
      >
        {/* Blob 1 - Lent et majestueux */}
        <div
          className={`absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full filter blur-[100px] animate-blob-slow ${
            darkMode ? "bg-purple-900" : "bg-purple-200"
          }`}
        ></div>

        {/* Blob 2 - Contraste */}
        <div
          className={`absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] rounded-full filter blur-[80px] animate-blob-reverse ${
            darkMode ? "bg-indigo-900" : "bg-blue-200"
          }`}
        ></div>

        {/* Blob 3 - Profondeur basse */}
        <div
          className={`absolute bottom-[-10%] left-[20%] w-[45vw] h-[45vw] rounded-full filter blur-[90px] animate-blob-slow animation-delay-4000 ${
            darkMode ? "bg-fuchsia-900" : "bg-pink-200"
          }`}
        ></div>

        {/* Blob 4 - Accent vif (plus petit) */}
        <div
          className={`absolute top-[40%] left-[40%] w-[25vw] h-[25vw] rounded-full filter blur-[60px] animate-pulse-slow ${
            darkMode ? "bg-violet-800" : "bg-violet-300"
          }`}
        ></div>
      </div>
    </div>
  );
};

export default AnimatedBackground;
