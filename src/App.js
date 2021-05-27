import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Brands from './pages/Brands';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Switch>
        <Redirect exact path="/" to="/register" />
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/brands">
          <Brands />
        </Route>
      </Switch>
    </ChakraProvider>
  );
}

export default App;
