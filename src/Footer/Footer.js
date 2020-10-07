import React from 'react';
import './Footer.css';

class Footer extends React.Component {
    render(){
        let nav = {'Главная': '/', 'О нас': 'About', 'Контакты': 'Contacts'};
        return (
            <footer id="footer" className="footer">
                <div className="footer-bottom">
                    <div className="container">
                        <div className="flex-container">
                            <div className="flex-item">
                                <h1 className="footer-title"><a href="https://itgid.info">2019 &copy; React. Lite Level</a></h1>
                                <p> All Rights Reserved</p>

                            </div>
                        <div className="flex-item">
                            <div className="module-body">
                                <ul className="list-unstyled">
                                </ul>
                            </div>
                        </div>
                        <div className="flex-item">
                            <div className="module-body">
                                <ul className="list-unstyled">
                                    {Object.keys(nav).map((elem) => {
                                        return <li key={elem}><a href={nav[elem]}>{elem}</a></li>
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
