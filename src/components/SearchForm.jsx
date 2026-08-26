import { useState } from "react";

function SearchForm({ onSearch}) {
    const [query, setQuery] = useState('')
    const [startYear, setStartYear] = useState('')
    const [endYear, setEndYear] = useState('')

    return (
        <div>
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
                onChange={(e) => setStartYear(e.target.value)}
            />
            <input
                type="number"
                placeholder="End Year"
                value={endYear}
                onChange={(e) => setEndYear(e.target.value)}
            />
            <button onClick={() => onSearch({ query, startYear, endYear })}>
                Search
            </button>

        </div>
    )
}

export default SearchForm