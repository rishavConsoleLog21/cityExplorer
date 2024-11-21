import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';

// Navigation
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Colors} from '../../constants/Colors';

type SignUpProps = NativeStackScreenProps<RootStackParamList, 'SignUp'>;

const SignUp = ({route}: SignUpProps) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

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
        Create New Account
      </Text>
      {/* Full Name */}
      <View style={{marginTop: 50}}>
        <TextInput placeholder="Enter your Full Name" style={styles.input} />
      </View>
      {/* Email */}
      <View style={{marginTop: 20}}>
        <TextInput placeholder="Enter your Email" style={styles.input} />
      </View>
      {/* Password */}
      <View style={{marginTop: 20}}>
        <TextInput
          placeholder="Enter your Password"
          style={styles.input}
          secureTextEntry={true}
        />
      </View>
      {/* Sign Un Button */}
      <View style={{marginTop: 20}}>
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
          Create Account
        </Text>
        <Text
          style={{
            textAlign: 'center',
            color: 'black',
            padding: 10,
            fontSize: 16,
          }}>
          Already have an account?{' '}
          <Text
            style={{color: 'blue', fontWeight: 'bold'}}
            onPress={() => navigation.replace('SignIn')}>
            Sign In
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

export default SignUp;
