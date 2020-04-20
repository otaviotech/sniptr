import React from 'react';
import { HashRouter } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';

function App() {
  return (
		<HashRouter>
			<AppLayout />
		</HashRouter>
  );
}

export default App;
