import React, { useEffect, useState } from 'react';
// import component file here 
import Artist from '../Artist/Artist';
import Cart from '../Cart/Cart';
import './Main.css'

const Main = () => {
    // use useState for artist and  cart
    const [artists, setArtists] = useState([]);
    const[cart, setCart] = useState([]);

    //useEffect for fetch data
    useEffect( () => {
        fetch('./artists.JSON')
        .then(res => res.json())
        .then(data => setArtists(data))
    }, [])
    // handle add to cart function
    const handleAddToCart = (artist) => {
        const newCartArray = [...cart, artist];
        const uniqueCart = new Set(newCartArray);
        const newCart = [...uniqueCart]
        setCart(newCart);
    }

    return (
        // main section
        <div className="main-container">
            <div className="artist-container">
                {
                    // map artist
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