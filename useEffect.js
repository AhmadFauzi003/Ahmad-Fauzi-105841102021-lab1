import * as React from  'react';
import { View, Text, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpPages from './pages/SignUpPages';
import LoginPages from './pages/LoginPages';
import ForgotPassPages from './pages/ForgotPassPages';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './assets/home.png';
import HomeAktif from './assets/home-aktif.png';
import Shop from './assets/shop.png';
import ShopAktif from './assets/shop-aktif.png';
import Bag from './assets/bag.png';
import BagAktif from './assets/bag-aktif.png';
import Favorite from './assets/favorite.png';
import FavoriteAktif from './assets/favorite-aktif.png';
import Profile from './assets/profile.png';
import ProfileAktif from './assets/profile-aktif.png';
import shop from './pages/shop';
import bag from './pages/bag';
import favorit from './pages/favorit';
import profile from './pages/profile';
import VisualSearch from './pages/VisualSearch';

const Tab = createBottomTabNavigator();

function MyTabs() {6
  return (
    <Tab.Navigator>
      <Tab.Screen 
      name="Home" 
      component={HomeScreen} 
      options={{
        headerShown: false,
        tabBarIcon: ({focused}) => (
          <Image 
          source={focused? HomeAktif : Home }
          style = {{ width: 35, height: 35 }}
          />
        )
      }}
      />
      <Tab.Screen 
      name="Shop" 
      component={shop} 
      options={{
        headerShown: false,
        tabBarIcon : ({focused}) => (
          <Image
          source={focused? ShopAktif : Shop }
          style = {{ width: 35, height: 35 }}
          />
        )
      }}
      />
    <Tab.Screen 
      name="Bag" 
      component={bag} 
      options={{
        headerShown: false,
        tabBarIcon : ({focused}) => (
          <Image
          source={focused? BagAktif : Bag }
          style = {{ width: 35, height: 35 }}
          />
        )
      }}
      />
     <Tab.Screen 
      name="Favorites" 
      component={favorit} 
      options={{
        headerShown: false,
        tabBarIcon : ({focused}) => (
          <Image
          source={focused? FavoriteAktif : Favorite }
          style = {{ width: 35, height: 35 }}
          />
        )
      }}
      />
    <Tab.Screen 
      name="Profile" 
      component={profile} 
      options={{
        headerShown: false,
        tabBarIcon : ({focused}) => (
          <Image
          source={focused? ProfileAktif : Profile }
          style = {{ width: 35, height: 35 }}
          />
        )
      }}
      />
    </Tab.Navigator>
  );
}


function HomeScreen({ navigation }) {
  return (
   <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}} >
    <Text>HomeScreen</Text>
    <Button
        title="Sign Up"
        onPress={() => navigation.navigate('Sign Up')}
      />
    </View>
     
  );
}

const Stack = createStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name = "Home" component = {MyTabs} />
        <Stack.Screen name = "Sign Up" component = {SignUpPages} />
        <Stack.Screen name= "Login" component={LoginPages} />
        <Stack.Screen name= "ForgotPassword" component={ForgotPassPages} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App