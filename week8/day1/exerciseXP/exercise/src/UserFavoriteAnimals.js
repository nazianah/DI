import React from 'react';

class UserFavoriteAnimals extends React.Component {
    render() {
        const { favoriteAnimals } = this.props;
        return (
            <ul>
                {favoriteAnimals.map((animal, index) => (
                    <li key={index}>{animal}</li>
                ))} 
                
            </ul>
        );
    }
}

export default UserFavoriteAnimals;