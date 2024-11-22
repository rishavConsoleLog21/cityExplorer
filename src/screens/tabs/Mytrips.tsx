import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../../constants/Colors';
import Icon from 'react-native-vector-icons/FontAwesome5';
import StartNewTripCard from '../../components/MyTrips/StartNewTripCard';

const Mytrips = () => {
  const [userTrips, setUserTrips] = useState([]);

  return (
    <View
      style={{
        padding: 25,
        paddingTop: 50,
        backgroundColor: Colors.Secondary,
        height: '100%',
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignContent: 'center',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            color: Colors.Black,
            fontSize: 30,
            fontWeight: 'bold',
          }}>
          My Trips
        </Text>
        <Icon name="plus-circle" size={35} color="#38CC77" />
      </View>
      {userTrips.length == 0 ? <StartNewTripCard /> : null}
    </View>
  );
};

export default Mytrips;

const styles = StyleSheet.create({});
