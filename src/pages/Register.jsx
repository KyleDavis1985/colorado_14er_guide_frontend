import {useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { RegisterUser } from '../services/Auth'



const Register = () => {
    let navigate = useNavigate()
    const [formValues, setFormValues] = useState( { 
        name: '',
        email: '', 
        password: '', 
        verifyPassword: ''
        }
    )

    // Handles input change
    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }


    // Submits new user
    const handleSubmit = async (e) => {
        e.preventDefault()
        await RegisterUser({
            name: formValues.name,
            email: formValues.email,
            password: formValues.password,
            verifyPassword: formValues.verifyPassword,
        })

        setFormValues({
          name: '',
          email: '', 
          password: '', 
          verifyPassword: ''
        })
        navigate('/login')
    }

    return(
        <div className="register">
            <div className="register-title">Register</div>
            <form className="register-form" onSubmit={handleSubmit}>
                <div>
                <label> Name: </label>
                <input
                    onChange={handleChange}
                    name="name"
                    type="text"
                    placeholder="First Name"
                    value={formValues.firstName}
                    required/>
                </div>
                <div>
                <label> Email Address: </label>
                <input
                    onChange={handleChange}
                    name="email"
                    type="email"
                    placeholder="example@example.com"
                    value={formValues.email}
                    required/>
                </div>
                <div>
                <label> Password: </label>
                <input
                    onChange={handleChange}
                    name="password"
                    type="password"                    
                    placeholder='Your Password'
                    value={formValues.password}
                    required/>
                </div>
                <div>
                <label> Verify Password: </label>
                <input
                    onChange={handleChange}
                    name="verifyPassword"
                    type="password"                    
                    placeholder='Your Password'
                    value={formValues.verifyPassword}
                    required/>
                </div>
                <div className='register-button-wrapper'>
                <button className="register-button" disabled={(!formValues.email || !formValues.password || !formValues.name) && (formValues.password === formValues.verifyPassword)}>Create Account</button>
                </div>
            </form>
        </div>
    )
}

export default Register