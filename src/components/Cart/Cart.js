import React from 'react';
// import cart css file
import './Cart.css';

const Cart = (props) => {
    // Destructure props data
    const {cart} = props;
    let total = 0;
    let name = " ";
    // cart for loop 
    for(const artist of cart){
        total = total + artist.contract;
        name = name + artist.name;
    }
    return (
        // cart section component
        <div className="cart">
            <div>
                <h2>Artist Added: {props.cart.length}</h2>
                <h3>Total Cost: ${total}</h3>
            </div>
            {/* added single artist list */}
            {
                cart.map(artist => <div className="select-artist"> 
                <h4>{artist.name}</h4> 
                </div> )
            }
                
            <button className="regular-btn">Conform Now</button>
        </div>
    );
};

export default Cart;