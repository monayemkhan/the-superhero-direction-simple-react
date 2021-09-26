import React from 'react';
// header css import file here 
import './Header.css';

const Header = () => {
    return (
        // header section component
        <div className="header">
            <div className="overlay">
                <h1>Qatar World Cup Opening Ceremony - 2022</h1>
                <h1>Part Of The Concert</h1>
                <p>An opening ceremony, grand opening ceremony marks the official opening of a newly-constructed location or the start of an event. Opening ceremonies at large events such as the FIFA World Cup might involve thousands of participants and be watched worldwide. Such tournaments often also include a closing ceremony at the end of the event.</p>
                <h2>Total Budget: $1000 million</h2>
            </div>
        </div>
    );
};

export default Header;