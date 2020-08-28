import { useEffect, useState } from 'react';
import tmdb from '../api/tmdb';

export default () => {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetchSearchResults('Spider');
  }, []);

  const fetchSearchResults = async (query) => {
    try {
      const response = await tmdb.get('/search/movie', { params: { query } });
      setSearchResults(response.data.results);
    } catch (error) {
      // TODO : show some kind of toast.
    }
  };

  return [searchResults, fetchSearchResults];
};
