import React from 'react';
import { Route, Switch } from 'react-router-dom';

import EmptyLayout from './EmptyLayout';
import AppLayout from './AppLayout';

function LayoutWrapper() {
  return (
    <Switch>
      <Route path="/app" component={AppLayout} />
      <Route path="/" component={EmptyLayout} />
    </Switch>
  );
}

export default LayoutWrapper;

