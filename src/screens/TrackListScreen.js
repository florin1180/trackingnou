import React, { useEffect, useContext } from 'react'
import { FlatList, TouchableOpacity, ImageBackground, SafeAreaView } from 'react-native'
import { ListItem, Text } from 'react-native-elements'
import { Context as TrackContext } from '../context/TrackContext'
import Spacer from '../components/Spacer'
import { View } from 'react-native'

const TrackListScreen = ({navigation}) => {
  const { state, fetchTracks } = useContext(TrackContext)
  useEffect(() => {
    const unsub = navigation.addListener('focus', () => fetchTracks())
    return unsub
  }, [navigation])
  
  return (
    
    <View>
      <Spacer/>
      <SafeAreaView>
      <FlatList
        data={state}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() =>
              navigation.navigate('Journey Details', {_id:item._id})
            }>
              <ListItem>
                <ListItem.Content>
                  <ListItem.Title>{item.name}</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem>
            </TouchableOpacity>
          );
        }}
      />
      </SafeAreaView>
    </View>
    
  )
}

export default TrackListScreen