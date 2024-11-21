import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  ToastAndroid,
} from 'react-native';
import React, {useState} from 'react';

// Firebase
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../../lib/FirebaseConfig';

// Navigation
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Colors} from '../../constants/Colors';

type SignInProps = NativeStackScreenProps<RootStackParamList, 'SignIn'>;

const SignIn = ({route}: SignInProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const onSignIn = () => {
    if (email === '' && password === '') {
      ToastAndroid.show('Please fill all the fields', ToastAndroid.SHORT);
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigation.replace('Home');
        // ...
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        if (errorCode === 'auth/user-not-found') {
          ToastAndroid.show('User not found', ToastAndroid.SHORT);
        } else if (errorCode === 'auth/invalid-credential') {
          ToastAndroid.show('Invalid Email or Password', ToastAndroid.SHORT);
        } else {
          ToastAndroid.show(errorMessage, ToastAndroid.SHORT);
        }
      });
  };

  return (
    <View
      style={{
        padding: 25,
        paddingTop: 40,
        backgroundColor: Colors.Secondary,
        height: '100%',
      }}>
      <Text
        style={{
          fontSize: 26,
          fontWeight: 'bold',
          color: 'black',
          textAlign: 'center',
          padding: 10,
        }}>
        Let's Sign In
      </Text>
      <Text
        style={{
          fontSize: 20,
          textAlign: 'center',
          color: 'darkblue',
          padding: 10,
        }}>
        We're happy to see you again! Please enter your credentials to sign in.
      </Text>
      {/* Email */}
      <View style={{marginTop: 50}}>
        <TextInput
          placeholder="Enter your Email"
          style={styles.input}
          onChangeText={value => setEmail(value)}
        />
      </View>
      {/* Password */}
      <View style={{marginTop: 20}}>
        <TextInput
          placeholder="Enter your Password"
          style={styles.input}
          secureTextEntry={true}
          onChangeText={value => setPassword(value)}
        />
      </View>
      {/* Sign In Button */}
      <View style={{marginTop: 20}}>
        <Pressable onPress={onSignIn}>
          <Text
            style={{
              backgroundColor: 'lawngreen',
              color: 'black',
              padding: 15,
              textAlign: 'center',
              borderRadius: 15,
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            Sign In
          </Text>
        </Pressable>
        <Text
          style={{
            textAlign: 'center',
            color: 'black',
            padding: 10,
            fontSize: 16,
          }}>
          Don't have an account?{' '}
          <Text
            style={{color: 'blue', fontWeight: 'bold'}}
            onPress={() => navigation.replace('SignUp')}>
            Create Account
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 25,
    paddingTop: 40,
    backgroundColor: Colors.Secondary,
    height: '100%',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    padding: 10,
  },
  description: {
    fontSize: 20,
    textAlign: 'center',
    color: 'darkblue',
    padding: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    margin: 10,
    backgroundColor: Colors.lessWhite,
    borderRadius: 15,
  },
});

export default SignIn;
