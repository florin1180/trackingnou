import React, { useContext, useEffect } from 'react'; 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Image, StyleSheet } from 'react-native';
import { Block, Text, Button } from 'expo-ui-kit';

import AccountScreen from './src/screens/AccountScreen'
import SignInScreen from './src/screens/SignInScreen'
import SignUpScreen from './src/screens/SignUpScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen'
import TrackDetailScreen from './src/screens/TrackDetailScreen'
import TrackListScreen from './src/screens/TrackListScreen'
import LoadingScreen from './src/screens/LoadingScreen'
import { Provider as AuthProvider, Context as AuthContext } from './src/context/AuthContext'
import { Provider as LocationProvider } from './src/context/LocationContext'
import { Provider as TrackProvider } from './src/context/TrackContext'


const AuthStack = createStackNavigator()

const AuthStackScreen = () => (
  <AuthStack.Navigator screenOptions={{headerShown: false}}>
    <AuthStack.Screen name="SignUp" component={SignUpScreen} />
    <AuthStack.Screen name="SignIn" component={SignInScreen} />
  </AuthStack.Navigator>
)

const AppStack = createDrawerNavigator()

const AppStackScreen = () => (
  <AppStack.Navigator>
    <AppStack.Screen name="Account" component={TrackCreateScreen} />
    <AppStack.Screen name="History" component={TrackListScreen}/>
    <AppStack.Screen name="Logout" component={AccountScreen} />
  </AppStack.Navigator>
)

const TrackListStack = createStackNavigator()

const TrackListScreens = () => (
  <TrackListStack.Navigator>
    <TrackListStack.Screen name="History" component={TrackListScreen} />
    <TrackListStack.Screen name="Journey Details" component={TrackDetailScreen} />
  </TrackListStack.Navigator>
)


const App = () => {
  const { state } = useContext(AuthContext)

  if(state.isLoading) {
    return <LoadingScreen />
  }

  return (
    <NavigationContainer>
      {state.token === null ? (
          <AuthStackScreen />
        ) : (
          <AppStackScreen />
        )
      }
    </NavigationContainer>
  )
}

export default () => (
  <AuthProvider>
    <LocationProvider>
      <TrackProvider>
        <App />
      </TrackProvider>
    </LocationProvider>
  </AuthProvider>
)