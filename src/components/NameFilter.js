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
					onClick={this.props.filterAll}
				>
					All
				</button>
				<button
					style={{
						border: 'none',
						padding: 7,
						borderRadius: 10,
						margin: 2,
						backgroundColor: 'lightblue',
					}}
					onClick={this.props.filterBoys}
				>
					Boys
				</button>
				<button
					style={{
						border: 'none',
						padding: 7,
						borderRadius: 10,
						margin: 2,
						backgroundColor: 'lightpink',
					}}
				>
					Girls
				</button>
			</div>
		);
	}
}

export default NameFilter;
