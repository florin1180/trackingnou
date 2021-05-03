import React, { useEffect, useContext } from 'react'
import { FlatList, TouchableOpacity, SafeAreaView } from 'react-native'
import { ListItem, Text } from 'react-native-elements'
import { Context as TrackContext } from '../context/TrackContext'

const TrackListScreen = ({ navigation }) => {
  const { state, fetchTracks } = useContext(TrackContext)
  useEffect(() => {
    const unsub = navigation.addListener('focus', () => fetchTracks())
    return unsub
  }, [navigation])

  return (
    
    <SafeAreaView>
      <Text h3>History</Text>
      <FlatList 
        data={state}
        keyExtractor={item => item._id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity 
              onPress={() => 
                navigation.navigate('TrackDetailScreen', { _id: item._id })
              }
            >
              <ListItem chevron title={item.name} />
            </TouchableOpacity>
          )
        }}
      />
      </SafeAreaView>
    
  )
  
}

export default TrackListScreen