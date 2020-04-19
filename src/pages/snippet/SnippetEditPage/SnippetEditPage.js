import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Row, Col, Space, Button, message } from 'antd';
import { SaveOutlined } from '@ant-design/icons';
import { debounce } from 'debounce';

import SnippetRepository from '../../../repositories/snippet';
import Snippet from '../../../components/Snippet/Snippet/Snippet';

class SnippetEditPage extends Component {
  state = {
    isFetchingSnippet: false,
    snippet: undefined,
  }

  componentDidMount() {
    const { snippetId } = this.props.match.params;
    this.fetchSnippet(snippetId);
  }

  fetchSnippet = (snippetId) => {
    this.setState({ isFetchingSnippet: true });

    SnippetRepository.get(snippetId)
      .then((snippet) => {
        this.setState({
          snippet,
          isFetchingSnippet: false,
        });
      });
  }

  redirectToListingPage = () => {
    this.props.history.replace('/snippets');
  }

  deleteSnippetHandler = () => {
    const { snippetId } = this.props.match.params;

    SnippetRepository.delete(snippetId)
      .then(() => {
        message.success('Snippet successfuly deleted.');
        this.redirectToListingPage();
      });
  };

  changeSnippetHandler = (snippet) => {
    this.setState({ snippet });
  }

  saveSnippetHandler = debounce(() => { // eslint-disable-line
    SnippetRepository.update(this.state.snippet)
      .then(() => {
        message.success('Snippet successfuly saved.');
      });
  }, 300)

  render() {
    return (
      <Space direction="vertical" style={{ width: '100%' }}>
        {!this.state.isFetchingSnippet && !!this.state.snippet && (
          <Snippet
            snippet={this.state.snippet}
            onDelete={this.deleteSnippetHandler}
            onChange={this.changeSnippetHandler}
          />
        )}
        <Row justify="end">
          <Col>
            <Button
              onClick={this.saveSnippetHandler}
              icon={<SaveOutlined />}
              type="primary"
            >
              Save
            </Button>
          </Col>
        </Row>
      </Space>
    );
  }
}

export default withRouter(SnippetEditPage);
