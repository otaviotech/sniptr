/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
import React, { Suspense } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Layout } from 'antd';

const SnippetsList = React.lazy(() => import('../../pages/snippet/SnippetsList/SnippetsList'));
const SnippetEditPage = React.lazy(() => import('../../pages/snippet/SnippetEditPage/SnippetEditPage'));

const { Header, Footer, Content } = Layout;

const Loading = () => <div>Loading...</div>;

const lazyRender = (LazyComponent) => () => (
  <Suspense fallback={<Loading />}>
    <LazyComponent />
  </Suspense>
)
function AppLayout(props) {
  return (
    <Layout>
      <Header>
        <h1>
          <Link to="/">
            {'<Sniptr />'}
          </Link>
        </h1>
        <span>
          by
          <a
            href="https://github.com/otaviotech" target="_blank"
            rel="noopener noreferrer"
          >
            Otávio Araújo
          </a>
        </span>
      </Header>
      <Content>
        <Switch>
          <Route path="/app" exact render={lazyRender(SnippetsList)} />
          <Route path="/app/snippets" exact render={lazyRender(SnippetsList)} />
          <Route path="/app/snippets/:snippetId" exact render={lazyRender(SnippetEditPage)} />
          <Route render={() => <h1>404 - Not found.</h1>} />
        </Switch>
      </Content>
      <Footer />
    </Layout>
  );
}

AppLayout.propTypes = {
  children: PropTypes.object,
};

export default AppLayout;

