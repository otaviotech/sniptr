import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, Button, Tooltip, Popconfirm } from 'antd';
import { DeleteOutlined, QuestionCircleOutlined } from '@ant-design/icons';

import ProgrammingLanguageSelector from '../ProgrammingLanguageSelector/ProgrammingLanguageSelector';
import SnippetForm from '../SnippetForm/SnippetForm';
import SnippetEditor from '../SnippetEditor/SnippetEditor';

const CARD_TAB = {
  VIEW: 'VIEW',
  EDIT: 'EDIT',
};

const tabList = [
  {
    key: CARD_TAB.VIEW,
    tab: 'View',
  },
  {
    key: CARD_TAB.EDIT,
    tab: 'Edit',
  },
];

class Snippet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: CARD_TAB.EDIT,
    };
  }


  shouldComponentUpdate(nextProps, nextState) {
    return [
      nextProps.snippet.body !== this.props.snippet.body,
      nextProps.snippet.programmingLanguageId !== this.props.snippet.programmingLanguageId,
      nextProps.snippet.name !== this.props.snippet.name,
      nextState.currentTab !== this.state.currentTab,
    ].some(condition => condition === true);
  }

  onChangeBodyHandler = (body) => {
    if (body === this.props.snippet.body) {
      return;
    }

    this.props.onChange({
      ...this.props.snippet,
      body,
    });
  }

  onChangeProgrammingLanguageHandler = (programmingLanguageId) => {
    if (programmingLanguageId === this.props.snippet.programmingLanguageId) {
      return;
    }

    this.props.onChange({
      ...this.props.snippet,
      programmingLanguageId,
    });
  }

  onChangeNameHandler = (name) => {
    if (name === this.props.snippet.name) {
      return;
    }

    this.props.onChange({
      ...this.props.snippet,
      name,
    });
  }

  render() {
    return (
      <Card
        title={this.props.snippet.name || `Snippet ${this.props.snippet.id}`}
        tabList={tabList}
        onTabChange={(currentTab) => this.setState({ currentTab })}
        activeTabKey={this.state.currentTab}
        tabBarExtraContent={
          <Tooltip title="Delete">
            <Popconfirm
              placement="topLeft"
              title="Are you sure？"
              icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
              onConfirm={this.props.onDelete}
            >
              <Button type="danger" icon={<DeleteOutlined />} />
            </Popconfirm>
          </Tooltip>
        }
      >
        {this.state.currentTab === CARD_TAB.VIEW && (
          <SnippetEditor
            value={this.props.snippet.body}
            onChange={this.onChangeBodyHandler}
            debounceDelay={800}
            placeholder="Your <Awesome /> snippet."
          />
        )}

        {this.state.currentTab === CARD_TAB.EDIT && (
          <>
            <SnippetForm
              snippet={this.props.snippet}
              onChangeName={this.onChangeNameHandler}
            />
            <ProgrammingLanguageSelector
              programmingLanguageId={this.props.snippet.programmingLanguageId}
              onChange={this.onChangeProgrammingLanguageHandler}
            />
          </>
        )}
      </Card>
    );
  }
}

Snippet.propTypes = {
  snippet: PropTypes.exact({
    id: PropTypes.string,
    name: PropTypes.string,
    body: PropTypes.string,
    programmingLanguageId: PropTypes.string,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Snippet;
