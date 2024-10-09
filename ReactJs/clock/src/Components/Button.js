import React from 'react'

class Button extends React.Component {
    shouldComponentUpdate(nextProps) {
        const { change: currentChange, locale: currentLocale } = this.props;
        const { change: nextChange, locale: nextLocale } = nextProps;

        if (currentChange === nextChange && currentLocale === nextLocale) return false;
        else return true;
    }
    render() {
        // console.log('Button component rendered')
        const { change, locale, show, enable } = this.props;
        if(!enable) return null;
        return (
            <>
                <button type="button" onClick={() => change(locale)}>
                    {locale === 'bn-BD' ? 'Change Clock' : 'ঘড়ি পরিবর্তন'}
                </button>
                {show && <p>Hello</p>}
            </>
        )
    }
}

export default Button;