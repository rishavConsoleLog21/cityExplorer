import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../constants/Colors';

// Navigation Screen for Login
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';

type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

const Login = ({navigation}: LoginProps) => {
  return (
    <View style={styles.Maincontainer}>
      <Image
        source={require('./../../assets/images/pexels-leeloothefirst-8372624.jpg')}
        style={styles.image}
      />
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 26,
            fontWeight: 'bold',
            color: 'black',
            padding: 10,
          }}>
          Welcome to City Explorer!
        </Text>
        <Text style={{fontSize: 20, textAlign: 'center'}}>
          Login & start your journey with us, create your city planning and
          share it with your friends to roam the city without any hassle.
        </Text>
        <Pressable
          onPress={() => {
            navigation.push('SignIn');
          }}
          style={styles.button}>
          <Text style={{color: 'white', textAlign: 'center', fontSize: 18}}>
            Get Started
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  image: {
    width: 404,
    height: 500,
    marginTop: 4,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  Maincontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.Primary,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.Secondary,
    marginTop: -10,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    padding: 10,
  },
  button: {
    padding: 10,
    backgroundColor: Colors.Dark,
    borderRadius: 20,
    width: 200,
    marginTop: '25%',
  },
});
