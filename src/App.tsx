import React from 'react';
import { QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { Root } from 'containers';
import { queryClient } from 'services';
import store from 'store';
import { theme, ThemeProvider } from 'styles';

const App = () => (
  <Provider store={ store }>
    <ThemeProvider theme={ theme }>
      <Router>
        <QueryClientProvider client={queryClient}>
          <Root/>
        </QueryClientProvider>
      </Router>
    </ThemeProvider>
  </Provider>
);

export default App;
