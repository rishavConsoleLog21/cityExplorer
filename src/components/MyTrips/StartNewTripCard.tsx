import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

// Navigation
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootTabParamList} from '../../screens/Home';

type StartNewTripCardProps = NativeStackScreenProps<
  RootTabParamList,
  'StartNewTripCard'
>;

const StartNewTripCard = ({navigation}: StartNewTripCardProps) => {
  return (
    <View
      style={{
        padding: 20,
        marginTop: 50,
        display: 'flex',
        alignItems: 'center',
        gap: 15,
      }}>
      <Icon name="map-marked-alt" size={35} color="#38CC77" />
      <Text
        style={{
          fontSize: 25,
          fontWeight: 'medium',
          textAlign: 'center',
          color: 'black',
        }}>
        No Trip planned yet!
      </Text>
      <Text
        style={{
          fontSize: 15,
          textAlign: 'center',
          color: 'gray',
        }}>
        Looks like time to plan a new trip. Click the button below to start a
        new trip.
      </Text>
      <Pressable
        onPress={() => {
          navigation.navigate('Search');
        }}
        style={{
          padding: 10,
          borderRadius: 10,
          backgroundColor: '#38CC77',
        }}>
        <Text
          style={{
            fontSize: 20,
            color: 'white',
            backgroundColor: '#38CC77',
          }}>
          Start New Trip
        </Text>
      </Pressable>
    </View>
  );
};

export default StartNewTripCard;

const styles = StyleSheet.create({});
