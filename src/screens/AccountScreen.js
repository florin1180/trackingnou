import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import { View, SafeAreaView } from 'react-native'
import { Button, Text } from 'react-native-elements'
import Spacer from '../components/Spacer'
import { Context as AuthContext } from '../context/AuthContext'

const AccountScreen = () => {
  const { signOut } = useContext(AuthContext)

  return (
    <SafeAreaView>
      <Text h2>Logout</Text>
      <Spacer>
        <Button title="Logout" onPress={signOut} />
      </Spacer>
    </SafeAreaView>
  )
}

export default AccountScreen