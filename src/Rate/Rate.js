import React from 'react';
import './Rate.css';
import Calc from '../Calc/Calc';

class Rate extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            'date': '',
            'currencyRate': {},
            'uah': '',
        }
        this.currency = ['USD', 'EUR', 'RUB', 'GBP'];
        this.getRate=this.getRate.bind(this);
        this.getRate();
    }
    getRate(){
        fetch('http://data.fixer.io/api/latest?access_key=baebcdc6bea566f3c0f68f313dcaba34')
            .then(data => {
                return data.json();
            })
            .then(data => {
                this.setState({date: data.date});
                this.setState({uah: data.rates.UAH});
                let result = {};
                for (let i = 0; i < this.currency.length; i++) {
                    result[this.currency[i]] = data.rates[this.currency[i]]
                }
                this.setState({currencyRate: result});
            });
    }
    render() {
        return (
            <div className='rate'>
                <h3> Курс валют на {this.state.date}</h3>
                <div className="flex-container">
                    {Object.keys(this.state.currencyRate).map((keyName) => 
                        (
                            <div className="block flex-item" key={keyName}>
                                <div className="currency-name">{keyName}</div>
                                <div className="currency-in">{((this.state.currencyRate[keyName]/this.state.uah)*100).toFixed(2)}</div>
                                <p>*можно купить за 100 грн</p>
                            </div>
                        )
                    )}
                </div>
                <Calc rate={this.state.currencyRate} uah={this.state.uah} />
            </div>
        );
    }
}

export default Rate;