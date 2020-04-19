import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';

function App() {
  return (
		<BrowserRouter basename={process.env.PUBLIC_URL}>
			<AppLayout />
		</BrowserRouter>
  );
}

export default App;
