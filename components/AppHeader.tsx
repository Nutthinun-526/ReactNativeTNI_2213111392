import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

type AppHeaderProps = {
  name:String;
}



const AppHeader = ({name}:AppHeaderProps): React.JSX.Element => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>
        {'\n'}
        Input your fullname 
      </Text >
      <Text style={styles.subtitleText}>
        {name}
      </Text>
    </View> 
  )
}

export default AppHeader;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#AEC6CF',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  subtitleText: {
    fontSize: 16,
    color: '#fff',
  },
});


