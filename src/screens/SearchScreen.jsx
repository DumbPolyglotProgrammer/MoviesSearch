import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useSearchResults from '../hooks/useSearchResults';

const SearchScreen = () => {
  const [query, setQuery] = useState('');
  const [searchResults, fetchSearchResults] = useSearchResults();

  return (
    <View>
      <SearchBar
        onChangeText={(text) => setQuery(text)}
        text={query}
        onEndEditing={() => fetchSearchResults(query)}
      />
      <Text>{`Search: ${query}`}</Text>
      <Text>{`Results Found: ${searchResults.length}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
