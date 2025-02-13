import { NavLink } from "react-router-dom";

export const CountryCard = ({ country }) => {
  const { flags, name, population, region, capital } = country;

  return (
    <li className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-4 hover:scale-105 transition-transform max-w-xs w-full">
      {/* Country Flag */}
      <img
        src={flags.svg}
        alt={flags.alt || `Flag of ${name.common}`}
        className="w-full h-40 object-cover rounded-md"
      />

      {/* Country Info */}
      <div className="mt-4">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white truncate">
          {name.common.length > 10 ? name.common.slice(0, 10) + "..." : name.common}
        </h2>

        <p className="text-gray-600 dark:text-gray-400">
          <span className="font-semibold">Population:</span> {population.toLocaleString()}
        </p>

        <p className="text-gray-600 dark:text-gray-400">
          <span className="font-semibold">Region:</span> {region}
        </p>

        <p className="text-gray-600 dark:text-gray-400">
          <span className="font-semibold">Capital:</span> {capital?.[0] || "N/A"}
        </p>

        {/* Read More Button */}
        <NavLink to={`/country/${name.common}`}>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            Read More
          </button>
        </NavLink>
      </div>
    </li>
  );
};

export default CountryCard;