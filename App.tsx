import { View, Text, StyleSheet } from "react-native";
import React from "react";

import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import CreatePostScreens from "./screens/CreatePostScreens";

export default function App(): React.JSX.Element {
  const HomeStack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      {/* //title bar GLOBAL */}
      <HomeStack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: "#E29587" },
          headerTintColor: "white",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      >
        {/* //แต่ละหน้า */}
        <HomeStack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "เกี่ยวกับเรา" }}
        />
        <HomeStack.Screen
          name="About"
          component={AboutScreen}/>
        <HomeStack.Screen name="CreatePost" component={CreatePostScreens} />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
