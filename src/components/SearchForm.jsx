import { useState } from "react";

function SearchForm({ onSearch }) {
  const [query, setQuery] = useState("");
  const [startYear, setStartYear] = useState("");
  const [endYear, setEndYear] = useState("");
  const [validationError, setValidationError] = useState(null);

  const currentYear = new Date().getFullYear();

  function handleSubmit() {
    // Reset previous validation errors
    setValidationError(null);

    // Check all fields are filled
    if (!query.trim()) {
      setValidationError("Please enter a search keyword.");
      return;
    }
    if (!startYear) {
      setValidationError("Please enter a start year.");
      return;
    }
    if (!endYear) {
      setValidationError("Please enter an end year.");
      return;
    }

    // Check years are valid numbers
    const start = parseInt(startYear);
    const end = parseInt(endYear);

    // Check years are not in the future
    if (start > currentYear) {
      setValidationError(`Start year cannot be in the future. Maximum is ${currentYear}.`);
      return;
    }
    if (end > currentYear) {
      setValidationError(`End year cannot be in the future. Maximum is ${currentYear}.`);
      return;
    }

    // Check start year is not greater than end year
    if (start > end) {
      setValidationError("Start year cannot be greater than end year.");
      return;
    }

    // All validation passed — fire the search
    onSearch(query, startYear, endYear);
  }


  return (
    <div className="search-form">
      <input
        type="text"
        placeholder="Search Keyword"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <input
        type="number"
        placeholder="Start Year"
        value={startYear}
        min="2012"
        max={currentYear}
        onChange={(e) => setStartYear(e.target.value)}
      />
      <input
        type="number"
        placeholder="End Year"
        value={endYear}
        min="2012"
        max={currentYear}
        onChange={(e) => setEndYear(e.target.value)}
      />
      <button onClick={handleSubmit}>Search</button>

      {/* Validation error — only shows when a field fails */}
      {validationError && (
        <p className="validation-error">{validationError}</p>
      )}
    </div>
  );
}

export default SearchForm;