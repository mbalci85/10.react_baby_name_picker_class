import React, { Component } from 'react';
import Name from './Name';

export class Names extends Component {
	render() {
		return (
			<div
				style={{
					padding: 20,
					borderRight: 'solid 5px lightpink',
					borderBottom: 'solid 5px lightpink',
					borderTop: 'solid 5px lightblue',
					borderLeft: 'solid 5px lightblue',
					borderRadius: 10,
				}}
			>
				{console.log(this.props.names)}
				{this.props.names.map((name) => (
					<Name key={name.id} name={name} />
				))}
			</div>
		);
	}
}

export default Names;
