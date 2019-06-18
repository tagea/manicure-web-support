import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
// Create Material UI Theme
import { MuiThemeProvider } from '@material-ui/core/styles';

import path from 'path';
import { routes } from './src/routes';

import { configureStore } from './src/createStore';
import { theme } from './src/ui/Themes';
import { GlobalStyle } from './src/globalStyled';

export const store = configureStore();
export const history = createBrowserHistory();

const App = () => (
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <GlobalStyle />
      <HashRouter>
        <Switch>
          {routes.map((route, index) => (
            <Route key={index} {...route} />
          ))}
        </Switch>
      </HashRouter>
    </MuiThemeProvider>
  </Provider>
);

const render = (Component) => {
  ReactDOM.render(
    <AppContainer warnings={false}>
      <Component />
    </AppContainer>,
    document.getElementById('root') || document.createElement('div')
  );
};

render(App);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept(path.resolve(__dirname, './src'), () => {
    render(App);
  });
}
