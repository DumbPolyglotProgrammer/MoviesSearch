import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import tmdb from '../api/tmdb';

const SearchScreen = () => {
  const [query, setQuery] = useState('');

  return (
    <View>
      <SearchBar onChangeText={(text) => setQuery(text)} text={query} />
      <Text>{`SearchScreen: ${query}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
