import { Button, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TextCustom from './text';
import Image1 from './image';
import Daftar from './Signup';
import Login from './login';
import LupaPassword from './Forgotpass';

export default function App() {
  return (
    <>
     {/* <Login /> */}
     {<Daftar /> } 
     {/*<LupaPassword /> */}
    </>
  );

}
