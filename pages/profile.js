import React from 'react';
import { Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';

const ProfilePage = () => {
  const [fontsLoaded] = useFonts({
    'Metropolis-Bold': require('../assets/fonts/Bold.otf'),
  });

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Font not found!</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={[styles.headerTitle, { fontFamily: 'Metropolis-Bold' }]}>My Profile</Text>
        <Image source={require('../assets/find.png')} style={styles.searchIcon} />
      </View>
      <View style={styles.profileHeader}>
        <Image source={require('../assets/banner/foto.jpg')} style={styles.profileImage} />
        <View style={styles.profileTextContainer}>
          <Text style={[styles.profileName, { fontFamily: 'Metropolis-Bold' }]}>AHMAD FAUZI SAIFUDDIN</Text>
          <Text style={styles.profileEmail}>fauzi@gmail.com</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.profileItem}>
        <View style={styles.itemTextContainer}>
          <Text style={[styles.itemTitle, { fontFamily: 'Metropolis-Bold' }]}>My orders</Text>
          <Text style={styles.itemSubtitle}>Already have 12 orders</Text>
        </View>
        <Image source={require('../assets/in.png')} style={styles.itemIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.profileItem}>
        <View style={styles.itemTextContainer}>
          <Text style={[styles.itemTitle, { fontFamily: 'Metropolis-Bold' }]}>Shipping addresses</Text>
          <Text style={styles.itemSubtitle}>3 addresses</Text>
        </View>
        <Image source={require('../assets/in.png')} style={styles.itemIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.profileItem}>
        <View style={styles.itemTextContainer}>
          <Text style={[styles.itemTitle, { fontFamily: 'Metropolis-Bold' }]}>Payment methods</Text>
          <Text style={styles.itemSubtitle}>Visa **34</Text>
        </View>
        <Image source={require('../assets/in.png')} style={styles.itemIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.profileItem}>
        <View style={styles.itemTextContainer}>
          <Text style={[styles.itemTitle, { fontFamily: 'Metropolis-Bold' }]}>Promocodes</Text>
          <Text style={styles.itemSubtitle}>You have special promocodes</Text>
        </View>
        <Image source={require('../assets/in.png')} style={styles.itemIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.profileItem}>
        <View style={styles.itemTextContainer}>
          <Text style={[styles.itemTitle, { fontFamily: 'Metropolis-Bold' }]}>My reviews</Text>
          <Text style={styles.itemSubtitle}>Reviews for 4 items</Text>
        </View>
        <Image source={require('../assets/in.png')} style={styles.itemIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.profileItem}>
        <View style={styles.itemTextContainer}>
          <Text style={[styles.itemTitle, { fontFamily: 'Metropolis-Bold' }]}>Settings</Text>
          <Text style={styles.itemSubtitle}>Notifications, password</Text>
        </View>
        <Image source={require('../assets/in.png')} style={styles.itemIcon} />
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = {
  container: {
    flexGrow: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 30,
  },
  searchIcon: {
    width: 25,
    height: 25,
    tintColor: 'black',
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 20,
  },
  profileTextContainer: {
    flex: 1,
  },
  profileName: {
    fontSize: 18,
  },
  profileEmail: {
    fontSize: 14,
    color: 'gray',
  },
  profileItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  itemIcon: {
    width: 25,
    height: 25,
    tintColor: 'grey',
  },
  itemTextContainer: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 18,
    color: 'black',
  },
  itemSubtitle: {
    fontSize: 14,
    color: 'gray',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 18,
  },
};

export default ProfilePage;
