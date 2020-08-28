import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import SearchResult from './SearchResult';

interface SearchResultsListProps {
  title: string;
  results: any[];
}

const SearchResultsList = (props: SearchResultsListProps) => {
  return (
    <View>
      <Text style={styles.titleStyle}>{props.title}</Text>
      <FlatList
        data={props.results}
        keyExtractor={(result) => `${result.id}`}
        renderItem={({ item }) => {
          return <SearchResult result={item} />;
        }}
        horizontal
      />
    </View>
  );
};

const styles = StyleSheet.create({
  //   backgroundStyle: {
  //     backgroundColor: 'white',
  //     margin: 16,
  //     paddingVertical: 8,
  //     paddingHorizontal: 16,
  //     borderRadius: 4,
  //     flexDirection: 'row',
  //     alignItems: 'center',
  //   },
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  //   inputStyle: {
  //     fontSize: 18,
  //     marginStart: 16,
  //     flex: 1,
  //   },
});

export default SearchResultsList;
