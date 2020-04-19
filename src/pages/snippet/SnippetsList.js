import React, { Component } from 'react';
import { Row, Col, Button, Space, message } from 'antd';
import { debounce } from 'debounce';
import SnippetRepository from '../../repositories/snippet';
import SnippetEditor from '../../components/Snippet/SnippetEditor/SnippetEditor';
import SnippetList from '../../components/Snippet/SnippetList/SnippetList';

class SnippetsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      snippets: [],
      snippet: {
        id: undefined,
        name: '',
        body: '',
        programmingLanguageId: undefined,
      },
    };
  }

  componentDidMount() {
    this.fetchSnippets();
  }

  fetchSnippets = () => {
    SnippetRepository.getAll()
      .then((snippets) => {
        this.setState({ snippets });
      });
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
        id: undefined,
        body: '',
      },
    });
  };

  addSnippetHandler = () => {
    this.addSnippet(this.state.snippet);
  };

  deleteSnippetHandler = (id) => {
    SnippetRepository.delete(id)
      .then(() => {
        this.fetchSnippets();
        message.success('Snippet successfuly deleted.');
      });
  };

  updateSnippet = debounce((snippet) => { // eslint-disable-line
    SnippetRepository.update(snippet)
      .then(() => {
        message.success('Snippet successfuly saved.');
      });
  }, 1000)

  changeSnippetHandler = (changedSnippet) => {
    this.setState((prevState) => {
      const updatedSnippets = prevState.snippets.map((oldSnippet) => {
        return oldSnippet.id === changedSnippet.id
          ? changedSnippet
          : oldSnippet;
      });

      return { snippets: updatedSnippets };
    });

    this.updateSnippet(changedSnippet);
  };

  addSnippet = (snippet) => {
    SnippetRepository.create(snippet)
      .then(() => {
        this.resetSnippet();
        this.fetchSnippets();
        message.success('Snippet successfuly added.');
      });
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
