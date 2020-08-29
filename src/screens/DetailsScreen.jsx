import React, { useState, useEffect } from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import SearchResultsList from '../components/SearchResultsList';
import useSearchResults from '../hooks/useSearchResults';

const DetailsScreen = ({ navigation }) => {
  const [query, setQuery] = useState('');
  const [movieResults, tvShowResults, fetchSearchResults] = useSearchResults();

  return (
    <>
      <Text>{navigation.getParam('id')}</Text>
    </>
  );
};

const styles = StyleSheet.create({});

export default DetailsScreen;
