import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { MapView } from 'react-native-maps'
// import { Container } from './styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  map: {
    flex: 1,
    width: '300px',
    height: '100px'
  },
});

const Map = () => {
  return (
    <View style={styles.container}>

      {/* <MapView
          style={styles.map}
          loadingEnabled={true}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        /> */}
      <Image styles={styles.map} source={require('../../assets/Images/map.png')} />

    </View>
  )
}

export default Map;