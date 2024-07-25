import * as React from "react";
import { View, Text, Button, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import SignUpPages from "./pages/SignUpPages";
import LoginPages from "./pages/LoginPages";
import ForgotPassPages from "./pages/ForgotPassPages";

import Home from "./assets/icon/home.png";
import HomeAktif from "./assets/icon/home-aktif.png";
import Shop from "./assets/icon/shop.png";
import ShopAktif from "./assets/icon/shop-aktif.png";
import Cart from "./assets/icon/cart.png";
import CartAktif from "./assets/icon/cart-aktif.png";
import Favorite from "./assets/icon/favorite.png";
import FavoriteAktif from "./assets/icon/favorite-aktif.png";
import Profile from "./assets/icon/profile.png";
import ProfileAktif from "./assets/icon/profile-aktif.png";

import home from "./pages/Home";
import shop from "./pages/Shop";
import cart from "./pages/Cart";
import favorit from "./pages/Favorit";
import profile from "./pages/Profile";


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Sign Up" component={SignUpPages} />
        <Stack.Screen name="Login" component={LoginPages} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassPages} />
        <Stack.Screen name="Home" component={MyTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={home}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? HomeAktif : Home}
              style={{ width: 35, height: 35 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Shop"
        component={shop}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? ShopAktif : Shop}
              style={{ width: 35, height: 35 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={cart}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? CartAktif : Cart}
              style={{ width: 35, height: 35 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Wishlist"
        component={favorit}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? FavoriteAktif : Favorite}
              style={{ width: 35, height: 35 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? ProfileAktif : Profile}
              style={{ width: 35, height: 35 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default App;
