import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SelectAutomobile from './Screens/SelectAutomobile/SelectAutomobile';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Map from './Screens/Map/Map';
import Route from './Screens/Route/Route';
import MainOptions from './Screens/MainOptions/MainOptions';
import Explore from './Screens/Explore/Explore';

const Stack = createNativeStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="main-options" component={MainOptions} />
        <Stack.Screen name="choose-transport" component={SelectAutomobile} />
        <Stack.Screen name="map" component={Map} />
        <Stack.Screen name="route" component={Route} />
        <Stack.Screen name="explore" component={Explore}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

