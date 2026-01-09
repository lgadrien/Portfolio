import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

const ProfileInfo = ({ stats }) => {
  const { language } = useContext(LanguageContext);
  const { bio, location, company, yearsActive } = stats;

  if (!bio && !location && !company) return null;

  return (
    <div className="bg-light-surface border-gray-200 dark:bg-dark-surface dark:border-gray-800 border-2 rounded-xl p-8 mb-12 shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-light-text dark:text-dark-text">
        👤 {language === "fr" ? "Profil" : "Profile"}
      </h2>
      {bio && (
        <p className="mb-3 text-lg text-light-text dark:text-gray-300">{bio}</p>
      )}
      <div className="flex flex-wrap gap-6 text-sm">
        {location && (
          <span className="text-light-text-secondary dark:text-gray-400">
            📍 {location}
          </span>
        )}
        {company && (
          <span className="text-light-text-secondary dark:text-gray-400">
            🏢 {company}
          </span>
        )}
        <span className="text-light-text-secondary dark:text-gray-400">
          ⏱️ {yearsActive}{" "}
          {language === "fr" ? "ans d'activité" : "years active"}
        </span>
      </div>
    </div>
  );
};

export default ProfileInfo;
