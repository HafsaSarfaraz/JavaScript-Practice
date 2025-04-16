import { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, } from 'react-native';
import { useFonts } from 'expo-font';


export default function WelcomeScreen({navigation}) {
    const [fontsLoaded] = useFonts({
        'Poppins-Regular': require('../../assets/font/Poppins-Regular.ttf'),
        'Poppins-Bold': require('../../assets/font/Poppins-Bold.ttf')
      });
  return (
   <View style={styles.container}>
         <View style={styles.iner}>
           <Image
             source={require('../../assets/BasketImage.png')}
             style={styles.img}
           />
         </View>
   
         <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 15, marginTop: 69, marginLeft: 19 }}>Get The Freshest Food Salad Combo</Text>
         <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 12, marginTop: 5, marginLeft: 19 }}>We deleiver the best and freshest food Salad in town. Order for a combo today!!!</Text>
         <TouchableOpacity
           style={{
             backgroundColor: '#FFA451',
             paddingVertical: 15,
             paddingHorizontal: 79,
             borderRadius: 8,
             marginTop: 30,
             alignSelf: 'center',
           }}
           onPress={() => navigation.navigate('HomeScreen')}
         >
           <Text style={{ color: 'white', fontFamily: 'Poppins-Bold' }}>Let's Continue</Text>
         </TouchableOpacity>
       </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  iner: {
    height: 450,
    width: '100%',
    backgroundColor: '#FFA451',
    justifyContent: 'center',
    alignItems: 'center'
  },

})