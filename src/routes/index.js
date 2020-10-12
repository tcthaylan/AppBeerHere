import React from 'react'
import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';
import { useSelector } from 'react-redux';

const Routes = () => {
  const signed = useSelector(state => state.auth.token);
  // if (loading) {
  //   return (
  //     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  //       <ActivityIndicator size="large" color="#999" />
  //     </View>
  //   );
  // }

  return signed.length ? <AppRoutes /> : <AuthRoutes />
};

export default Routes;