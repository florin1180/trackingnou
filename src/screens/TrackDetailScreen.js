import React, { useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import { Context as TrackContext } from '../context/TrackContext'
import MapView, { Polyline } from 'react-native-maps'
import Spacer from '../components/Spacer'

const TrackDetailScreen = ({ route, navigation }) => {
  const { state }  = useContext(TrackContext)
  const _id = route.params._id
  const track = state.find((t) => t._id === _id)
  const initCoords = track.locations[0].coords

  return (
    <View>
      <MapView 
        style={styles.map}
        initialRegion={{
          longitudeDelta: 0.01,
          latitudeDelta: 0.01,
          ...initCoords
        }}
      >
        <Polyline coordinates={track.locations.map((loc) => loc.coords)} />
      </MapView>
      <Text h3>Journey Name: {track.name }</Text>
      <Spacer/>
      <Text h4>Coordinates:</Text>
      <Text h5>Latitude:</Text>
      <Text h5>Longitude:</Text>
      <Text h5>Miles:</Text>

      <Spacer/>
    </View>
  )
}

const styles = StyleSheet.create({
  map: {
    height: 500
  }
})

export default TrackDetailScreen