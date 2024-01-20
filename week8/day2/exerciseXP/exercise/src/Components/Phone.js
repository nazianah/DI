import React, { useState } from 'react';

function Phone() {
    const [phoneInfo, setPhoneInfo] = useState({
        brand: 'Samsung',
        model: 'Galaxy S20',
        color: 'black',
        year: 2020,
    });

    const changeColor = () => {
        setPhoneInfo({ ...phoneInfo, color: 'blue' });
    };

    return (
        <div>
            <h1>My phone is {phoneInfo.brand}</h1>
            <h4>It is of {phoneInfo.color} color and {phoneInfo.year} year</h4>
            <button onClick={changeColor}>Change Color</button>
        </div>
    );
}

export default Phone;
