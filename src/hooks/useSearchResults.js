import { useState, useEffect } from 'react';
import tmdb from '../api/tmdb';

export default () => {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetchSearchResults('Spider');
  }, []);

  const fetchSearchResults = async (query) => {
    try {
      const searchResultsResponse = await tmdb.get('/search/movie', { params: { query } });
      setSearchResults(searchResultsResponse.data.results);
    } catch (error) {
      // TODO : show some kind of toast.
    }
  };

  return [searchResults, fetchSearchResults];
};
