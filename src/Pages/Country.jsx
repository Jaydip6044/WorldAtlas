import React, { useState, useEffect, useTransition } from "react";
import { getCountryData } from "../api/postApi";
import Loader from "../Components/UI/Loader";
import { CountryCard } from "../Components/Layout/CountryCard";

function Country() {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      setCountries(res.data);
    });
  }, []);

  if (isPending) return <Loader />;

  // 🔍 Search Filter Function
  const searchCountry = (country) => {
    return search
      ? country.name.common.toLowerCase().includes(search.toLowerCase())
      : true;
  };

  // 🌍 Region Filter Function
  const filterByRegion = (country) => {
    return filter === "all" || country.region.toLowerCase() === filter;
  };

  // 🔄 Sorting Function
  const sortCountries = (a, b) => {
    return sortOrder === "asc"
      ? a.name.common.localeCompare(b.name.common)
      : b.name.common.localeCompare(a.name.common);
  };

  // 📌 Apply Filters
  const filteredCountries = countries
    .filter(searchCountry)
    .filter(filterByRegion)
    .sort(sortCountries);

  return (
    <div className="bg-black text-white min-h-screen p-6">
      {/* 🔎 Search & Filter Controls */}
      <div className="flex flex-col sm:flex-row gap-6 mb-6">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search country..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 w-full sm:w-1/3 rounded-md text-white border-2 border-amber-100"
        />

        {/* Region Filter */}
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="p-2 w-full sm:w-1/4 rounded-md bg-black border-2 border-amber-100 text-white"
        >
          <option value="all">All Regions</option>
          <option value="africa">Africa</option>
          <option value="americas">Americas</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>

        {/* Sorting Buttons */}
        <div className="flex gap-8">
          <button
            onClick={() => setSortOrder("asc")}
            className={`px-4 py-2 rounded-md ${
              sortOrder === "asc" ? "bg-blue-500" : "bg-gray-700"
            }`}
          >
            A-Z
          </button>
          <button
            onClick={() => setSortOrder("desc")}
            className={`px-4 py-2 rounded-md ${
              sortOrder === "desc" ? "bg-blue-500" : "bg-gray-700"
            }`}
          >
            Z-A
          </button>
        </div>
      </div>

      {/* 🌍 Country Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
        {filteredCountries.length > 0 ? (
          filteredCountries.map((curCountry, index) => (
            <CountryCard country={curCountry} key={index} />
          ))
        ) : (
          <p className="text-center col-span-full">No matching countries found.</p>
        )}
      </div>
    </div>
  );
}

export default Country;




// import React, { useState, useEffect, useTransition } from 'react';
// import { getCountryData } from '../api/postApi';
// import Loader from '../Components/UI/Loader';
// import { NavLink } from 'react-router-dom';
// import SearchFilter from '../Components/UI/SearchFilter';
// import { CountryCard } from '../Components/Layout/CountryCard';

// function Country() {
//   const [isPending, startTransition] = useTransition();
//   const [countries, setCountries] = useState([]);
//   const [filteredCountries, setFilteredCountries] = useState([]);
//   const [search, setSearch] = useState('');
//   const [filter, setFilter] = useState('all');

//   useEffect(() => {
//     startTransition(async () => {
//       const res = await getCountryData();
//       setCountries(res.data);
//       setFilteredCountries(res.data); // Initialize filteredCountries
//     });
//   }, []);

//   useEffect(() => {
//     let filtered = countries;

//     if (search) {
//       filtered = filtered.filter(country =>
//         country.name.common.toLowerCase().includes(search.toLowerCase())
//       );
//     }

//     if (filter !== 'all') {
//       filtered = filtered.filter(country => country.region.toLowerCase() === filter.toLowerCase());
//     }

//     setFilteredCountries(filtered);
//   }, [search, filter, countries]);

//   if (isPending) return <Loader />;

//   return (
//     <div className="bg-black text-white min-h-screen p-6">
//       {/* Search and Filter Component */}
//       <SearchFilter search={search} filter={filter} setSearch={setSearch} setFilter={setFilter} />

//       {/* Country Cards Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 place-items-center">
//         {filteredCountries.length > 0 ? (
//           filteredCountries.map((curCountry, index) => (
//             <CountryCard country={curCountry} key={index} />
//           ))
//         ) : (
//           <p className="text-center text-gray-400 col-span-full">No countries found...</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Country;







// import React, { useState, useEffect, useTransition } from 'react';
// import { getCountryData } from '../api/postApi';
// import Loader from '../Components/UI/Loader';
// import { NavLink } from 'react-router';
// import SearchFilter from '../Components/UI/SearchFilter';
// import { CountryCard } from '../Components/Layout/CountryCard';

// function Country() {
//   const [isPending, startTransition] = useTransition();
//   const [countries, setCountries] = useState([]);
//   const [search, setSearch] = useState('');
//   const [filter, setFilter] = useState('all')

//   useEffect(() => {
//     startTransition(async () => {
//       const res = await getCountryData();
//       console.log(res);
//       setCountries(res.data);
//     });
//   }, []);

//   if (isPending) return <Loader></Loader>;
//   // console.log(search,filter)
// const searchCountry=(country)=>{
//     if(search){
//       return country.name.common.toLowerCase().includes(search.toLowerCase())
//     }
//     return country  ;
// }

//   const filterCountries=countries.filter((country)=>{ searchCountry(country)})

//   return (
//     <div className="bg-black text-white min-h-screen">
     
//      {/* <SearchFilter
//       search={search} filter={filter} setSearch={setSearch} setFilter={setFilter} /> */}

//       {/* Country Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 p-6 sm:p-10 md:p-16 place-items-center">
//         {countries.map((curCountry,index) => {
//           return <CountryCard country={curCountry} key={index} />
//         //   const { flags, name, population, region, capital } = country;
//         //   return (
//         //     <div key={country.id} className="country-card w-full h-full">
//         //       <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-4 hover:scale-105 transition-transform max-w-xs w-full">
//         //         <img src={flags.svg} alt={name.common} className="w-full h-40 object-cover rounded-md" />
//         //         <div className="mt-4">
//         //           <h2 className="text-xl font-semibold">{name.common}</h2>
//         //           <p className="text-gray-600 dark:text-gray-400">🌍 Region: {region}</p>
//         //           <p className="text-gray-600 dark:text-gray-400">👥 Population: {population.toLocaleString()}</p>
//         //           <p className="text-gray-600 dark:text-gray-400">🏛 Capital: {capital?.[0] || 'N/A'}</p>
//         //          <NavLink to={`/country/${name.common}`}>
//         //           <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
//         //             Read More
//         //           </button>
//         //           </NavLink>
//         //         </div>
//         //       </div>
//         //     </div>
//         //   );
//         // })}
//         })}
//       </div>
//     </div>
//   );
// }

// export default Country;



