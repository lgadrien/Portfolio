import { useCallback } from "react";

export const useScrollToSection = () => {
  const scrollToSection = useCallback((sectionId) => {
    if (!sectionId) return;

    if (sectionId === "présentation") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const section = document.getElementById(sectionId);
    if (section) {
      // On récupère la navbar pour calculer sa hauteur réelle
      const navbar = document.querySelector('nav[role="navigation"]');
      const navbarHeight = navbar ? navbar.getBoundingClientRect().height : 80;

      // On calcule la position absolue de l'élément par rapport au document
      const elementPosition =
        section.getBoundingClientRect().top + window.scrollY;

      // Position finale = Position élément - Hauteur Navbar
      // Note : On retire la "marge de sécurité" arbitraire qui créait le trou
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }, []);

  return { scrollToSection };
};
