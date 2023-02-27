import React from 'react';
import logo from './images/khaled.PNG';
import './myStyles.css'
const Header = () => {
return (
    <div className='HeaderBar'>
        <img src={logo} alt="Iteri Logo" height="40" />
        <h1 className='HeaderText'>Iteri</h1>
    </div>
    );
};
export default Header;