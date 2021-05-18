import React, { useEffect, useContext } from 'react'
import { FlatList, TouchableOpacity, SafeAreaView, Text, StyleSheet, View, Animated, Touchable } from 'react-native'
import { ListItem } from 'react-native-elements'
import { Context as TrackContext } from '../context/TrackContext'

import Swipeable from 'react-native-gesture-handler/Swipeable'

const TrackListScreen = ({navigation}) => {
  const { state, fetchTracks } = useContext(TrackContext)

  const rightSwipe = (progress, dragX) => {
    const scale = dragX.interpolate({
      inputRange: [1, 270],
      outputRange: [0, -1],
    });
    return (
      <>
      <TouchableOpacity activeOpacity={0.7}>
        <View style={styles.deleteBox}>
          <Animated.Text style={{ transform: [{scale: scale}]}}>Delete</Animated.Text>
        </View>
      </TouchableOpacity>
    
      
      <TouchableOpacity activeOpacity={0.7}>
        <View style={styles.editBox}>
          <Animated.Text style={{ transform: [{scale: scale}]}}>Edit</Animated.Text>
        </View>
      </TouchableOpacity>
      
      
      <TouchableOpacity activeOpacity={0.7}>
        <View style={styles.viewBox}>
          <Animated.Text style={{ transform: [{scale: scale}]}}>View</Animated.Text>
        </View>
      </TouchableOpacity>

      </>
    )
    
  }



  useEffect(() => {
    const unsub = navigation.addListener('focus', () => fetchTracks())
    return unsub
  }, [navigation])
  
  return (
      <SafeAreaView style={styles.container}>
      <FlatList
        data={state}
        keyExtractor={(item) => item._id}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity 
            onPress={() =>
              navigation.navigate('Journey Details', {_id:item._id})
            }>
            <Swipeable renderRightActions={rightSwipe}>
              <ListItem>
                <ListItem.Content>
                  <ListItem.Title>{item.name}</ListItem.Title>
                </ListItem.Content>
                <ListItem.Content>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem>
              </Swipeable>
            </TouchableOpacity>
          );
        }}
      />
      </SafeAreaView>
  )
}


export default TrackListScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  separatorLine: {
    height: 1,
    backgroundColor: 'black',
  },
  button: {
    flex: 1,
    margin: 10,
    marginTop: 30,
    padding: 30,
  },
  deleteBox: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: '100%',
  },
  editBox: {
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: '100%',
  },
  viewBox: {
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: '100%',
  }
});