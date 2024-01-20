import React from 'react';
import { connect } from 'react-redux';
import { selectMovie } from '../actions';

const MovieList = ({ movies, selectMovie }) => {
    return (
        <div style={{ flex: 1 }}>
            {movies.map((movie, index) => (
                <div key={index} style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <h2>{movie.title}</h2>
                    <button onClick={() => selectMovie(movie)}>Details</button>
                </div>
            ))}
        </div>
    );
};

const mapStateToProps = (state) => {
    return { movies: state.movies };
};

export default connect(mapStateToProps, { selectMovie })(MovieList);