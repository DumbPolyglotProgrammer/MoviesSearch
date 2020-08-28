import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import tmdb from '../api/tmdb';

const SearchScreen = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetchSearchResults('Spider');
  }, []);

  const fetchSearchResults = async (query: string) => {
    try {
      const response = await tmdb.get('/search/movie', { params: { query } });
      setResults(response.data.results);
    } catch (error) {
      // TODO : show some kind of toast.
    }
  };

  return (
    <View>
      <SearchBar
        onChangeText={(text) => setQuery(text)}
        text={query}
        onEndEditing={() => fetchSearchResults(query)}
      />
      <Text>{`Search: ${query}`}</Text>
      <Text>{`Results Found: ${results.length}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
