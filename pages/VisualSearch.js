import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';

const VisualSearch = () => {
  return (
    <ImageBackground
      source={require('../assets/banner/visual_banner.png')}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Search for an outfit by taking a photo or uploading an image</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>TAKE A PHOTO</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.uploadButton]} >
          <Text style={styles.buttonText}>UPLOAD AN IMAGE</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

export default VisualSearch;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '80%',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'red',
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 25,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  uploadButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: 'white',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
