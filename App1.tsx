import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import Content from './components/Content';

export default function App(): React.JSX.Element {
  const name = "Nutthinun Panawong";
  const onClickMe = () => {
    Alert.alert("Hello ",name);
  }

  return (
    <View style={styles.container}>
      <AppHeader name={"Nutthinun Panawong"} />  
      <Text style={styles.text}>{name} {'\n'}</Text>

      <Button 
        title="Click Me"
        onPress={onClickMe}
        color='blue'
      />
      <StatusBar style='auto' />
      <AppFooter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
  }
});
