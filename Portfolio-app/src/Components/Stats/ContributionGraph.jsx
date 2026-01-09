import React, { useContext, useEffect, useState, useMemo } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { ThemeContext } from "../../context/ThemeContext";
import { LanguageContext } from "../../context/LanguageContext";
import { FaChartArea } from "react-icons/fa";
import { getGithubContributions } from "../../services/githubService";

const ContributionGraph = ({ username }) => {
  const { darkMode } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const [data, setData] = useState([]);
  const [range, setRange] = useState("1Y"); // 7D, 1M, 6M, 1Y, YTD, MAX
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const contributions = await getGithubContributions(username);

      // Trier par date croissante (Anciens -> Récents)
      const sortedContributions = contributions.sort(
        (a, b) => new Date(a.date) - new Date(b.date)
      );

      setData(sortedContributions);
      setLoading(false);
    };
    fetchData();
  }, [username]);

  const filteredData = useMemo(() => {
    if (!data || data.length === 0) return [];

    const now = new Date();
    // On normalise "now" à la fin de la journée pour inclure toutes les données d'aujourd'hui
    now.setHours(23, 59, 59, 999);

    let startDate = new Date(now);

    switch (range) {
      case "7D":
        // D'aujourd'hui à il y a 6 jours en arrière (total 7 jours)
        startDate.setDate(now.getDate() - 6);
        startDate.setHours(0, 0, 0, 0); // Début de la journée cible
        break;
      case "1M":
        startDate.setMonth(now.getMonth() - 1);
        startDate.setHours(0, 0, 0, 0);
        break;
      case "6M":
        startDate.setMonth(now.getMonth() - 6);
        startDate.setHours(0, 0, 0, 0);
        break;
      case "1Y":
        startDate.setFullYear(now.getFullYear() - 1);
        startDate.setHours(0, 0, 0, 0);
        break;
      case "YTD":
        startDate = new Date(now.getFullYear(), 0, 1); // 1er Janvier de l'année en cours
        break;
      case "MAX":
        return data; // Pas de filtre temporel, on renvoie tout le dataset trié
      default:
        startDate.setFullYear(now.getFullYear() - 1);
    }

    // Filtrer les données : Date >= startDate
    return data.filter((item) => {
      const itemDate = new Date(item.date);
      return itemDate >= startDate && itemDate <= now;
    });
  }, [data, range]);

  // Calcul du total sur la période affichée
  const totalContributions = useMemo(() => {
    return filteredData.reduce((acc, curr) => acc + curr.count, 0);
  }, [filteredData]);

  const ranges = [
    { label: "7J", value: "7D" },
    { label: "1M", value: "1M" },
    { label: "6M", value: "6M" },
    { label: "1 An", value: "1Y" },
    { label: "Max", value: "MAX" },
  ];

  /* Configuration du graph */
  const chartColor = darkMode ? "#8B5CF6" : "#8B5CF6"; // Violet
  const fillColor = "url(#colorPv)";

  if (loading) {
    return (
      <div className="mb-12 animate-pulse">
        <div className="h-8 w-48 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
        <div className="h-[300px] bg-gray-200 dark:bg-gray-700 rounded-xl"></div>
      </div>
    );
  }

  return (
    <div className="mb-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-dark-accent/10 rounded-lg">
            <FaChartArea className="text-2xl text-dark-accent" />
          </div>
          <div>
            <h2
              className={`text-2xl font-bold ${
                darkMode ? "text-dark-text" : "text-light-text"
              }`}
            >
              {language === "fr" ? "Contributions" : "Contributions"}
            </h2>
            <p
              className={`text-sm ${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              {totalContributions}{" "}
              {language === "fr"
                ? "contributions sur la période"
                : "contributions in range"}
            </p>
          </div>
        </div>

        {/* Range Selectors */}
        <div
          className={`flex flex-wrap gap-1 p-1 rounded-lg ${
            darkMode ? "bg-dark-surface" : "bg-gray-100"
          }`}
        >
          {ranges.map((r) => (
            <button
              key={r.value}
              onClick={() => setRange(r.value)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all duration-200 ${
                range === r.value
                  ? "bg-dark-accent text-white shadow-md"
                  : `${
                      darkMode
                        ? "text-gray-400 hover:text-white"
                        : "text-gray-500 hover:text-gray-900"
                    } hover:bg-black/5 dark:hover:bg-white/5`
              }`}
            >
              {r.label}
            </button>
          ))}
        </div>
      </div>

      <div
        className={`w-full h-[350px] rounded-2xl border p-4 shadow-lg transition-all duration-300 ${
          darkMode
            ? "bg-dark-surface/40 border-white/5"
            : "bg-light-surface/60 border-gray-200"
        } backdrop-blur-md`}
      >
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={chartColor} stopOpacity={0.8} />
                <stop offset="95%" stopColor={chartColor} stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke={darkMode ? "#374151" : "#E5E7EB"}
            />
            <XAxis
              dataKey="date"
              tick={{ fill: darkMode ? "#9CA3AF" : "#6B7280", fontSize: 12 }}
              tickFormatter={(str) => {
                const d = new Date(str);
                return d.toLocaleDateString(
                  language === "fr" ? "fr-FR" : "en-US",
                  { month: "short", day: "numeric" }
                );
              }}
              minTickGap={30}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fill: darkMode ? "#9CA3AF" : "#6B7280", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
              allowDecimals={false}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: darkMode ? "#1F2937" : "#FFFFFF",
                borderColor: darkMode ? "#374151" : "#E5E7EB",
                borderRadius: "0.75rem",
                color: darkMode ? "#F3F4F6" : "#111827",
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
              }}
              itemStyle={{ color: chartColor }}
              labelFormatter={(label) =>
                new Date(label).toLocaleDateString(
                  language === "fr" ? "fr-FR" : "en-US",
                  {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }
                )
              }
            />
            <Area
              type="monotone"
              dataKey="count"
              stroke={chartColor}
              strokeWidth={3}
              fillOpacity={1}
              fill={fillColor}
              animationDuration={800}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ContributionGraph;
