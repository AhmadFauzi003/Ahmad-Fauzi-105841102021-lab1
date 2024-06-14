import React from 'react';
import { Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';

const SignUpPages = () => {

  const [fontsLoaded] = useFonts({
    'Metropolis-Bold': require('../assets/fonts/Bold.otf'),
    'Metropolis-Medium': require('../assets/fonts/Medium.otf'),
  });

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Font tidak ditemukan!</Text>
      </View>
    );
  }

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { fontFamily: 'Metropolis-Bold' }]}>Sign Up</Text>
      <TextInput style={styles.input} placeholder="Name" />
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} />
      <TouchableOpacity style={styles.signUpButton} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <View style={styles.loginContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={[styles.loginText, { fontFamily: 'Metropolis-Medium' }]}>
            Already have an account? <Text style={styles.loginLink}>→</Text>
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.socialSignUpContainer}>
        <Text style={styles.orText}>Or sign up with a social account</Text>
        <View style={styles.socialButtons}>
          <TouchableOpacity style={[styles.socialButton, { backgroundColor: 'white' }]}>
            <Image source={require('../assets/google.png')} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.socialButton, { backgroundColor: 'white' }]}>
            <Image source={require('../assets/facebook.png')} style={styles.icon} />
          </TouchableOpacity>
        </View>
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
  loginContainer: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  loginText: {
    color: 'black',
  },
  loginLink: {
    color: 'red',
  },
  signUpButton: {
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
  socialSignUpContainer: {
    marginTop: 40, 
    alignItems: 'center',
  },
  orText: {
    alignSelf: 'center',
    marginBottom: 10,
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
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
};

export default SignUpPages;
