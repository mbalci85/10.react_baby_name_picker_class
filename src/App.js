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
	filterName = (e) => {
		this.setState({
			names: allNames.filter((name) =>
				name.name.toLowerCase().includes(e.target.value.toLowerCase()),
			),
		});
	};

	render() {
		return (
			<div style={{ marginLeft: 30, marginRight: 30, textAlign: 'center' }}>
				<h1
					style={{
						textAlign: 'center',
						marginTop: 15,
						fontSize: 65,
						fontWeight: 'bolder',
					}}
				>
					<span style={{ color: 'lightpink' }}>BABY</span>{' '}
					<span style={{ color: 'lightblue' }}>NAME</span>{' '}
					<span style={{ color: 'lightgray' }}>PICKER</span>
				</h1>
				<NameFilter
					filterAll={this.filterAll}
					filterBoys={this.filterBoys}
					filterGirls={this.filterGirls}
					filterName={this.filterName}
				/>
				<Names names={this.state.names} />
			</div>
		);
	}
}

export default App;
