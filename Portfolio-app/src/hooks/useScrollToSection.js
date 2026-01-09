import { useCallback } from "react";

export const useScrollToSection = () => {
  const scrollToSection = useCallback((sectionId) => {
    if (sectionId === "présentation" || !sectionId) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const section = document.getElementById(sectionId);
    if (section) {
      const navbar = document.querySelector('nav[role="navigation"]');
      const navbarHeight = navbar ? navbar.offsetHeight : 0;
      // Ajout d'une marge de sécurité de 16px comme dans le code original
      const offset = navbarHeight + 16;

      const elementPosition =
        section.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }, []);

  return { scrollToSection };
};
