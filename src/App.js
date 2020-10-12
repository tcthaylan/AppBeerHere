import React from 'react';
import AuthRoutes from './routes/index'
import { Provider } from 'react-redux';
import { Store } from './store';

const App = () => {
  return (
    <Provider store={Store}>
      <AuthRoutes />
    </Provider>
  )
}

export default App;