import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { StyleSheet, Text, View, Image, Button, Alert ,ScrollView, TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Lab2_2} from './lab2_2';
import {Lab2_1} from './lab2_1';
import {Lab3_1} from './lab3_1';
const MyStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="lab2_1" component={Lab2_1}/>
        <Stack.Screen name="lab2_2" component={Lab2_2} />
        <Stack.Screen name="lab3_1" component={Lab3_1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack