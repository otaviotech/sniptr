import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Card, Button, Tooltip, Popconfirm, Space } from 'antd';
import { DeleteOutlined, EditOutlined, QuestionCircleOutlined, SaveOutlined } from '@ant-design/icons';

import ProgrammingLanguageSelector from '../../ProgrammingLanguageSelector/ProgrammingLanguageSelector';
import SnippetForm from '../SnippetForm/SnippetForm';
import SnippetEditor from '../SnippetEditor/SnippetEditor';

export const COMPONENT_MODE = {
  FULL: 'FULL',
  COMPACT: 'COMPACT',
};

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
    tab: 'Edit details',
  },
];

class Snippet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: CARD_TAB.VIEW,
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
        title={this.props.snippet.name || 'Unnamed Snippet'}
        tabList={tabList}
        onTabChange={(currentTab) => this.setState({ currentTab })}
        activeTabKey={this.state.currentTab}
        tabBarExtraContent={
          <Space>
            {this.props.mode === COMPONENT_MODE.COMPACT && (
              <>
                <Tooltip title="Save">
                  <Button
                    type="primary"
                    icon={<SaveOutlined />}
                    onClick={() => this.props.onSave(this.props.snippet)}
                  />
                </Tooltip>
                <Tooltip title="Edit">
                  <Link
                    to={`snippets/${this.props.snippet.id}`}
                  >
                    <Button
                      type="default"
                      icon={<EditOutlined />}
                    />
                  </Link>
                </Tooltip>
              </>
            )}

            { !this.props.withoutDeleteButton && (
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
            )}
          </Space>
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

Snippet.defaultProps = {
  mode: COMPONENT_MODE.FULL,
  withoutDeleteButton: false,
};

Snippet.propTypes = {
  snippet: PropTypes.exact({
    id: PropTypes.string,
    name: PropTypes.string,
    body: PropTypes.string,
    programmingLanguageId: PropTypes.string,
  }).isRequired,
  mode: PropTypes.string,
  withoutDeleteButton: PropTypes.bool,
  onDelete: PropTypes.func, // eslint-disable-line
  onChange: PropTypes.func.isRequired,
  onSave: PropTypes.func, // eslint-disable-line
};

export default Snippet;
