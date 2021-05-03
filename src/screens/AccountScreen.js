import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import { View, SafeAreaView, ImageBackground } from 'react-native'
import { Button, Text } from 'react-native-elements'
import Spacer from '../components/Spacer'
import { Context as AuthContext } from '../context/AuthContext'

const AccountScreen = () => {
  const { signOut } = useContext(AuthContext)

  return (
    <ImageBackground style={{
      flex:1}} source={{ uri:'https://cdn.pixabay.com/photo/2020/04/24/02/15/sunrise-5084755_960_720.jpg',
    }}
    >
    <SafeAreaView>
      <Text h2>Logout</Text>
      <Spacer>
        <Button title="Logout" onPress={signOut} />
      </Spacer>
    </SafeAreaView>
    </ImageBackground>
  )
}

export default AccountScreen