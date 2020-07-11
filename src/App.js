import React from 'react';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import LayoutWrapper from './components/layout/LayoutWrapper';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <LayoutWrapper />
      </HashRouter>
    </Provider>
  );
}

export default App;
