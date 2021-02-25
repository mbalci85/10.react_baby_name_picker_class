import React, { Component } from 'react';

export class NameFilter extends Component {
	render() {
		return (
			<div style={{ marginBottom: 30 }}>
				<input
					placeholder="Type to filter names...."
					style={{ width: 400 }}
				/>
				<button
					style={{
						border: 'none',
						padding: 7,
						borderRadius: 10,
						margin: 2,
					}}
				>
					All
				</button>
				<button
					style={{
						border: 'none',
						padding: 7,
						borderRadius: 10,
						margin: 2,
					}}
				>
					Boys
				</button>
				<button
					style={{
						border: 'none',
						padding: 7,
						borderRadius: 10,
						margin: 2,
					}}
				>
					Girls
				</button>
			</div>
		);
	}
}

export default NameFilter;
