import { useEffect, useState } from 'react';
import tmdb from '../api/tmdb';

export default () => {
  const [movieResults, setMovieResults] = useState([]);
  const [tvShowResults, setTvShowResults] = useState([]);

  useEffect(() => {
    fetchSearchResults('Spider');
  }, []);

  const fetchSearchResults = async (query) => {
    try {
      const movieResultsResponse = await tmdb.get('/search/movie', {
        params: { query },
      });
      const tvShowResultsResponse = await tmdb.get('/search/tv', {
        params: { query },
      });
      setMovieResults(movieResultsResponse.data.results);
      setTvShowResults(tvShowResultsResponse.data.results);
    } catch (error) {
      // TODO : show some kind of toast.
    }
  };

  return [movieResults, tvShowResults, fetchSearchResults];
};
