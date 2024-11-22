import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

// Navigation
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from './tabs/Profile';
import Mytrips from './tabs/Mytrips';
import Explorer from './tabs/Explorer';

export type RootTabParamList = {
  Explorer: undefined;
  Mytrips: undefined;
  Profile: undefined;
  StartNewTripCard: undefined;
  Search: undefined;
};

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Tab = createBottomTabNavigator<RootTabParamList>();

const Home = ({navigation}: HomeProps) => {
  return (
    <Tab.Navigator
      initialRouteName="Explorer"
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="Explorer"
        component={Explorer}
        options={{
          tabBarIcon: ({size}) => (
            <Icon name={'search'} size={size} color="#38CC77" />
          ),
        }}
      />
      <Tab.Screen
        name="Mytrips"
        component={Mytrips}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <Icon name={'suitcase'} size={size} color="#38CC77" />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <Icon name={'user'} size={size} color="#38CC77" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff2',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 5,
    fontFamily: 'Outfit-Regular',
    color: '#000',
  },
});
