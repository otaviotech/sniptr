import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, Button, Tooltip, Popconfirm } from 'antd';
import { DeleteOutlined, QuestionCircleOutlined } from '@ant-design/icons';

import SnippetEditor from './SnippetEditor';

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
      currentTab: CARD_TAB.VIEW,
    };
  }


  shouldComponentUpdate(nextProps, nextState) {
    return [
      nextProps.snippet.body !== this.props.snippet.body,
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

  render() {
    return (
      <Card
        title={`Snippet ${this.props.snippet.id}`}
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
        <SnippetEditor
          value={this.props.snippet.body}
          onChange={this.onChangeBodyHandler}
          placeholder="Your <Awesome /> snippet."
        />
      </Card>
    );
  }
}

Snippet.propTypes = {
  snippet: PropTypes.exact({
    id: PropTypes.string,
    body: PropTypes.string,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Snippet;
