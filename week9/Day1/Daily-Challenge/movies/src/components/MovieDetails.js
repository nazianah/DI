import React from 'react';
import { connect } from 'react-redux';

const MovieDetails = ({ movie }) => {
    if (!movie) {
        return <div>Select a movie...</div>;
    }

    return (
        <div>
            <h2>{movie.title}</h2>
            <p>Release Date: {movie.releaseDate}</p>
            <p>Rating: {movie.rating}</p>
        </div>
    );
};

const mapStateToProps = (state) => {
    return { movie: state.selectedMovie };
};

export default connect(mapStateToProps)(MovieDetails);