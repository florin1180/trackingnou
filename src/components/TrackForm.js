import React, { useContext } from 'react'
import { Input, Button } from 'react-native-elements'
import Spacer from './Spacer'
import { Context as LocationContext } from '../context/LocationContext'
import useSaveTrack from '../hooks/useSaveTrack'
import { StyleSheet, View, TextInput } from 'react-native';


import Overlay from 'react-native-modal-overlay';


const TrackForm = () => {
  state = {
    modalVisible: true,
  }

  const { state: {
    name, recording, locations
  }, 
    startRecording,
    stopRecording,
    changeName 
  } = useContext(LocationContext)

  const [saveTrack] = useSaveTrack()

  return (
    <>
      <Spacer>
        {/* <Input placeholder="Enter name" onChangeText={changeName} value={name} placeholderTextColor="red" /> */}
        <TextInput value={name} onChangeText={changeName}
          style={{ textAlign: 'center', backgroundColor: 'orange', height: 40, width: "100%", borderColor: 'orange', borderWidth: 5,  marginBottom: 20, color:'white' }}
          // Adding hint in TextInput using Placeholder option.
          placeholder="Enter Journey Name Here"
          // Making the Under line Transparent.
          underlineColorAndroid="transparent"
          placeholderTextColor="white"
          
        />
      </Spacer>
      
      <Spacer>
        { recording 
          ? <Button title="Stop Journey" onPress={stopRecording} /> 
          : <Button title="New Journey" onPress={startRecording} /> 
        }
      </Spacer>
      <Spacer>
        { 
          !recording && locations.length
          ? <Button title="Save Journey" onPress={saveTrack}/>
          : null
        }
      </Spacer>
    </>
  )
}

export default TrackForm