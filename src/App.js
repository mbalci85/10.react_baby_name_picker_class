import React, { Component } from 'react';
import Names from './components/Names';
import names from './Names';

export class App extends Component {
	render() {
		return (
			<div>
				<h1 style={{ textAlign: 'center', marginTop: 15, fontSize: 65 }}>
					BABY NAME PICKER
				</h1>
				<Names names={this.names} />
			</div>
		);
	}
}

export default App;
