
import WelcomeScreen from './components/pages/WelcomeScreen';
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './components/pages/HomeScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { UserContext } from './components/pages/UserContext';
import { GestureHandlerRootView } from 'react-native-gesture-handler';



// const stack= createNativeStackNavigator();
// const drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
export default function App() {
  const userName='hafsa'
  return (
    <GestureHandlerRootView>
    <UserContext.Provider value={userName}>
    <NavigationContainer>
      <Tab.Navigator initialRouteName="WelcomeScreen">
        
        <Tab.Screen options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="house" size={20} color={color} />
          )
        }}
          name="WelcomeScreen" component={WelcomeScreen} 
          />
         

        <Tab.Screen options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="house" size={20} color={color} />
          ),
          tabBarBadge:3

        }} name="HomeScreen" component={HomeScreen}
         />

      </Tab.Navigator>
    </NavigationContainer>
    </UserContext.Provider>
    </GestureHandlerRootView>
  );
}

