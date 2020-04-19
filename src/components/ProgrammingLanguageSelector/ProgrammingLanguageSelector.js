import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Menu, Dropdown, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import ProgrammingLanguageRepository from '../../repositories/programmingLanguage';

class ProgrammingLanguageSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      programmingLanguages: [],
      isFetchingProgrammingLanguages: false,
    };
  }

  componentDidMount() {
    this.fetchProgrammingLanguages();
  }

	fetchProgrammingLanguages = () => {
	  this.setState({ isFetchingProgrammingLanguages: true });

	  ProgrammingLanguageRepository
	    .getAll()
	    .then((programmingLanguages) => {
	      this.setState({ programmingLanguages });
	      this.setState({ isFetchingProgrammingLanguages: false });
	    });
	}

	renderLanguagesMenu = () => (
    <Menu onClick={({ key }) => this.props.onChange(key)}>
			{this.state.programmingLanguages.map((pl) => (
				<Menu.Item key={pl.id}>
					{pl.name}
				</Menu.Item>
			))}
		</Menu>
	)

	render() {
	  const loaderIcon = <LoadingOutlined spin />;
	  const loader = <Spin indicator={loaderIcon} />;

	  if (this.state.isFetchingProgrammingLanguages) return loader;

	  const hasProgrammingLanguages = this.state.programmingLanguages.length > 0;
	  const hasLanguageSelected = !!this.props.programmingLanguageId;

	  const selectedLanguageName = (hasProgrammingLanguages && hasLanguageSelected)
	    ? this.state.programmingLanguages.find(pl => pl.id === this.props.programmingLanguageId).name
	    : 'Language...';

	  const selectedLanguageFileExtension = (hasProgrammingLanguages && hasLanguageSelected)
	    ? this.state.programmingLanguages.find(pl => pl.id === this.props.programmingLanguageId).fileExtensions[0]
	    : '.ext';

	  return (
			<Dropdown.Button
				overlay={this.renderLanguagesMenu()}
        icon={<span>{selectedLanguageFileExtension}</span>}
			>
        {selectedLanguageName}
			</Dropdown.Button>
	  );
	}
}

ProgrammingLanguageSelector.propTypes = {
  programmingLanguageId: PropTypes.string, // eslint-disable-line
  onChange: PropTypes.func.isRequired,
};


export default ProgrammingLanguageSelector;
