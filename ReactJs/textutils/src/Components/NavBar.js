import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { ThemeContext } from './ThemeContext';

export default function NavBar(props) {

    const { isDarkMode, toggleTheme, myStyle } = useContext(ThemeContext);

    return (
        <nav className="navbar  navbar-expand-lg p-2" style={myStyle}>
            {/* <a className="navbar-brand" href="/">TextUtils</a> */}
            <a className="navbar-brand fs-3" href="/" style={myStyle}>{props.title}</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={myStyle}>
                <span className="navbar-toggler-icon" ></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto ">
                    <li className="nav-item ">
                        <a className="nav-link" href="/" aria-expanded="false" style={myStyle} >
                            HOME
                        </a>
                    </li>

                    <li className="nav-item ">
                        <a className="nav-link" href="/" aria-expanded="false" style={myStyle} >
                            ABOUT
                        </a>
                    </li>


                    <li className="nav-item">
                        <a className="nav-link" href="/" aria-expanded="false" style={myStyle} >
                            CONTACT
                        </a>
                    </li>

                </ul>

                <button onClick={toggleTheme} style={myStyle} type="button" className={isDarkMode ? 'btn btn-outline-light' : 'btn btn-outline-dark'}> {isDarkMode ? 'Enable Light Mode' : 'Enable Dark Mode'}</button>
            </div>

        </nav>
    )
}

NavBar.propTypes = { title: PropTypes.string }
// NavBar.propTypes = { title: PropTypes.string.isRequired }

//if prop is not send
// NavBar.defaultProps = { title: 'Set Title Here'}