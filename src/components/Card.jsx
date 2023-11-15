import React, { useState } from 'react';
import './Card.css';

const Card = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div>
            <button type="button" className="button" onClick={toggleDarkMode}>Toggle Dark Mode</button>
            <div className={`card ${darkMode ? 'dark' : ''}`}>
                <img src="https://images.pexels.com/photos/516541/pexels-photo-516541.jpeg?auto=compress&cs=tinysrgb&w=1600" />
                <div className='title'>
                    <p>Name: Rugayya</p>
                    <p>Surname: Abdullayeva</p>
                    <p>Age: 20</p>
                </div>
            </div>
        </div>
    );
};

export default Card;