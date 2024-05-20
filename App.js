import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView style = {{
      flex: 1,
      backgroundColor: 'white',
    }}>
  <View style={{ 
    flex : 1, 
    backgroundColor : 'white',
    justifyContent: 'center',
    alignItems: 'flex-end',
    flexDirection: 'row',
    marginBottom : 100
    }}>

    <View style={{ 
     backgroundColor: 'red',
     width : 150,
     height : 80,
     borderRadius : 10,
     marginRight : 10,
     }}> 
       <Text style={{
        color : 'white',
        textAlign : 'center',
        lineHeight : 80,
        fontSize : 30,
        fontWeight : 'bold',
      }}>
        Login
      </Text>
    </View>
    <View style={{ 
     backgroundColor: 'blue',
     width : 150,
     height : 80,
     borderRadius : 10,
     marginRight : 10,
     }}> 
       <Text style={{
        color : 'white',
        textAlign : 'center',
        lineHeight : 80,
        fontSize : 30,
        fontWeight : 'bold',
      }}>
        Register
      </Text>
    </View>
  </View>
  </SafeAreaView>
  );
}

