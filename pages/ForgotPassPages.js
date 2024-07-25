import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';

const ForgotPassPages = () => {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);

  const [fontsLoaded] = useFonts({
    'Metropolis-Bold': require('../assets/fonts/Bold.otf'),
  });

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Font tidak ditemukan!</Text>
      </View>
    );
  }

  const validateEmail = (email) => {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  };

  const handleSend = () => {
    if (validateEmail(email)) {
      setIsValid(true);
      console.log('Email valid, kirim link reset password.');
    } else {
      setIsValid(false);
      console.log('Alamat email tidak valid.');
    }
  };

  return (
    <View style={styles.outerContainer}>
      <View style={styles.container}>
        <Text style={[styles.headerText, { fontFamily: 'Metropolis-Bold' }]}>Forgot Password</Text>
        <Text style={styles.subText}>
          Please enter your email address. You will receive a link to create a new password via email.
        </Text>
        <TextInput
          style={[styles.input, !isValid && styles.inputError]}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        {!isValid && <Text style={styles.errorText}>Invalid email address. Must be you@email.com</Text>}
        <TouchableOpacity style={styles.buttonContainer} onPress={handleSend}>
          <Text style={styles.buttonText}>SEND</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

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
  headerText: {
    fontSize: 28,
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  subText: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    paddingHorizontal: 15,
    backgroundColor: '#f9f9f9',
  },
  inputError: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 20,
    backgroundColor: 'green',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: '100%',
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

export default ForgotPassPages;
