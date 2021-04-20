import React from 'react';
import NavBar from '../../Shared/NavBar/NavBar';
import HeaderMain from '../HeaderMain/HeaderMain';
import './Header.css'
const Header = () => {
    return (
        <div className="header-container">
            <NavBar></NavBar>
            <HeaderMain></HeaderMain>
        </div>
    );
};

export default Header;