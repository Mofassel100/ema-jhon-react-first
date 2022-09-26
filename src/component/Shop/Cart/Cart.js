import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {
    return (
        <div className='cart-m'>
            <h1>this is shop</h1>
<p>TOtal cart : {cart.length}</p>
        </div>
    );
};

export default Cart;