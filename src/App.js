import React, { Component } from 'react';
import NameFilter from './components/NameFilter';
import Names from './components/Names';
import names from './Names';

export class App extends Component {
	render() {
		return (
			<div style={{ marginLeft: 30, marginRight: 30, textAlign: 'center' }}>
				<h1 style={{ textAlign: 'center', marginTop: 15, fontSize: 65 }}>
					BABY NAME PICKER
				</h1>
				<NameFilter />
				<Names names={names} />
			</div>
		);
	}
}

export default App;
