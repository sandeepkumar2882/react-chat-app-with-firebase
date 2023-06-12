import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';

export const Login = () => {

    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        const userEmail = e.target.email.value;
        const userPassword = e.target.password.value;

        try {
            await signInWithEmailAndPassword(auth, userEmail, userPassword);
            navigate('/');
        }
        catch(error){
            setError(true);
        }
    }

  return (
    <div className='formContainer'>
            <div className="formWrapper">
                <span className="logo">Developers Chat</span>
                <span className="title">Login</span>
                <form onSubmit={handleLogin}>
                    <input type="email" name='email' placeholder="Your Email" />
                    <input type="password" name='password' placeholder="Password" />
                    <button>Sign In</button>
                    {error && <span style={{ color: "red" }}>Error Message : {error}</span>}
                </form>
                <p>
                    You do have an account? <Link to="/register">Register</Link>
                </p>
            </div>
        </div>
  )
}
