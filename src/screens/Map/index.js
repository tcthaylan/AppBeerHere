import React, { useEffect, useState, useRef } from 'react';
import { Text, View, StyleSheet, ScrollView, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import CardPubMaps from '../../components/CardPubMaps'
// import { Container } from './styles';
const { height, width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: '#F5FCFF',
  },
  mapView: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  placesContainer: {
    width: '100%',
    maxHeight: 200,
  },
});



const dataPlaces = [
  {
    id: 1,
    name: "Soroko's Bar",
    description: "Em ambiente sofisticado e convidativo o bar serve coquetéis chamativos entre cervejas artesanais e petiscos.",
    image: require(`../../assets/Images/pubs/1.jpg`),
    address: "R. Augusta, 550 - Consolação, São Paulo",
    latitude: -23.5515763,
    longitude: -46.6513121
  },
  {
    id: 2,
    name: "Caixote Bar",
    description: "Drinques clássicos e contemporâneos, cervejas, em espaço descolado com bar feito de engradados de cerveja.",
    image: require(`../../assets/Images/pubs/2.jpg`),
    address: "R. Augusta, 914 - Cerqueira César, São Paulo - SP",
    latitude: -23.5528978,
    longitude: -46.65451729999999
  },
  {
    id: 3,
    name: "Ball Five",
    description: "Quatro grandes mesas de bilhar são a grande atração do bar, que destoa de outras casas da rua Augusta, de estilo mais alternativo.",
    image: require(`../../assets/Images/pubs/3.jpg`),
    address: "R. Augusta, 1149 - Consolação, São Paulo - SP",
    latitude: -23.5544826,
    longitude: -46.6561399
  },
  {
    id: 4,
    name: "The Blue Pub",
    description: "Ambiente agradável e simples com partidas de futebol em telonas acompanhadas de cerveja e porções.",
    image: require(`../../assets/Images/pubs/4.jpg`),
    address: "Alameda Ribeirão Preto, 384 - Bela Vista, São Paulo - SP",
    latitude: -23.5630124,
    longitude: -46.6501524
  },
  {
    id: 5,
    name: "Asterix Cervejaria",
    description: "Cervejaria com ampla variedade de rótulos nacionais e importados, petiscos e sanduíches em ambiente despojado.",
    image: require(`../../assets/Images/pubs/5.jpg`),
    address: "Alameda Joaquim Eugênio de Lima, 573 - Jardim Paulista, São Paulo - SP",
    latitude: -23.5652345,
    longitude: -46.65019059999999
  },
  {
    id: 6,
    name: "Titus Bar",
    description: "Bar agradável e aconchegante com lista de cervejas artesanais e música ao vivo em certos dias.",
    image: require(`../../assets/Images/pubs/6.jpg`),
    address: "R. Rocha, 370 - Bela Vista, São Paulo - SP",
    latitude: -23.5595657,
    longitude: -46.6497816
  },
]


const initialRegion = {
  latitude: 37.78825,
  longitude: -122.4324,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
}

const Map = () => {
  const mapView = useRef();
  const [places, setPlaces] = useState(dataPlaces)

  useEffect(() => {
    setPlaces(places)
  }, [])

  return (
    <View style={styles.container}>
      <MapView
        ref={mapView}
        style={styles.mapView}
        initialRegion={{
          latitude: places[0].latitude,
          longitude: places[0].longitude,
          latitudeDelta: 0.0142,
          longitudeDelta: 0.0231,
        }}
        showsUserLocation={true}
      >
        {places.map(place => (
          <MapView.Marker
            ref={mark => place.mark = mark}
            title={place.name}
            // description={place.description}
            key={place.id}
            coordinate={{
              latitude: place.latitude,
              longitude: place.longitude,
            }}
          />
        ))}
      </MapView>
      <ScrollView
        style={styles.placesContainer}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(e) => {
          const place = (e.nativeEvent.contentOffset.x > 0)
            ? Math.round(e.nativeEvent.contentOffset.x / Dimensions.get('window').width)
            : 0;

          const { latitude, longitude, mark } = places[place];

          mapView.current.animateToCoordinate({
            latitude,
            longitude
          }, 500);

          mark.showCallout();
        }}
      >
        {places.map(place => (
          <CardPubMaps
            title={place.name}
            description={place.description}
            image={place.image}
          />
        ))}
      </ScrollView>
    </View>
  )
}

export default Map;