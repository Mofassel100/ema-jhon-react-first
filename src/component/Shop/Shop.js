import { click } from '@testing-library/user-event/dist/click';
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Cart from './Cart/Cart';

import './Shop.css'
const Shop = () => {
    const [cart,setCart]=useState([])
  const [producsts,setProducs] =useState([])

   useEffect(()=>{

    fetch('products.json')
    .then(res=>res.json())
    .then(data => setProducs(data))
   },[])
   const handAddToCard= (product)=>{
    console.log(product)
    const newCard =[...cart,product]

    setCart(newCard)
   }
  
    return (
        <div className='producs'>
            <div className='producst-container'>
               
               {producsts.map(product => <Product product={product} handAddToCard={handAddToCard}></Product>
                

               )
               }
            </div>
            <div className='shop-container'>
<Cart cart={cart}></Cart>
            </div>
            
    
            
        </div>
    );
};

export default Shop;