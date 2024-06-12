import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPages from './pages/LoginPages';
import ForgotPassPages from './pages/ForgotPassPages';
import SignupPages from './pages/SignUpPages';
import { Button } from 'react-native-web';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
  
      <Button
        title = "Go to Login"
        onPress = {() => navigation.navigate('Login')}
     />
    <Button
        title = "Go to ForgotPass"
        onPress = {() => navigation.navigate('ForgotPass')}
     />
    <Button
        title = "Go to SignUp"
        onPress = {() => navigation.navigate('SignUp')}
     />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginPages} />
        <Stack.Screen name="ForgotPass" component={ForgotPassPages} />
        <Stack.Screen name="SignUp" component={SignupPages} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;