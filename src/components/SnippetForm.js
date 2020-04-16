import React from 'react';
import { Row, Col, Input } from 'antd';
import PropTypes from 'prop-types';

const { TextArea } = Input;

const SnippetForm = (props) => {
  const { snippet, onChangeBody } = props;

  return (
    <Row>
      <Col xs={24}>
        <TextArea
          ref={props.inputRef}
          value={snippet.body}
          defaultValue={snippet.body}
          placeholder="Your awesome snippet!"
          onChange={onChangeBody}
        />
      </Col>
    </Row>
  );
};

SnippetForm.propTypes = {
  inputRef: PropTypes.object,
  snippet: PropTypes.exact({
    id: PropTypes.number,
    body: PropTypes.string.isRequired,
  }).isRequired,
  onChangeBody: PropTypes.func.isRequired,
};

export default SnippetForm;
