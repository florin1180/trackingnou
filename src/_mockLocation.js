import * as Location from 'expo-location'

const tenMetersWithDegrees = 0.001

const getLocation = increment => {
  return {
    timestamp: 10000000,
    coords: {
      speed: 0,
      heading: 0,
      accuracy: 5,
      altitudeAccuracy: 5,
      altitude: 5,
      longitude: 45.152838909334314 + increment * tenMetersWithDegrees,
      latitude: 26.816918849945072 + increment * tenMetersWithDegrees,
    }
  }
}

let counter = 0

setInterval(() => {
  Location.EventEmitter.emit('Expo.locationChanged', {
    watchId: Location._getCurrentWatchId(),
    location: getLocation(counter)
  })

  counter++
}, 2000)