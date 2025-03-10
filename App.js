import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';


export default function App() {
  const [count , setCount] = useState(0);
  let cunt=0;
  // Increment the value of count
  function handledIncre(){
    setCount(cunt+2);
  }

  // Decrement the value of count
  function handledDecre(){
    setCount(cunt-2);
  }

  // Reset the value of count
  function handledReset(){
    setCount(0);
  }
  return (
    <View style={styles.container}>
      
      <Text>Value of Counter is... {count}</Text>
      <Button title='Increase Counter' color='red' onPress={handledIncre}></Button>
      <Button title='decrease Counter' color='red' onPress={handledDecre}></Button>
      <Button title='reset Counter' color='red' onPress={handledReset}></Button>

      <StatusBar style="auto" />
    </View>  //for displaying value we use view
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: cunt<5? 'red':'purple',
    alignItems: 'center',
    justifyContent: 'center',
    height:"100px",
    width:"100px",
    color:'#fff'
  },
});
