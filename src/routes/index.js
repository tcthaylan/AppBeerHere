import React from 'react'
import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

const Routes = () => {
  const loading = false
  const user = true
  // if (loading) {
  //   return (
  //     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  //       <ActivityIndicator size="large" color="#999" />
  //     </View>
  //   );
  // }

  return user ? <AppRoutes /> : <AuthRoutes />
};

export default Routes;