import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Home from '../screens/Home';
import Map from '../screens/Map';
import Pub from '../screens/Pub';

const Stack = createStackNavigator()

const HomeScreens = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false
    }}
  >
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Pub" component={Pub} />
  </Stack.Navigator >
)

const App = createBottomTabNavigator();
const AppRoutes = () => (
  <NavigationContainer>
    <App.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Map') {
            iconName = focused ? 'map' : 'map';
          } else if (route.name === 'Help') {
            iconName = focused ? 'help' : 'help';
          }

          return <Icon name={iconName} size={28} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#DEA82A',
        inactiveTintColor: 'gray',
        labelStyle: {
          fontSize: 14
        },
        style: {
          backgroundColor: '#fff',
        }
      }}
    >
      <App.Screen name="Home" component={HomeScreens} />
      <App.Screen name="Map" component={Map} />
    </App.Navigator>
  </NavigationContainer>
);



export default AppRoutes