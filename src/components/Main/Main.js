import React, { useEffect, useState } from 'react';
import Artist from '../Artist/Artist';
import Cart from '../Cart/Cart';
import './Main.css'

const Main = () => {
    const [artists, setArtists] = useState([]);
    const[cart, setCart] = useState([]);

    useEffect( () => {
        fetch('./artists.JSON')
        .then(res => res.json())
        .then(data => setArtists(data))
    }, [])

    const handleAddToCart = (artist) => {
        const newCart = [...cart, artist];
        setCart(newCart);
    }

    return (
        <div className="main-container">
            <div className="artist-container">
                {
                    artists.map(artist => <Artist 
                        key={artist.key}
                        artist={artist}
                        handleAddToCart={handleAddToCart}
                    >
                    </Artist>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Main;