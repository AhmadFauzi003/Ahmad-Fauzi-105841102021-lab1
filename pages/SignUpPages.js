import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View, Image, Alert } from 'react-native';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';

const SignUpPages = () => {
  const [fontsLoaded] = useFonts({
    'Metropolis-Bold': require('../assets/fonts/Bold.otf'),
    'Metropolis-Medium': require('../assets/fonts/Medium.otf'),
  });

  const [formSignUp, setForm] = useState({
    name: '',
    email: '',
    password: ''
  });

  const navigation = useNavigation();

  const onSubmit = () => {
    if (formSignUp.name && formSignUp.email && formSignUp.password) {
      alert('Sign Up Berhasil');
      navigation.navigate('Login');
    } else {
      alert('Sign Up Gagal', 'Semua field harus diisi');
    }
  };

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Font tidak ditemukan!</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { fontFamily: 'Metropolis-Bold' }]}>Sign Up</Text>
      <Text>Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        onChangeText={(text) => setForm({ ...formSignUp, name: text })}
        value={formSignUp.name}
      />
      <Text>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setForm({ ...formSignUp, email: text })}
        value={formSignUp.email}
      />
      <Text>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={(text) => setForm({ ...formSignUp, password: text })}
        value={formSignUp.password}
      />
      <TouchableOpacity style={styles.signUpButton} onPress={onSubmit}>
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
            <Image source={require('../assets/icon/google.png')} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.socialButton, { backgroundColor: 'white' }]}>
            <Image source={require('../assets/icon/facebook.png')} style={styles.icon} />
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
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 20,
  },
};

export default SignUpPages;
