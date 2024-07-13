import { View, Text, StyleSheet, Alert, Button } from 'react-native'
import React from 'react'

const Content = () => {

  const name = 'Nutthinun';
  const onClickMe = () => {
    Alert.alert("Hello",name);
  }

  return (
    <View style={styles.content}>
      <Text style={styles.text}>
        Nutthinun Panawong
      </Text>
      <Button 
      title = "click me"
      onPress = {onClickMe}
      />
    </View>
  )
}

export default Content;

const styles = StyleSheet.create({
    content: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize:18,
        marginBottom:20,
    },
});

