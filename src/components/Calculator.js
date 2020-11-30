import React, { Component } from 'react'

class Calculator extends Component {

    state = {
        num1: '',
        num2: '',
        operator: '+',
        result: ''
    }

    setValue = (e,val) => {
        this.setState({[val]: e.target.value})
    }

    calculateResult = () => {
        if (this.state.operator === '+') this.setState({result: (parseInt(this.state.num1) + parseInt(this.state.num2))})
        if (this.state.operator === '-') this.setState({result: (parseInt(this.state.num1) - parseInt(this.state.num2))})
        if (this.state.operator === '*') this.setState({result: (parseInt(this.state.num1) * parseInt(this.state.num2))})
        if (this.state.operator === '/') this.setState({result: (parseInt(this.state.num1) / parseInt(this.state.num2))})
    }

    render() {
        return (
            <div className='container'>
                <h1>Add with React!</h1>
                <div className='add'>
                    <input type='number'
                    name='num1'
                    placeholder='First Number'
                    value={this.state.num1}
                    onChange={(e) => this.setValue(e, 'num1')}
                    />

                    <select name='operator' value={this.state.operator} onChange={(e) => this.setValue(e, 'operator')}>
                        <option value='+'>+</option>
                        <option value='-'>-</option>
                        <option value='*'>*</option>
                        <option value='/'>/</option>
                    </select>

                    <input type='number'
                    name='num2'
                    placeholder='Second Number'
                    value={this.state.num2}
                    onChange={(e) => this.setValue(e, 'num2')}
                    />
                    <button onClick={this.calculateResult}>=</button>
                    <h3>Results</h3>
                    <p>{this.state.result}</p>
                </div>
            </div>
        )
    }
}

export default Calculator
