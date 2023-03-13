import { useState } from "react";

export default function Cities() {
  const [country, setCountry] = useState("");
  const [countries, setCountries] = useState([]);
  const [validation, setValidation] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!country) {
      setValidation(true);
      return;
    }
    setValidation(false);
    setCountries([...countries, country]);
    setCountry("");
  };
  const handleDeleteClick = (name) => {
    setCountries(countries.filter((x) => x !== name));
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="country">country:</label>
        <input
          id="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          type="text"
          placeholder="Enter the country"
        />
        <input type="submit" value="Add country" />
      </form>
      {validation && <p>Please input country</p>}
      <ul>
        {countries.map((x, index) => (
          <li key={index}>
            {x}
            <button onClick={() => handleDeleteClick(x)}>X</button>
          </li>
        ))}
      </ul>
    </>
  );
}
