import React from 'react';
import './Nav.css';

class Nav extends React.Component {
    render(){
        let nav = {'Главная': '/', 'О нас': 'About', 'Контакты': 'Contacts'};
        return (
            <div className="header-nav">
                <div className="container">
                    <nav>
                        {Object.keys(nav).map((elem) => {
                                return <li key={elem}><a href={nav[elem]}>{elem}</a></li>
                        })}
                    </nav>
                </div>
            </div>
        );
    }
}

export default Nav;
