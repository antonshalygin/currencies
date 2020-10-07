import React from 'react';
import './Calc.css';

class Calc extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            result: '0'
        }

    }

    static getDerivedStateFromProps(props, state) {
        return {rate: props.rate}
    }

    calcRate = (e) => {
        e.preventDefault();
        let elem = e.target.elements,
            countCurrency = elem['count-currency'].value,
            typeCurrency = elem['type-currency'].value;
        this.setState({result: ((countCurrency / this.state.rate[typeCurrency])*this.props.uah).toFixed(2)})
    }

    render(){
        return (
            <div className="calc">
                <h3> Калькулятор обмена</h3>
                <div className="block">
                    <div>Я хочу купить</div>
                    <div>
                        <form onSubmit={this.calcRate}>
                            <input type="number" defaultValue="100" name="count-currency"/>
                            <select className='calc-select' name="type-currency" id="">
                                {Object.keys(this.props.rate).map((keyName, i) => 
                            (
                                <option key={keyName} value={keyName}>{keyName}</option>
                            )
                        )}
                            </select>
                            <input className="calc-btn" type='submit' value = 'Рассчитать' />
                        </form>
                    </div>
                    <div>
                        <h4>Сегодня это будет стоить</h4>
                        <ul className="calc-res">
                            <li>{this.state.result} UAH</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Calc;