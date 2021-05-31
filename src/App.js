import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Brands from './pages/User/UserDashboard';
import BrandDashboard from './pages/Brand/BrandDashboard';
import store, { persistor } from './store';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Switch>
            <Redirect exact path="/" to="/register" />
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route exact path="/brands">
              <Brands />
            </Route>
            <Route path="/dashboard">
              <BrandDashboard />
            </Route>
          </Switch>
        </PersistGate>
      </Provider>
    </ChakraProvider>
  );
}

export default App;
