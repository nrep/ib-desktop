import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Sales from './pages/sales';

export default function App() {
  return (
    <ChakraProvider>
      <Router>
        <Switch>
          <Route path="/" component={Sales} />
        </Switch>
      </Router>
    </ChakraProvider>
  );
}
