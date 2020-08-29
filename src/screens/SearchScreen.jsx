import React, { useState, useEffect } from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import SearchResultsList from '../components/SearchResultsList';
import useSearchResults from '../hooks/useSearchResults';

const SearchScreen = () => {
  const [query, setQuery] = useState('');
  const [movieResults, fetchSearchResults] = useSearchResults();

  return (
    <>
      <SearchBar onChangeText={(text) => setQuery(text)} text={query} onEndEditing={() => fetchSearchResults(query)} />
      <ScrollView>
        <SearchResultsList title='Movies' results={movieResults} />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
