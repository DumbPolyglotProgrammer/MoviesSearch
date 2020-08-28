import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import SearchResultsList from '../components/SearchResultsList';
import useSearchResults from '../hooks/useSearchResults';

const SearchScreen = () => {
  const [query, setQuery] = useState('');
  const [movieResults, tvShowResults, fetchSearchResults] = useSearchResults();

  return (
    <View>
      <SearchBar
        onChangeText={(text) => setQuery(text)}
        text={query}
        onEndEditing={() => fetchSearchResults(query)}
      />
      <Text>{`Search: ${query}`}</Text>
      <Text>{`Results Found: ${movieResults.length}`}</Text>
      <SearchResultsList title='Movies' results={movieResults} />
      <SearchResultsList title='TV Shows' results={tvShowResults} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
