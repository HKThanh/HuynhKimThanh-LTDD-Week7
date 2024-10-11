import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React, {useContext} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Screens/Home';
import TaskLists from './Screens/TaskLists';
import TaskDetail from './Screens/TaskDetail';
import { ReloadContext } from './context';

const Stack = createNativeStackNavigator();

export default function App() {
  const [reload, setReload] = React.useState(false);

  return ( 
    <NavigationContainer>
      <ReloadContext.Provider value={{reload, setReload}}>
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
      </ReloadContext.Provider>
    </NavigationContainer>
  );
}
