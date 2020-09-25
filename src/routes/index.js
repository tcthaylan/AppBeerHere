import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons'

import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import Home from '../screens/Home';
import Map from '../screens/Map';

const Auth = createStackNavigator();
const AuthRoutes = () => (
  <NavigationContainer>
    <Auth.Navigator
      screenOptions={{
        headerShown: false,
        // cardStyle: {
        //   backgroundColor: '#312e38',
        // },
      }}
    >
      <Auth.Screen name="SignIn" component={SignIn} />
      <Auth.Screen name="SignUp" component={SignUp} />
    </Auth.Navigator>
  </NavigationContainer>
);

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
            iconName = focused ? 'videocam' : 'videocam';
          } else if (route.name === 'Help') {
            iconName = focused ? 'help' : 'help';
          }

          return <Icon name={iconName} size={28} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#EB8460',
        inactiveTintColor: 'gray',
        style: {
          backgroundColor: '#EAEAEB',
        }
      }}
    >
      <App.Screen name="Home" component={Home} />
      <App.Screen name="Map" component={Map} />
    </App.Navigator>
  </NavigationContainer>
);

export default AuthRoutes