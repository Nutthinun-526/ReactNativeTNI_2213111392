import { View, Text } from 'react-native'
import React from 'react'
import FlatListcallBackend from './components/FlatListcallBackend'
import NewsApp from './components/NewsApp'
import { StatusBar } from 'expo-status-bar'



const App = ():React.JSX.Element => {
  return (
    <View>
      {/* <FlatListcallBackend/> */}
      <NewsApp/>
      <StatusBar style="auto" />
    </View>
  );
};

export default App