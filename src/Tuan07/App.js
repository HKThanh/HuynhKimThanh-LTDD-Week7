import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Screens/Home';
import TaskLists from './Screens/TaskLists';
import TaskDetail from './Screens/TaskDetail';

const Stack = createNativeStackNavigator();

function LogoTitle() {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'center'}}>
      <Image
        style={{ width: 50, height: 50, borderRadius: 50, marginTop: 40, marginRight: 10, marginLeft: 124}}
        source={require('./assets/logo.png')}
      />
      <View style={{marginTop: 44}}>
        <Text style={{fontSize: 20, fontWeight: '700'}}>   Hi Twinkle</Text>
        <Text style={{fontSize: 14}}>Have agrate day a head</Text>
      </View>
    </View>
  );
}

function LogoTitleRight() {
  return (
    <View style={{flexDirection: 'row', paddingLeft: 20}}>
      <Image
        style={{ width: 50, height: 50, borderRadius: 50, marginTop: 40, marginRight: 10}}
        source={require('./assets/logo.png')}
      />
      <View style={{marginTop: 44}}>
        <Text style={{fontSize: 20, fontWeight: '700'}}>   Hi Twinkle</Text>
        <Text style={{fontSize: 14}}>Have agrate day a head</Text>
      </View>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen 
          name="TaskLists" 
          component={TaskLists}
          options={{
            headerTitle: (props) => <LogoTitle {...props} />,
            headerTitleAlign: 'center',
            headerLeft: () => (
              <Image
                source={require('./assets/Arrow-Left--Streamline-Phosphor.png')}
                style={{
                  width: 20,
                  height: 20,
                }}
              />
            ),
          }}
        />
        <Stack.Screen 
          name="TaskDetail" 
          component={TaskDetail} 
          options={{
            headerTitle: (props) => <LogoTitleRight {...props} />,
            headerRight: () => (
              <Image
                source={require('./assets/Arrow-Left--Streamline-Phosphor.png')}
                style={{
                  width: 20,
                  height: 20,
                  marginRight: 20,
                  marginTop: 40,
                }}
              />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
