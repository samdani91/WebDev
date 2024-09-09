import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // FontAwesome icons for eye visibility


function RegForm() {
    const [values, setValues] = useState({
        name: '',
        mobile: '',
        email: '',
        password: ''
    })
    const [showPassword, setShowPassword] = useState(false);
    const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: [event.target.value] })
    }
    const handlePasswordToggle = () => {
        setShowPassword(prevState => !prevState);
    };
    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('http://localhost:8081/RegForm', values)
            .then(response => {
                console.log("Submission Successful!");

                if (response.status === 400) {
                    alert(response.data.message); // Show alert to the user
                } else if (response.status === 200) {
                    alert(response.data.message); // Show success message
                } else {
                    console.error('Unexpected response:', response.data);
                }
            })
            .catch(err => {
                if (err.response && err.response.status === 400) {
                    alert(err.response.data.message); // Show alert to the user
                } else {
                    console.error('Error:', err);
                }
            });
    };

    return (
        <>
            <header>
                <h1 className='heading'>
                    Registration Form
                </h1>
            </header>
            <form onSubmit={handleSubmit}>
                <div className="form" >

                    <input type="text" className="entry" placeholder="Enter Your Name" name="name" onChange={handleChange} required />
                    <input type="text" className="entry" placeholder="Enter Your Mobile Number" name="mobile" onChange={handleChange} required />
                    <input type="text" className="entry" placeholder="Enter Your Email" name="email" onChange={handleChange} required />
                    <div className="password-container">
                        <input
                            type={showPassword ? "text" : "password"}
                            className="entry"
                            placeholder="Enter Password"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                            required
                        />
                        <button
                            type="button"
                            className="password-toggle"
                            onClick={handlePasswordToggle}
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>

                    <button type="submit" className="btn">Register</button>

                </div>
            </form>
            <p className="msg">Already Registered?</p>
            <Link to="/login" className="login-msg">Log In</Link>
        </>
    )
}

export default RegForm;