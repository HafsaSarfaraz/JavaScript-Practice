import { useEffect, useState } from 'react';
import React from 'react'
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { FlatList } from 'react-native-gesture-handler';

export default function HomeScreen() {
    const arr=['h','a','f','s','a']
    const [fontsLoaded] = useFonts({
        'Poppins-Regular': require('../../assets/font/Poppins-Regular.ttf'),
        'Poppins-Bold': require('../../assets/font/Poppins-Bold.ttf')
    });
    const [count, setCount] = useState(0);
    function touch() {
        setCount(count + 1);
    }

    useEffect(() => {
        alert('hello here' + count)
    }, [count])
    return (
        <View style={styles.container}>
            {/* Menue icon, text, text input, search icon */}
            <View style={styles.iner}>
                <MaterialIcons name="menu" size={20} color="black" style={{ marginLeft: 20, marginTop: 13 }} />
                <Image
                    source={require('../../assets/Vector.png')}
                    style={{ marginTop: -23, marginLeft: 320 }}
                />
                <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 21, marginTop: 36, marginLeft: 20 }}>Hello Kante, What food salad combo do you want today? </Text>
                <Ionicons name="search" size={20} color="#888" style={{ position: 'relative', zIndex: 200, top: 39.5, left: 46 }} />
                <TextInput
                    placeholder='               Search for food salad combo..'
                    style={{ height: 56, width: 288, backgroundColor: '#F3F4F9', borderRadius: 12, marginLeft: 16 }}
                />
                <Image
                    source={require('../../assets/togler.png')}
                    style={{ marginLeft: '89%', marginTop: -36 }}
                />
            </View>

            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 23, marginLeft: 20 }}>Recommended Combo</Text>
            <View style={styles.bottom}>
                <Image
                    source={require('../../assets/heart (2).png')}
                    style={{ marginTop: 10, marginLeft: '80%' }}
                />

                <Image
                    source={require('../../assets/food.png')}
                    style={{ marginLeft: 36, marginTop: 3 }}
                />

                <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 13, marginLeft: 14, marginTop: 10 }}>Honey lime Combo</Text>
                <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 13, marginLeft: 14, marginTop: 10, color: '#F08626' }}>$ 2,000</Text>
                <Image
                    source={require('../../assets/plus.png')}
                    style={{ marginLeft: 120, marginTop: -25 }}
                />
            </View>


            <View style={styles.bottom2}>
                <Image
                    source={require('../../assets/heart (2).png')}
                    style={{ marginTop: 10, marginLeft: '80%' }}
                />

                <Image
                    source={require('../../assets/food.png')}
                    style={{ marginLeft: 36, marginTop: 3 }}
                />

                <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 13, marginLeft: 10, marginTop: 10 }}>Berry Mango Combo</Text>
                <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 13, marginLeft: 14, marginTop: 10, color: '#F08626' }}>$ 2,000</Text>
                <Image
                    source={require('../../assets/plus.png')}
                    style={{ marginLeft: 120, marginTop: -25 }}
                />
            </View>

            <TouchableOpacity style={{
                backgroundColor: '#FFA451',
                paddingVertical: 15,
                paddingHorizontal: 79,
                borderRadius: 8,
                marginTop: 30,
                alignSelf: 'center',
            }}
                onPress={touch}
            ><Text>click me!</Text></TouchableOpacity>

          <FlatList
          data={arr}
          renderItem={({item})=>(
            <Text>{item}</Text>
    )}
          >

          </FlatList>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },

    iner: {
        height: 250,
        width: '100%',
    },

    bottom: {
        height: 180,
        width: '43%',
        backgroundColor: '#FFF2E7',
        marginLeft: 20,
        marginTop: 20
    },
    bottom2: {
        height: 180,
        width: '43%',
        backgroundColor: '#FFF2E7',
        marginLeft: '53%',
        marginTop: -178
    }


})
