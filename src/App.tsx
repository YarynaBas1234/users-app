import React from 'react';
import { QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { Root } from 'containers';
import { queryClient } from 'services';
import store from 'store';
import { theme, ThemeProvider, GlobalStyles, styled } from 'styles';

const WrapperRoot = styled.div`
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
`;

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Router>
        <QueryClientProvider client={queryClient}>
          <GlobalStyles />
          <WrapperRoot>
            <Root />
          </WrapperRoot>
        </QueryClientProvider>
      </Router>
    </ThemeProvider>
  </Provider>
);

export default App;
