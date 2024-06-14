import React, {useState} from 'react'
import axios from 'axios'

function RegForm(){
    const [values,setValues] = useState({
        name: '',
        mobile: '',
        email:'',
        password: ''
    })

    const handleChange = (event) =>{
        setValues({...values,[event.target.name]:[event.target.value]})
    }
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
        <form onSubmit={handleSubmit}>
            <div className="form" >

                <input type="text" className="entry" placeholder="Enter Your Name" name="name" onChange={handleChange}/>
                <input type="text" className="entry" placeholder="Enter Your Mobile Number" name="mobile" onChange={handleChange}/>
                <input type="text" className="entry" placeholder="Enter Your Email" name="email" onChange={handleChange}/>
                <input type="text" className="entry" placeholder="Enter password" name="password" onChange={handleChange}/>

                <button type="submit" className="btn">Register</button>

            </div>
        </form>
     )
}

export default RegForm;