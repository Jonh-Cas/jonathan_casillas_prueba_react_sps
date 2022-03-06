import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import StackAppNavigation from './src/navigation/StackAppNavigation';

const App = () => {
  return (
    <NavigationContainer>
     <StackAppNavigation />
    </NavigationContainer>
  )
}

export default App;