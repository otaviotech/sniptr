import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import Snippet from '../Snippet/Snippet';

function SnippetList(props) {
  return (
    <Row gutter={[24, 24]}>
      {props.snippets.map((snippet) => (
        <Col xs={24} sm={24} md={12} xxl={6} key={snippet.id}>
          <Snippet
            snippet={snippet}
            onDelete={() => props.onDelete(snippet.id)}
            onChange={props.onChangeSnippet}
          />
        </Col>
      ))}
    </Row>
  );
}

SnippetList.propTypes = {
  snippets: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      name: PropTypes.string,
      body: PropTypes.string.isRequired,
      programmingLanguageId: PropTypes.string,
    }),
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
  onChangeSnippet: PropTypes.func.isRequired,
};

export default SnippetList;
