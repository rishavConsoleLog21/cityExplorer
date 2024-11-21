import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {RootTabParamList} from '../screens/Home';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type ExplorerProps = NativeStackScreenProps<RootTabParamList, 'Explorer'>;

const Explorer = ({navigation}: ExplorerProps) => {
  return (
    <View>
      <Text>Explorer</Text>
    </View>
  );
};

export default Explorer;

const styles = StyleSheet.create({});
