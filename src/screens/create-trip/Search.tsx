import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

// Navigation
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';

type SearchProps = NativeStackScreenProps<RootStackParamList, 'Search'>;

const Search = ({route}: SearchProps) => {
  return (
    <View>
      <Text>Search</Text>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({});
