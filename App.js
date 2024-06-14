import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpPages from './pages/SignUpPages';
import LoginPages from './pages/LoginPages';
import ForgotPassPages from './pages/ForgotPassPages';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
        }}
      >
        <Stack.Screen name="SignUp" component={SignUpPages} />
        <Stack.Screen name="Login" component={LoginPages} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassPages} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
