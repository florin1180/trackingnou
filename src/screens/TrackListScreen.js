import React, { useEffect, useContext } from 'react'
import { FlatList, TouchableOpacity, SafeAreaView, ImageBackground } from 'react-native'
import { ListItem, Text } from 'react-native-elements'
import { Context as TrackContext } from '../context/TrackContext'

const TrackListScreen = ({ navigation }) => {
  const { state, fetchTracks } = useContext(TrackContext)
  useEffect(() => {
    const unsub = navigation.addListener('focus', () => fetchTracks())
    return unsub
  }, [navigation])

  return (
    <ImageBackground style={{
      flex:1}} source={{ uri:'https://cdn.pixabay.com/photo/2020/04/24/02/15/sunrise-5084755_960_720.jpg',
    }}
    >
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
      </ImageBackground>
    
  )
  
}

export default TrackListScreen