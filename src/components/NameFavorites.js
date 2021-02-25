import React, { Component } from 'react';
import NameFavorite from './NameFavorite';

export class NameFavorites extends Component {
	render() {
		return (
			<div>
				<h2 style={{ color: 'lightgray' }}>
					<span>Favorite Names : </span>
				</h2>
				{this.props.favoriteNames.length === 0 ? (
					<h2 style={{ color: 'lightgray' }}>
						Click the Names to Select Your Favorite Names
					</h2>
				) : (
					this.props.favoriteNames.map((favoriteName) => (
						<NameFavorite
							key={favoriteName.id}
							favoriteName={favoriteName}
							removeFromFavorites={this.props.removeFromFavorites}
						/>
					))
				)}
			</div>
		);
	}
}

export default NameFavorites;
