import React, { Component } from 'react';
import NameFilter from './components/NameFilter';
import Names from './components/Names';
import allNames from './Names';

export class App extends Component {
	state = {
		names: allNames,
	};
	filterAll = () => {
		this.setState({
			names: allNames,
		});
	};

	filterBoys = () => {
		this.setState({
			names: allNames.filter((name) => name.sex === 'm'),
		});
	};

	filterGirls = () => {
		this.setState({
			names: allNames.filter((name) => name.sex === 'f'),
		});
	};

	render() {
		return (
			<div style={{ marginLeft: 30, marginRight: 30, textAlign: 'center' }}>
				<h1 style={{ textAlign: 'center', marginTop: 15, fontSize: 65 }}>
					BABY NAME PICKER
				</h1>
				<NameFilter
					filterAll={this.filterAll}
					filterBoys={this.filterBoys}
					filterGirls={this.filterGirls}
				/>
				<Names names={this.state.names} />
			</div>
		);
	}
}

export default App;
