import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SplashScreen from '../screens/SplashScreen';
import UsersScreen from '../screens/UsersScreen';
import UserCardScreen from '../screens/UserCardScreen';
import { UserInfo } from '../interfaces/userListInterfaces';

export type RootStackAppNavigation = {
    SplashScreen: undefined;
    UsersScreen: undefined;
    UserCardScreen: UserInfo;
}

const Stack = createStackNavigator<RootStackAppNavigation>();

const StackAppNavigation = () => {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown: false,
            cardStyle: {
              backgroundColor: '#fff',
            }
        }}
    >
        <Stack.Screen  name='SplashScreen' component={SplashScreen} />
        <Stack.Screen  name='UsersScreen' component={UsersScreen} />
        <Stack.Screen  name='UserCardScreen' component={UserCardScreen} />
    </Stack.Navigator>
  )
}

export default StackAppNavigation;