import React from 'react';
import './Header.css';
import logo from './logo.svg';


import Nav from '../Nav/Nav';

class Header extends React.Component {
    render(){
        return (
            <header>
                <div className="top-bar animate-dropdown"></div>
                <div className="main-header">
                    <div className="container">
                        <h1 className="site-title">Сайт обмена валюты на React<img src={logo} alt='logo' /></h1> 
                        </div>
                </div>
                <Nav />
            </header>
        );
    }
}

export default Header;
