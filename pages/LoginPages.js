import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View, Image, StyleSheet, Dimensions } from 'react-native';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width, height } = Dimensions.get("window");

const LoginPages = () => {
  const [fontsLoaded] = useFonts({
    'Metropolis-Bold': require('../assets/fonts/Bold.otf'),
    'Metropolis-Medium': require('../assets/fonts/Medium.otf'),
  });

  const [formLogin, setForm] = useState({
    nim: '',
    password: ''
  });

  const navigation = useNavigation();

  const onSubmit = () => {
    const { nim, password } = formLogin;
    if (!nim || !password) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'All fields are required!',
      });
      return;
    }

    axios.post('https://api.beasiswa.unismuh.ac.id/api/login', {
      username: nim,
      password: password
    })
    .then(async (response) => {
      if (response.status === 200) {
        await AsyncStorage.setItem("userName", response.data.data.nama);
        await AsyncStorage.setItem("userNim", nim);

        Toast.show({
          type: 'success',
          text1: 'Success',
          text2: 'Logging in...',
          autoHide: false,
        });

        setTimeout(() => {
          Toast.hide();
          navigation.navigate("Home");
        }, 3000);
      } else {
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: 'Invalid NIM or password!',
        });
      }
    })
    .catch(error => {
      console.log("Error during login:", error.message);
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Failed to log in. Please try again later.',
      });
    });
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
        <Text style={[styles.title, { fontFamily: 'Metropolis-Bold' }]}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="NIM"
          keyboardType="numeric"
          onChangeText={(hasil) => setForm({ ...formLogin, nim: hasil })}
          value={formLogin.nim}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(text) => setForm({ ...formLogin, password: text })}
          value={formLogin.password}
        />
        <TouchableOpacity style={styles.forgotPasswordContainer} onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={[styles.forgotPasswordText, { fontFamily: 'Metropolis-Medium' }]}>
            Forgot Password? <Text style={styles.forgotPasswordLink}>→</Text>
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton} onPress={onSubmit}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <Toast />
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
  forgotPasswordContainer: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: '#555',
    fontSize: 14,
  },
  forgotPasswordLink: {
    color: '#FF0000',
    fontSize: 14,
  },
  loginButton: {
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
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 20,
  },
});

export default LoginPages;
