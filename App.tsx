import { View, Text } from 'react-native'
import React from 'react'

import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import CreatePostScreens from './screens/CreatePostScreens';

export default function App(): React.JSX.Element {

  const HomeStack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <HomeStack.Navigator initialRouteName='Home'>
        <HomeStack.Screen name='Home' component={HomeScreen}/>
        <HomeStack.Screen name='About' component={AboutScreen}/>
        <HomeStack.Screen name='CreatePOst' component={CreatePostScreens}/>
      </HomeStack.Navigator>
    </NavigationContainer>
  );
};


