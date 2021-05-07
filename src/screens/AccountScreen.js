import React, { useContext } from 'react'
import { View, SafeAreaView, ImageBackground, StyleSheet } from 'react-native'
import { Button, Text } from 'react-native-elements'
import Spacer from '../components/Spacer'
import { Context as AuthContext } from '../context/AuthContext'

const AccountScreen = ({navigation}) => {
  const { signOut } = useContext(AuthContext)

  return (
    <SafeAreaView>
      <View style={styles.text}>
        <Text h3>Putem incarca doar "Email Utilizator:".</Text>
        <Text h3>Nu avem alta informatie</Text>
      <Spacer>
        <Button title="Logout" onPress={signOut} />
        </Spacer>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  text: {
    height: 500,
    justifyContent: 'space-around'
  }
})
export default AccountScreen