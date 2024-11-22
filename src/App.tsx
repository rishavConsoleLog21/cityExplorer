import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

// Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// Screens
import Home from './screens/Home';
import SignIn from './auth/sign-in/SignIn';
import SignUp from './auth/sign-up/SignUp';
import Login from './components/Login';
import {auth} from './lib/FirebaseConfig';
import Search from './screens/create-trip/Search';

export type RootStackParamList = {
  Home: undefined;
  SignIn: undefined;
  SignUp: undefined;
  Login: undefined;
  Search: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  const user = auth.currentUser;
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {user ? (
          <Stack.Group>
            <Stack.Screen name="Home" component={Home} />
          </Stack.Group>
        ) : (
          <Stack.Group>
            <Stack.Screen name="Login" component={Login} />
          </Stack.Group>
        )}
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Search" component={Search} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
