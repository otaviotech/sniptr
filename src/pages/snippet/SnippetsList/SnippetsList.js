import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Button, Space, Spin, message } from 'antd';
import { debounce } from 'debounce';
import SnippetEditor from '../../../components/Snippet/SnippetEditor/SnippetEditor';
import SnippetList from '../../../components/Snippet/SnippetList/SnippetList';
import { setLoading, fetchSnippets, updateSnippet, createSnippet, deleteSnippet } from '../../../store/modules/snippet/actions';

const getEmptySnippet = () => ({
  id: undefined,
  name: '',
  body: '',
  programmingLanguageId: undefined,
});

class SnippetsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetchingSnippets: false,
      snippet: getEmptySnippet(),
    };
  }

  componentDidMount() {
    this.fetchSnippets();
  }

  fetchSnippets = () => {
    const { fetchSnippets, setLoading } = this.props;

    setLoading(true);

    fetchSnippets()
      .finally(() => {
        setLoading(false);
      });
  }

  onChangeBody = (body) => {
    this.setState((prevState) => ({
      snippet: getEmptySnippet(),
    }));
  };

  resetSnippet = () => {
    this.setState({
      snippet: getEmptySnippet(),
    });
  };

  addSnippetHandler = () => {
    this.addSnippet(this.state.snippet);
  };

  deleteSnippetHandler = (id) => {
    const { deleteSnippet } = this.props;
    const { fetchSnippets } = this;

    deleteSnippet(id)
      .then((result) => {
        if (result.error) {
          message.error('Ops, something went wrong.');
          return;
        }

        fetchSnippets();
        message.success('Snippet successfuly deleted.');
      });
  };

  updateSnippet = debounce((snippet) => { // eslint-disable-line
    const { updateSnippet } = this.props;

    updateSnippet(snippet)
      .then((result) => {
        if (result.error) {
          message.error('Ops, something went wrong. Try again later.');
          return;
        }

        message.success('Snippet successfuly saved.');
      });
  }, 1000)

  changeSnippetHandler = (changedSnippet) => {
    this.updateSnippet(changedSnippet);
  };

  addSnippet = (snippet) => {
    const { createSnippet, fetchSnippets } = this.props;
    const { resetSnippet } = this;

    createSnippet(snippet)
      .then((result) => {
        if (result.error) {
          message.error('Ops, something went wrong. Try again later.');
          return;
        }

        resetSnippet();
        message.success('Snippet successfuly added.');
        fetchSnippets();
      });
  };

  render() {
    const isAddButtonDisabled = this.state.snippet.body.length === 0;

    const loadingMessage = this.props.loading
      ? (
        <Row justify="center">
          <Col>
            <Spin size="large" tip="Loading your snippets" style={{ margin: '50px auto' }} />
          </Col>
        </Row>
      )
      : null;

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
              onClick={this.addSnippetHandler}
              disabled={isAddButtonDisabled}
            >
              Add snippet!
            </Button>
          </Col>
        </Row>

        <section>
          <Row>
            <Col span={24}>
              <h1>Your snippets</h1>
              {loadingMessage}
            </Col>
          </Row>
          <SnippetList
            snippets={this.props.snippets}
            onChangeSnippet={this.changeSnippetHandler}
            onDelete={this.deleteSnippetHandler}
          />
        </section>
      </Space>
    );
  }
}

const mapStateToProps = (state) => ({
  snippets: state.snippet.snippets,
  loading: state.snippet.loading,
});

const mapDispatchToProps = (dispatch) => ({
  setLoading: (loading) => dispatch(setLoading(loading)),
  fetchSnippets: () => dispatch(fetchSnippets()),
  createSnippet: (snippet) => dispatch(createSnippet(snippet)),
  updateSnippet: (snippet) => dispatch(updateSnippet(snippet)),
  deleteSnippet: (snippetId) => dispatch(deleteSnippet(snippetId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SnippetsList);
