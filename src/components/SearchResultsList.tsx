import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface SearchResultsListProps {
  title: string;
  results: [];
}

const SearchResultsList = (props: SearchResultsListProps) => {
  return (
    <View>
      <Text style={styles.titleStyle}>{props.title}</Text>
      <Text>Results: {props.results.length}</Text>
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
