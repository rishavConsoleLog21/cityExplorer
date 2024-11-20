import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../constants/Colors';

const Login = () => {
  return (
    <View>
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

        <View style={styles.button}>
          <Text style={{color: 'white', textAlign: 'center', fontSize: 18}}>
            Sign in with Google
          </Text>
        </View>
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
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.White,
    marginTop: -10,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    padding: 10,
  },
  button: {
    padding: 10,
    backgroundColor: Colors.Primary,
    borderRadius: 20,
    width: 200,
    marginTop: '25%',
  },
});
