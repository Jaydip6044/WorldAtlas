import React, { useState, useEffect, useTransition } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getCountryData } from "../../api/postApi";
import Loader from "../UI/Loader";

function CountryDetails() {
  const { id } = useParams();
  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState(); // ✅ Initialize as null to prevent errors

  useEffect(() => {
    startTransition(async () => {
      try {
        const res = await getCountryData(id);
        if (res.status === 200 && res.data.length > 0) {
          setCountry(res.data[0]); // ✅ Set country data correctly
        } else {
          console.error("No data found for country:", id);
          setCountry(null); // ✅ Handle empty data response
        }
      } catch (error) {
        console.error("Error fetching country data:", error);
        setCountry(null);
      }
    });
  }, [id]);

  // ✅ Show loader until data is available
  if (isPending || !country) return <Loader />;

  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6 transition-transform hover:scale-105">
        
        {/* ✅ Prevent undefined flag error by checking `country?.flags?.svg` */}
        <div className="flex justify-center">
          {country?.flags?.svg ? (
            <img
              src={country.flags.svg}
              alt={country.name?.common}
              className="w-full max-w-sm h-auto object-cover rounded-md shadow-lg"
            />
          ) : (
            <p className="text-gray-500">No flag available</p> // ✅ Handle missing flag
          )}
        </div>

        {/* Country Details */}
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            {country.name?.common || "Unknown"}
          </h2>
          <p className="text-gray-500 dark:text-gray-400">
            <span className="font-semibold">Native Name:</span>{" "}
            {country.name?.nativeName?.eng?.common || "N/A"}
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            <span className="font-semibold">🌍 Region:</span> {country.region || "N/A"}
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            <span className="font-semibold">👥 Population:</span>{" "}
            {country.population?.toLocaleString() || "N/A"}
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            <span className="font-semibold">🏛 Capital:</span>{" "}
            {country.capital?.[0] || "N/A"}
          </p>
        </div>
        <NavLink to='/country'>
          <button className="float-right bg-slate-600 rounded p-2 text-white font-bold hover:scale-105">Go Back</button>
        </NavLink>
      </div>
      
    </div>
  );
}

export default CountryDetails;

