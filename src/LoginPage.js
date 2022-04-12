import React from 'react'
import { Link } from "react-router-dom"

function LoginPage() {
  return (
    <div className='container'>
        <h1 className='main-header'>OpenSky Flight App</h1>
        <form>
          <h3 className='login-header'>Login here</h3>
          <ul className='form-container'>
            <li>
              
              <input
              type="text"
              required
              placeholder='Email'
              >
              </input>
            </li>

            <li>
              
              <input
              type="password"
              required
              placeholder='password'
              >
              </input>
            </li>

            
            <li>
              <Link to="/airportpage"><button  className='button' type='submit'>Sign in</button></Link>
            </li>
            
          </ul>
        </form>

        <p className='loginFooter'>&copy; Copyright 2022; All rights reserved Ajibade Emmanuel</p>
    </div>
  )
}

export default LoginPage

