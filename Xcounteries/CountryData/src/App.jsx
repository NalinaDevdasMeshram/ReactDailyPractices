import React, { useEffect, useState } from "react";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchItem, setSearchItem] = useState("");

  const fetchCountries = async () => {
    try {
      const response = await fetch(
        "https://restcountries.com/v3.1/all?fields=name,capital,flags,population,region",
      );
      const data = await response.json();
      console.log(data);
      setCountries(data);
    } catch (error) {
      console.error("error fetching countries:", error);
    }
  };
  useEffect(() => {
    fetchCountries();
  }, []);

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchItem.toLowerCase()),
  );

  console.log(filteredCountries);
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Country Data</h2>
      <input
        type="text"
        placeholder="Enter Country name"
        value={searchItem}
        onChange={(e) => setSearchItem(e.target.value)}
        required
        style={{ margin: "15px", padding: "15px", display: "block" }}
      />
      <div
        style={{
          display: "flex",
          margin: "20px",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {filteredCountries.length > 0 ? (
          filteredCountries.map((country, index) => (
            <div key={index}>
              <h3>{country.name.common}</h3>
              <img src={country.flags.png} alt="" srcset="" />
              <p style={{ margin: "10px" }}>{country.capital}</p>
              <p style={{ margin: "10px" }}>{country.population}</p>
              <p style={{ margin: "10px" }}>{country.region}</p>
            </div>
          ))
        ) : (
          <p> No countries found </p>
        )}
      </div>
    </div>
  );
};

export default App;
