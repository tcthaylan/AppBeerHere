import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';

const Auth = createStackNavigator();
const AuthRoutes = () => (
  <NavigationContainer>
    <Auth.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Auth.Screen name="SignIn" component={SignIn} />
      <Auth.Screen name="SignUp" component={SignUp} />
    </Auth.Navigator>
  </NavigationContainer>
);

export default AuthRoutes