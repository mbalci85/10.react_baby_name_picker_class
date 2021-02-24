import React, { Component } from 'react';

export class Name extends Component {
	render() {
		return (
			<div>
				<button>{this.props.name.name}</button>
			</div>
		);
	}
}

export default Name;
