import React from 'react';
// import front-awesome and icon link
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faMobile } from '@fortawesome/free-solid-svg-icons'


import './Artist.css';

const Artist = (props) => {
    console.log(props.artist);
    const {name, profession, sex, country, contract, img} = props.artist;
    const cartIcon = <FontAwesomeIcon icon={faCartPlus} /> 
    return (
        // artist section component 
        <div className="artist">
            <div className="artist-img">
            <img src={img} alt="" />
            </div>
            {/* artist details section */}
            <div className="details">
                <h3>Name: {name}</h3>
                <p>Profession: {profession}</p>
                <p>Sex: {sex}</p>
                <p>Country: {country}</p>
                <h4>Cost: ${contract}</h4>
            </div>
            <div>
                <button onClick={() => props.handleAddToCart(props.artist)} className="regular-btn">{cartIcon} Add To Cart</button>
            </div> <br />
            <div>
                <a href=""><FontAwesomeIcon icon={faMobile} /></a>
            </div>
        </div>
    );
};

export default Artist;