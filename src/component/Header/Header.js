import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'


const Header = () => {
    return (
       <nav className='header'>
<img src={logo} alt=''/>
<div> 
    <a href='/home' >Order</a>
    <a href='/Order Review' >Order Review</a>
    <a href='/manage inventory' >Manage Inventory</a>
    <a href='/Login' >Login</a>
  


</div>

       </nav>
    );
};

export default Header;