import React, { useContext } from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { Button } from 'react-native-elements'
import Spacer from '../components/Spacer'
import { Context as AuthContext } from '../context/AuthContext'

const LogOut = () => {
  const { signOut } = useContext(AuthContext)

  return (
    <SafeAreaView>
      <Text>Logout</Text>
      <Spacer>
        <Button title="Logout" onPress={signOut} />
      </Spacer>
    </SafeAreaView>
  )
}

export default AccountScreen