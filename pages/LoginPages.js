import React from 'react';
import { Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginPages = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} />
      <TouchableOpacity style={styles.forgotPasswordContainer} onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.forgotPasswordText}>
          Forgot Password? <Text style={styles.forgotPasswordLink}>→</Text>
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Login}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Text style={[styles.orText, { marginTop: 40 }]}>Or Login With social media</Text>
      <View style={styles.socialButtons}>
        <TouchableOpacity style={[styles.socialButton, { backgroundColor: 'white' }]}>
          <Image source={require('../assets/google.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.socialButton, { backgroundColor: 'white' }]}>
          <Image source={require('../assets/facebook.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  forgotPasswordContainer: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: 'gray',
  },
  forgotPasswordLink: {
    color: 'red',
  },
 Login: {
    backgroundColor: 'red',
    paddingVertical: 15,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  orText: {
    alignSelf: 'center',
    marginBottom: 20,
    marginTop: 40, 
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10, 
  },
  socialButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    borderColor: 'gray',
    borderWidth: 1,
  },
  icon: {
    width: 24,
    height: 24,
  },
}

export default LoginPages
