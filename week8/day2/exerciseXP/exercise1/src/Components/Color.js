import React, { useState, useEffect } from 'react';

const Color = () => {
    const [favoriteColor, setFavoriteColor] = useState('red');

    useEffect(() => {
        const timer = setTimeout(() => {
            setFavoriteColor('yellow');
            alert('useEffect reached');
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    const changeColor = () => {
        setFavoriteColor('blue');
    };

    return (
        <div>
            <h1>My favorite Color is {favoriteColor}</h1>
            <button onClick={changeColor}>Change Color</button>
        </div>
    );
};

export default Color;
