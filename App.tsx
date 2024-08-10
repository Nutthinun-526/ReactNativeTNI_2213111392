import { View, Text } from 'react-native'
import React from 'react'
import ProfileScreen from './components/ProfileScreen'
import FlatListExample from './components/FlastListExample'
import FlatListcallBackend from './components/FlatListcallBackend'
// import UseEffectExample from './components/useEffectExample'


const App = ():React.JSX.Element => {
  return (
    <View>
      {/* <ProfileScreen/> */}
      {/* <UseEffectExample/> */}
      <FlatListExample/>
      <FlatListcallBackend/>
    </View>
  )
}

export default App