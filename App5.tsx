import { View, Text } from 'react-native'
import React from 'react'
import FlatListcallBackend from './components/FlatListcallBackend'
import NewsApp from './components/NewsApp'
import { StatusBar } from 'expo-status-bar'
import AxiosgetData from './components/AxiosgetData'
import AxiosPostData from './components/AxiosgetData'
import WeatherLondon from './components/WeatherLondon'
import WeatherBangkok from './components/WeatherBangkok'
import ModelExample from './components/ModelExample'
import AboutScreen from './screens/AboutScreen'



const App = ():React.JSX.Element => {
  return (
    <View>
      {/* <FlatListcallBackend/> */}
      {/* <NewsApp/>
      <StatusBar style="auto" /> */}
      {/* <WeatherLondon/> */}
      {/* <AxiosgetData/>
      <AxiosPostData/> */}
      {/* <WeatherBangkok/> */}
      <ModelExample/>
    </View>
  );
};

export default App