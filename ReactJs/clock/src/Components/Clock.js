import React from "react";
import Button from './Button'

class Clock extends React.Component {
    state = { date: new Date(), locale: 'bn-BD' };

    componentDidMount() {
        this.timer = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    handleClick = (locale) => {
        this.setState({
            locale
        });
    }

    render() {
        // console.log('Clock component rendered')
        const { date, locale } = this.state;
        return (
            <div>
                <h1 className="heading">
                    <span className="text">
                        {
                            date.toLocaleTimeString(locale)
                        }
                    </span>
                </h1>

                {locale === 'bn-BD' ? (
                    <Button change={this.handleClick} locale="en-US" show={false} enable={false}/>
                ) : (
                    <Button change={this.handleClick} locale="bn-BD" show={true} enable/>
                )}

            </div>
        )
    }
}

export default Clock;