import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Beranda,Lainnya,Pembatalan,PesananSaya,Splash} from '../pages';
import {BottomNavigator} from '../components/';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
      <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
        <Tab.Screen name="Beranda" component={Beranda} options={{ headerShown:false }} />
        <Tab.Screen name="Pesanan Saya" component={PesananSaya} options={{ headerTitleAlign:'center'}}/>
        <Tab.Screen name="Pembatalan" component={Pembatalan} options={{ headerTitleAlign:'center'}} />
        <Tab.Screen name="Lainnya" component={Lainnya} />
      </Tab.Navigator>
  )
}

const Router = () => {
  return (
    <Stack.Navigator initialRouteName='Splash'>
      <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
      <Stack.Screen name="MainApp" component={MainApp} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}
 

export default Router

const styles = StyleSheet.create({})