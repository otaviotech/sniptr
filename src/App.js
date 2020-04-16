import React from 'react';
import AppLayout from './components/layout/AppLayout';
import SnippetsList from './pages/snippet/SnippetsList';

function App() {
  return (
    <AppLayout>
      <SnippetsList />
    </AppLayout>
  );
}

export default App;
