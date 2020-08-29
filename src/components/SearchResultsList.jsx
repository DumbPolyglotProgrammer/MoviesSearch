import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import SearchResult from './SearchResult';

const SearchResultsList = ({ title, results, navigation }) => {
  if (!results.length) {
    return null;
  }

  return (
    <View style={styles.containerStyle}>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        data={results}
        keyExtractor={(result) => `${result.id}`}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('Details', { id: item.id })}>
              <SearchResult result={item} />
            </TouchableOpacity>
          );
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

export default withNavigation(SearchResultsList);
