import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import tmdb from '../api/tmdb';

import { Button } from 'react-native';

const SearchScreen = () => {
  return (
    <View>
      <SearchBar />
      <Text>SearchScreen</Text>
      <Button
        title='API Call'
        onPress={() =>
          tmdb
            .get('/search/movie', { params: { query: 'spider' } })
            .then((response) => console.log(response))
            .catch((error) => console.log(error))
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
