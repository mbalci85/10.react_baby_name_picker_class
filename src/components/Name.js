import React, { Component } from 'react';

export class Name extends Component {
	render() {
		return (
			<div style={{ display: 'inline-block' }}>
				<button style={{ border: 'none' }}>{this.props.name.name}</button>
			</div>
		);
	}
}

export default Name;
