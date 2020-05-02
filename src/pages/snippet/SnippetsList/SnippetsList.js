import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Row, Col, Button, Space, Spin, message } from 'antd';
import { debounce } from 'debounce';
import SnippetList from '../../../components/Snippet/SnippetList/SnippetList';
import Snippet from '../../../components/Snippet/Snippet/Snippet';
import * as actionCreators from '../../../store/modules/snippet/actions';

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
      snippet: {
        ...prevState.snippet,
        body,
      },
    }));
  };

  resetSnippet = () => {
    this.setState({
      snippet: getEmptySnippet(),
    });
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

  saveSnippet = debounce((snippet) => { // eslint-disable-line
    const { updateSnippet } = this.props;

    updateSnippet(snippet)
      .then((result) => {
        if (result.error) {
          message.error('Ops, something went wrong. Try again later.');
          return;
        }

        message.success('Snippet successfuly saved.');
      });
  }, 500)

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
        <Spin
          size="large"
          tip="Loading your snippets"
          style={{ textAlign: 'center', width: '100%', margin: '20px 0' }}
        />
      ) : null;

    return (
      <Space direction="vertical" style={{ width: '100%' }}>
        <Row gutter={16}>
          <Col>
            <h1>SnippetsList</h1>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col xs={24}>
            <Snippet
              withoutDeleteButton
              snippet={this.state.snippet}
              onChange={(snippet) => this.setState({ snippet })}
            />
          </Col>
        </Row>

        <Row justify="end">
          <Col>
            <Button
              type="primary"
              onClick={() => this.addSnippet(this.state.snippet)}
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
            onChangeSnippet={this.props.setUpdatedSnippet}
            onDelete={this.deleteSnippetHandler}
            onSaveSnippet={this.saveSnippet}
          />
        </section>
      </Space>
    );
  }
}

SnippetsList.propTypes = {
  snippets: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
  setLoading: PropTypes.func.isRequired,
  setUpdatedSnippet: PropTypes.func.isRequired,
  createSnippet: PropTypes.func.isRequired,
  fetchSnippets: PropTypes.func.isRequired,
  updateSnippet: PropTypes.func.isRequired,
  deleteSnippet: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  snippets: state.snippet.snippets,
  loading: state.snippet.loading,
});

const mapDispatchToProps = (dispatch) => ({
  setLoading: (loading) => dispatch(actionCreators.setLoading(loading)),
  fetchSnippets: () => dispatch(actionCreators.fetchSnippets()),
  setUpdatedSnippet: (snippet) => dispatch(actionCreators.setUpdatedSnippet(snippet)),
  createSnippet: (snippet) => dispatch(actionCreators.createSnippet(snippet)),
  updateSnippet: (snippet) => dispatch(actionCreators.updateSnippet(snippet)),
  deleteSnippet: (snippetId) => dispatch(actionCreators.deleteSnippet(snippetId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SnippetsList);
