import React from 'react';
import './Cookies.css';

class Cookies extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            cookiesDisplay: ''
        }
    }
    cookiesOk = () => {
        this.setState({cookiesDisplay: 'none'});
        localStorage.setItem('cookiesOk', true);
    }
    render(){
        if(localStorage.getItem('cookiesOk') !== 'true') {
            return (
                <div className="container" id="cookie-info">
                <div className="site-content" style={{display: this.state.cookiesDisplay}}>
                    <div className="well">На нашем сайте мы используем cookie для сбора информации технического характера.<br />В
                        частности, для персонифицированной работы сайта мы обрабатываем IP-адрес региона вашего
                        местоположения.&nbsp;<button className="btn btn-primary btn-sm" onClick={this.cookiesOk}>OK</button></div>
                </div>
            </div>
            )
        } else{
            return false;
        }
    }
}

export default Cookies;
