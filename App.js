import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Components/Header.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Header></Header>
      <Text>Hello Word...this is my first reactnative ...</Text>
      <StatusBar style="auto" />
    </View>  //for displaying value we use view
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    height:"100px",
    width:"100px",
    color:'#fff'
  },
});
