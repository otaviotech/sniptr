/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
import React from 'react';
import { Layout } from 'antd';
import PropTypes from 'prop-types';

const { Header, Footer, Content } = Layout;

export default function AppLayout(props) {
  return (
    <Layout>
      <Header>
        <h1>{'<Sniptr />'}</h1>
      </Header>
      <Content>{props.children}</Content>
      <Footer />
    </Layout>
  );
}

AppLayout.propTypes = {
  children: PropTypes.object,
};
