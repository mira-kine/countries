// import React from 'react';
// import { useState } from 'react';
// // import { countries } from '../App';

// export default function Flags() {
//   const [countries, setCountries] = useState([]);
//   const [query, setQuery] = useState('');
//   const [continent, setContinent] = useState('All');
//   function filterCountries() {
//     return countries.filter((item) => {
//       return item.name.includes(query) && (item.continent === continent || continent === 'All');
//     });
//   }
//   return (
//     <div>
//       {filterCountries().map((country) => (
//         <div key={country.id}>
//           <div>
//             {country.name} : {country.continent}
//           </div>
//           <div>
//             <img src={`https://flagcdn.com/84x63/${country.iso2.toLowerCase()}.png`} />
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }
