import React, { Component } from 'react';
import { Row, Col, Button, Space, message } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import SnippetEditor from '../../components/SnippetEditor/SnippetEditor';
import SnippetList from '../../components/SnippetList/SnippetList';

class SnippetsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      snippets: new Array(10)
        .fill()
        .map((x, i) => ({
          id: uuidv4(),
          body:
          'function greet' + i + ' (name) {\n  return `Hello, ${name}.`;\n}', // eslint-disable-line
        })),

      snippet: {
        id: uuidv4(),
        body: '',
      },
    };
    this.snippetInput = React.createRef();
  }

  onChangeBody = (body) => {
    this.setState((prevState) => ({
      snippet: {
        ...prevState.snippet,
        body,
      },
    }));
  };

  resetSnippet = () => {
    this.setState({
      snippet: {
        id: uuidv4(),
        body: '',
      },
    });
  };

  addSnippetHandler = () => {
    this.addSnippet(this.state.snippet);
  };

  deleteSnippetHandler = (id) => {
    this.setState((prevState) => ({
      snippets: prevState.snippets.filter((s) => s.id !== id),
    }));

    message.success('Snippet successfuly deleted.');
  };

  changeSnippetHandler = (changedSnippet) => {
    this.setState(
      (prevState) => ({
        snippets: prevState.snippets.map((snippet) => {
          if (snippet.id !== changedSnippet.id) {
            return snippet;
          }

          return changedSnippet;
        }),
      }),
      () => {
        this.resetSnippet();
        message.success('Snippet successfuly saved.');
      },
    );
  };

  addSnippet = (snippet) => {
    this.setState((prevState) => ({
      snippets: [snippet, ...prevState.snippets],
    }));

    this.resetSnippet();

    message.success('Snippet successfuly added.');
  };

  render() {
    const isAddButtonDisabled = this.state.snippet.body.length === 0;

    return (
      <Space direction="vertical" style={{ width: '100%' }}>
        <Row gutter={16}>
          <Col>
            <h1>SnippetsList</h1>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col xs={24}>
            <SnippetEditor
              value={this.state.snippet.body}
              onChange={this.onChangeBody}
              placeholder="Your <Awesome /> snippet..."
            />
          </Col>
        </Row>

        <Row justify="end">
          <Col>
            <Button
              type="primary"
              onClick={
                this.state.isEditingSnippet
                  ? this.saveSnippetHandler
                  : this.addSnippetHandler
              }
              disabled={isAddButtonDisabled}
            >
              {this.state.isEditingSnippet ? 'Save' : 'Add'} snippet!
            </Button>
          </Col>
        </Row>

        <section>
          <Row>
            <Col>
              <h1>Your snippets</h1>
            </Col>
          </Row>
          <SnippetList
            snippets={this.state.snippets}
            onChangeSnippet={this.changeSnippetHandler}
            onDelete={this.deleteSnippetHandler}
          />
        </section>
      </Space>
    );
  }
}

export default SnippetsList;
