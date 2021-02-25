import React, { Component } from 'react';
import NameFavorite from './NameFavorite';

export class NameFavorites extends Component {
	render() {
		return (
			<div>
				<h2>
					<span>Favorite Names:</span>

					{this.props.favoriteNames.length === 0 ? (
						<span>Click the Names to Select Your Favorite Names</span>
					) : (
						this.props.favoriteNames.map((favoriteName) => (
							<NameFavorite
								key={favoriteName.id}
								favoriteName={favoriteName}
								removeFromFavorites={this.props.removeFromFavorites}
							/>
						))
					)}
				</h2>
			</div>
		);
	}
}

export default NameFavorites;
