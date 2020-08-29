import { useEffect, useState } from 'react';
import tmdb from '../api/tmdb';

export default () => {
  const [movieResults, setMovieResults] = useState([]);

  useEffect(() => {
    fetchSearchResults('Spider');
  }, []);

  const fetchSearchResults = async (query) => {
    try {
      const movieResultsResponse = await tmdb.get('/search/movie', { params: { query } });
      setMovieResults(movieResultsResponse.data.results);
    } catch (error) {
      // TODO : show some kind of toast.
    }
  };

  return [movieResults, fetchSearchResults];
};
