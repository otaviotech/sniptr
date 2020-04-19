import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from 'antd';

const SnippetForm = (props) => {
  return (
    <Form layout="vertical">
      <Form.Item label="Name: ">
        <Input
          placeholder="Print a Javascript array."
          value={props.snippet.name}
          onChange={e => props.onChangeName(e.target.value)}
        />
      </Form.Item>
    </Form>
  );
};

SnippetForm.propTypes = {
  snippet: PropTypes.exact({
    id: PropTypes.string,
    name: PropTypes.string,
    body: PropTypes.string,
    programmingLanguageId: PropTypes.string,
  }).isRequired,
  onChangeName: PropTypes.func.isRequired,
};

export default SnippetForm;
