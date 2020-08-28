import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

interface SearchResultProps {
  result: any;
}

const SearchResult = (props: SearchResultProps) => {
  return (
    <View style={styles.containerStyle}>
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/w1280${props.result.backdrop_path}`,
        }}
        style={styles.imageStyle}
      />
      <Text style={styles.titleStyle}>
        {props.result.title || props.result.name}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    marginHorizontal: 8,
  },
  imageStyle: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5,
  },
  titleStyle: {
    fontWeight: 'bold',
  },
});

export default SearchResult;
