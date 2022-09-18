import React from 'react'
import './Login.css'
import {Link, useHistory} from 'react-router-dom'
import { auth } from './firebase'
import { useState } from 'react'

const Login = () => {

  const history = useHistory();
  const [email, setEmail] = useState("")
  const [password,setPassword] = useState("")
  

  const login = (event) => {
    event.preventDefault();

    auth.signInWithEmailAndPassword(email, password)


      .then((auth) => {
        history.push('/')
  
      })
      .catch((e) => alert(e.message));

  };


  const register = (event) => {
    event.preventDefault();


    auth.createUserWithEmailAndPassword(email, password)

      .then((auth) => {
      history.push('/')
  
      })
      .catch((e) => alert(e.message));
    
  }

  return (
    
  <div className="login">
            <Link to="/">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                    className="login__logo"
                    alt="Logo" />
            </Link>
            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>Email</h5>
                    <input type="email" value={email} onChange={event=>setEmail(event.target.value)} />
                    <h5>Password</h5>
          <input value={password} onChange={event=>setPassword(event.target.value)} type="password" />
                    <Link to="/">
                         <button
                            onClick={login}
                            className="login__signInButton"
                            type="submit"
                        >Sign in</button>
                    </Link>
                </form>
                <p>
                    By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
                </p>
                <button
                    className="login__registerButton"
                    onClick={register}
                >Create your Amazon account</button>
            </div>

        </div>
    )
}

export default Login

