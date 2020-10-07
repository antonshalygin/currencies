import React from 'react';
import './Contacts.css';

class Contacts extends React.Component {
    render(){
        return (
            <div className='contacts'>
                <ul>
                    <li>Anton Shalygin</li>
                    <li><a href="mailto:antonshalygin@gmail.com">Email</a> <span>antonshalygin@gmail.com</span></li>
                    <li><a href="tel:+380506661087">+38-050-666-10-87</a> <span>+380506661087</span></li>
                    <li><a href="https://github.com/antonshalygin">GitHub</a></li>
                    <li><a href="https://fb.me/antonkoroed">Facebook</a></li>
                </ul>
            </div>
        );
    }
}

export default Contacts;
