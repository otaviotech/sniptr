import React from 'react';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import AppLayout from './components/layout/AppLayout';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <AppLayout />
      </HashRouter>
    </Provider>
  );
}

export default App;
