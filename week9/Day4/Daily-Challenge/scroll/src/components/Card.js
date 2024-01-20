import React from 'react';
import './Card.css';
const Card = ({ icon, label, number }) => (
    <div className="card">
        <div className="icon">{icon}</div>
        <div className="label">{label}</div>
        <div className="number">{number}</div>
    </div>
);

export default Card;