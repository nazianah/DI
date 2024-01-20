import React from 'react';
import Card from './Card';
import './Parent.css';
const Parent = () => (
    <div className="parent">
        <Card icon="🔵" label="Points" number={3000} />
        <Card icon="🐍" label="Snakes" number={5000} />
        <Card icon="⚡" label="Lightning" number={10000} />
        <Card icon="💎" label="Diamond" number={1000} />
    </div>
);

export default Parent;