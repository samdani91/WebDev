import React from 'react'
import TempInput from './TempInput'
import Boilingverdict from './BoilingVerdict'
import {convert,toCelsius,toFahrenheit} from '/home/samdani1412/Desktop/WebDev/ReactJs/clock/src/lib/Converter.js'

export default class Calculator extends React.Component {
    state = {
        temperature: '',
        scale: 'c'
    };

    handleChange = (e,scale) => {
        this.setState({
            temperature: e.target.value,
            scale
        });
    }

    render() {
        const {temperature,scale} = this.state;
        const celsius = scale === 'f' ? convert(temperature,toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? convert(temperature,toFahrenheit) : temperature;

        return (
            <div>
                <TempInput temperature={celsius} scale='c' onTempChange={this.handleChange}></TempInput>
                <TempInput temperature={fahrenheit} scale='f' onTempChange={this.handleChange}></TempInput>
                <Boilingverdict celsius={parseFloat(celsius)}></Boilingverdict>
            </div>
        )
    }
}