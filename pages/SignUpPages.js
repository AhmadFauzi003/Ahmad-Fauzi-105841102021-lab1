import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View, Image, StyleSheet } from 'react-native';
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
    if (formSignUp.userName && formSignUp.email && formSignUp.password) {
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
    <View style={styles.outerContainer}>
      <View style={styles.container}>
        <Text style={[styles.title, { fontFamily: 'Metropolis-Bold' }]}>Sign Up</Text>
        <TextInput
          style={styles.input}
          placeholder="UserName"
          onChangeText={(text) => setForm({ ...formSignUp, userName: text })}
          value={formSignUp.userName}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => setForm({ ...formSignUp, email: text })}
          value={formSignUp.email}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(text) => setForm({ ...formSignUp, password: text })}
          value={formSignUp.password}
        />
        <View style={styles.rememberMeContainer}>
          <TouchableOpacity style={styles.rememberMeBox}></TouchableOpacity>
          <Text style={styles.rememberMeText}>Remember me</Text>
        </View>
        <View style={styles.socialSignUpContainer}>
          <Text style={styles.orText}>Sign up with social account</Text>
          <View style={styles.socialButtons}>
            <TouchableOpacity style={styles.socialButton}>
              <Image source={require('../assets/icon/google.png')} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Image source={require('../assets/icon/facebook.png')} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Image source={require('../assets/icon/twitter.png')} style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.signUpButton} onPress={onSubmit}>
          <Text style={styles.buttonText}>Sign up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={[styles.loginText, { fontFamily: 'Metropolis-Medium' }]}>
            Already have an account? <Text style={styles.loginLink}>→</Text>
          </Text>
        </TouchableOpacity>
        <Text style={styles.licenseText}>Read User License Agreement</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: '#4BA3C7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    width: '90%',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
    color: '#333',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 15,
    backgroundColor: '#f9f9f9',
  },
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  rememberMeBox: {
    width: 20,
    height: 20,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    marginRight: 10,
  },
  rememberMeText: {
    color: '#555',
    fontSize: 14,
  },
  signUpButton: {
    width: '100%',
    backgroundColor: 'green',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  socialSignUpContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  orText: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  socialButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginHorizontal: 10,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  icon: {
    width: 24,
    height: 24,
  },
  loginText: {
    color: '#555',
    fontSize: 14,
  },
  loginLink: {
    color: '#green',
    fontSize: 14,
  },
  licenseText: {
    fontSize: 12,
    color: '#555',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 20,
  },
});

export default SignUpPages;
