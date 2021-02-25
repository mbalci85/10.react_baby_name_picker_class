import React, { Component } from 'react';
import Name from './Name';

export class Names extends Component {
	render() {
		return (
			<div>
				{console.log(this.props.names)}
				{this.props.names.map((name) => (
					<Name key={name.id} name={name} />
				))}
			</div>
		);
	}
}

export default Names;
