import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

const ForgotPassPages = () => {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);

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
    <View style={styles.container}>
      <Text style={styles.headerText}>Forgot Password</Text>
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
  );
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    justifyContent: 'center', 
    alignItems: 'center',     
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',     
  },
  subText: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 20,
    textAlign: 'center',     
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    width: '100%',           
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
    backgroundColor: 'red',
    borderRadius: 25,
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
}

export default ForgotPassPages
