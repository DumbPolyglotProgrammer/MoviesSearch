import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

interface SearchBarProps {
  onChangeText: (text: string) => void;
  text: string;
  onEndEditing: () => void;
}

const SearchBar = (props: SearchBarProps) => {
  return (
    <View style={styles.backgroundStyle}>
      <FontAwesome name='search' style={styles.iconStyle} />
      <TextInput
        placeholder='Search'
        style={styles.inputStyle}
        onChangeText={(text) => props.onChangeText(text)}
        value={props.text}
        onEndEditing={() => props.onEndEditing()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: 'white',
    margin: 16,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconStyle: {
    fontSize: 24,
    color: '#212121',
  },
  inputStyle: {
    fontSize: 18,
    marginStart: 16,
    flex: 1,
  },
});

export default SearchBar;
