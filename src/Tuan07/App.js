import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Screens/Home';
import TaskLists from './Screens/TaskLists';
import TaskDetail from './Screens/TaskDetail';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen 
          name="TaskLists" 
          component={TaskLists}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen 
          name="TaskDetail" 
          component={TaskDetail} 
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
