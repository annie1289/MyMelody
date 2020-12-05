import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

export default function Login(props) {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <div className = "loginForm" >
    <form onSubmit={(e) => {
      e.preventDefault();
      props.handleLogin(formData);
      }} className="signIn">
        <div className = "inputs">
      <label>Username:
        <input
          type='text'
          name='username'
          value={formData.username}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>Password:
        <input
          type='password'
          name='password'
          value={formData.password}
          onChange={handleChange}
        />
          </label>
          </div>
      <br />
      <br />
      <button className = "logging">Login</button> <br/>
      <Link to='/registration' className = "registerLink">Register for an account</Link>
    
      </form>
      </div>
  )
}
