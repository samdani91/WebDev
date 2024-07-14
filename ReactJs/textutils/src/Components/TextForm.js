import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import { ThemeContext } from './ThemeContext';

export default function TextForm(props) {

    const { myStyle } = useContext(ThemeContext);

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleCapitalClick = () => {
        let newText = text
            .toLowerCase()
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
        setText(newText);
    }

    const handleClearClick = () => {
        setText('');
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const [text, setText] = useState('');

    const wordCount = text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length;

    return (

        <div className="container-fluid" style={myStyle}>
            <div className="container" style={myStyle}>
                <form className='container mt-1'>
                    <div className="form-group  mb-3">
                        <h1 className='mb-2'>{props.heading}</h1>
                        <textarea className="form-control" value={text} onChange={handleOnChange} id="mytextbox" rows="10"></textarea>
                    </div>
                </form>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-auto mb-2 mb-md-0">
                            <button className="btn btn-primary w-100" onClick={handleUpClick}>UPPER CASE</button>
                        </div>
                        <div className="col-12 col-md-auto mb-2 mb-md-0">
                            <button className="btn btn-success w-100" onClick={handleLowClick}>lower case</button>
                        </div>
                        <div className="col-12 col-md-auto mb-2 mb-md-0">
                            <button className="btn btn-info w-100" onClick={handleCapitalClick}>Capitalized Case</button>
                        </div>
                        <div className="col-12 col-md-auto">
                            <button className="btn btn-danger w-100" onClick={handleClearClick}>Clear Text</button>
                        </div>
                    </div>
                </div>

            </div>
            <div className="container p-4" style={myStyle}>
                <h2>Your Text Summary</h2>
                <p className='fs-5 mb-0'>{wordCount} words and {text.length} characters</p>
                <p className='fs-5'>Read Time: {0.008 * wordCount} mins</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>

        </div>

    )
}

TextForm.propTypes = { heading: PropTypes.string };