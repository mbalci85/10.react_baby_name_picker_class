import React, { Component } from 'react';
import NameFavorite from './components/NameFavorite';
import NameFilter from './components/NameFilter';
import Names from './components/Names';
import allNames from './Names';

export class App extends Component {
	state = {
		names: allNames,
		borderGirl: false,
		borderBoy: false,
	};
	filterAll = () => {
		this.setState({
			names: allNames,
			borderGirl: false,
			borderBoy: false,
		});
	};

	filterBoys = () => {
		this.setState({
			names: allNames.filter((name) => name.sex === 'm'),
			borderBoy: true,
			borderGirl: false,
		});
	};

	filterGirls = () => {
		this.setState({
			names: allNames.filter((name) => name.sex === 'f'),
			borderBoy: false,
			borderGirl: true,
		});
		setTimeout(() => {
			console.log(this.state);
		}, 2000);
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
				<NameFavorite />
				<Names
					names={this.state.names}
					borderBoy={this.state.borderBoy}
					borderGirl={this.state.borderGirl}
				/>
			</div>
		);
	}
}

export default App;
