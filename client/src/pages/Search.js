import React, { useState } from 'react';
import { searchRecipes } from '../utils/api';
import SearchResults from './SearchResults';
import '../styles/Search.css';

function Search() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [error, setError] = useState(null);

    const handleSearch = async () => {
        try {
            console.log('Searching for:', query);
            const data = await searchRecipes(query);
            console.log('Search results:', data);
            if (data && data.results) {
                setResults(data.results);
                setError(null); // Clear previous errors
            } else {
                setError('No results found');
            }
        } catch (err) {
            console.error('Error during search:', err);
            setError('Failed to fetch search results');
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div className="search-page">
            <div className="search-bar-container">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Search for recipes..."
                    className="search-input"
                />
                <button onClick={handleSearch} className="search-button">Search</button>
            </div>
            {error && <p className="error-message">{error}</p>}
            <SearchResults results={results} />
        </div>
    );
}

export default Search;
