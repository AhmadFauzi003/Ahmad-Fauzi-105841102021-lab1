import React from 'react';
import { Text, TextInput, TouchableOpacity, View, Image } from 'react-native';

const Daftar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daftar</Text>
      <TextInput style={styles.input} placeholder="Nama" />
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Kata Sandi" secureTextEntry={true} />
      <TouchableOpacity style={styles.signUpButton}>
        <Text style={styles.buttonText}>Daftar</Text>
      </TouchableOpacity>
      <View style={styles.textAndIconContainer}>
        <Text style={styles.loginText}>
          Sudah punya akun? <Text style={styles.loginLink}>→</Text>
        </Text>
        <Text style={styles.orText}>Atau daftar dengan akun sosial</Text>
        <View style={styles.socialButtons}>
          <TouchableOpacity style={[styles.socialButton, { backgroundColor: 'white' }]}>
            <Image source={require('./assets/google.png')} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.socialButton, { backgroundColor: 'white' }]}>
            <Image source={require('./assets/facebook.png')} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

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
  loginText: {
    alignSelf: 'flex-end', 
    marginBottom: 20,
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
  textAndIconContainer: {
    alignItems: 'center', 
  },
}

export default Daftar
