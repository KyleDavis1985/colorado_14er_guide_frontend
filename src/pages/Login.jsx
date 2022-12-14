import { useState } from 'react'
import { SignInUser } from '../services/Auth'
import { useNavigate, Link } from 'react-router-dom'

const Login = (props) => {
  const [formValues, setFormValues] = useState({ email: '', password: ''})
  let navigate = useNavigate()

// Handles input change
  const handleChange = (e) => {
    setFormValues({...formValues, [e.target.name]: e.target.value})
  }

// Handles form submit
  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await SignInUser(formValues)
    setFormValues({email: '', password: ''})
    props.setUser(payload)
    props.toggleAuthenticated(true)
    navigate('/')
  }

//Return
return(
  <div className="login">
    <div className="login-title">Login</div>
      <form className="login-form" onSubmit={handleSubmit}>
        <div>
        <label htmlFor='email'>Email: </label>
          <input
            onChange={handleChange}
            name="email"
            type="email"
            placeholder="example@example.com"
            value={formValues.email}
            required/>
        </div>
        <div>
        <label htmlFor='password'>Password: </label>
          <input
            onChange={handleChange}
            type="password"
            name="password"
            placeholder='Your Password'
            value={formValues.password}
            required/>
        </div>
        <div className='login-button-wrapper'>
        <button className="login-button" disabled={!formValues.email || !formValues.password}>Log In</button>
        </div>
      </form>
        <div>
          <h4>Not a member?</h4>
            <Link to="/Register" className='register-link'>Register</Link>
        </div>
  </div>
    )
}

export default Login