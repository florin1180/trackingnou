import React, { useContext, useCallback } from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import { withNavigationFocus } from '@react-navigation/compat';
import { Text } from 'react-native-elements'
import Map from '../components/Map'
import { Context as LocationContext } from '../context/LocationContext'
import '../_mockLocation'
import useLocation from '../hooks/useLocation' 
import TrackForm from '../components/TrackForm'
import Spacer from '../components/Spacer'
import Header from '../components/Header'

const TrackCreateScreen = ({ isFocused }) => {
  const { state: { recording }, addLocation } = useContext(LocationContext)
  const callback = useCallback(location => {
    addLocation(location, recording)
  }, [recording])
  const [err] = useLocation(isFocused || recording, callback)

  return (
    <SafeAreaView>
      <Text h2>Journey</Text>
      <Spacer>
      <Map/>
      {err ? <Text>Please enable location services</Text> : null}
      <TrackForm />
      </Spacer>
    </SafeAreaView>
  )
}



export default withNavigationFocus(TrackCreateScreen)