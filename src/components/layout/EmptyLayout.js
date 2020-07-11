/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';

const AuthPage = React.lazy(() => import('../../pages/Auth/AuthPage'));

const { Content } = Layout;

const Loading = () => <div>Loading...</div>;

const lazyRender = (LazyComponent) => () => (
  <Suspense fallback={<Loading />}>
    <LazyComponent />
  </Suspense>
);

function EmptyLayout() {
  return (
    <Layout>
      <Content>
        <Switch>
          <Route path="/" exact render={lazyRender(AuthPage)} />
          <Route path="/signup" exact render={lazyRender(AuthPage)} />
          <Route path="/login" exact render={lazyRender(AuthPage)} />
        </Switch>
      </Content>
    </Layout>
  );
}

export default EmptyLayout;

