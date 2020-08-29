import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import SearchResult from './SearchResult';

interface SearchResultsListProps {
  title: string;
  results: any[];
}

const SearchResultsList = (props: SearchResultsListProps) => {
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.titleStyle}>{props.title}</Text>
      <FlatList
        data={props.results}
        keyExtractor={(result) => `${result.id}`}
        renderItem={({ item }) => {
          return <SearchResult result={item} />;
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    marginBottom: 16,
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginStart: 16,
    marginBottom: 4,
  },
});

export default SearchResultsList;
