import React from 'react';
import './Product.css'
const Product = (props) => {
    const {product,handAddToCard}=props
    console.log(props)
    const {id,img,name,price,quantity,ratings,shipping,ratingsCount,seller,stock,category}=props.product

    return (
        <div>
            <div className='product-shows'>
                <img src={img} alt=''></img>
                <h6 className='pro-name'>
                    {name}
                </h6>
                <h6 className='pro-price'>
                   Price : $ {price}
                </h6>
                <p className='pro-manufec'>
                    Manufecturing : {seller}
                </p>
                <h6 className='pro-ra'>Rating : {ratings} start</h6>
                <button className='pro-btn card' onClick={()=>handAddToCard(product)
}>Add to Card</button>

            </div>
            
        </div>
    );
};

export default Product;