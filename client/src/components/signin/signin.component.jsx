import React, { useState, useContext } from 'react';
import { withRouter, Link } from 'react-router-dom';
import './signin.styles.css';

import { UserContext } from '../../context/userContext/user.context';

const SignIn = (props) => {

    const userCtx = useContext(UserContext)
    console.log(userCtx)
    const [userCredentials, setCredentials ] = useState({ email: '', password: '' })
    const [error, setError] = useState(null); 
    const { email, password } = userCredentials;

    const handleChange = event => {
        const { value, name } = event.target;
    
        setCredentials({ ...userCredentials, [name]: value });
      };
    
    const handleSubmit = async event => {
        event.preventDefault();
    
        fetch('https://localhost:3001/user/login', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email, password
            })
        })
        .then((response) => response.json())
        .then((res) => {
            if (res.accessToken) {
                userCtx.successLogin(res.user);
                localStorage.setItem('accessToken', res.accessToken)
                props.history.push('/')
            } else {
             setError(res.error)
            }})
        .catch((err) => setError(err))
    };

    return (
        <form onSubmit={handleSubmit} className="signin-container">
            <h1>Bienvenido nuevamente!</h1>
            <h3>Ingresa tu usuario y contraseña</h3>
            <div className="signin-inputs">
                <input 
                    className="signin-input" 
                    placeholder="email" 
                    name='email'
                    type='email'
                    onChange={handleChange}
                    value={email}
                    label='email'
                    required
                />
                <input
                    className="signin-input"
                    placeholder="contraseña"
                    name='password'
                    type='password'
                    value={password}
                    onChange={handleChange}
                    label='password'
                    required
                    />
            </div>
            { error ? <h4 style={{color: 'red', margin: '0' }}>{error}</h4> : null }
            <button className="sign-in-button" type="submit">Iniciar Sesion</button>
            <h4>Si no tienes cuenta registrada aun, <Link to='/register'>registrate aqui</Link></h4>
        </form>
    )
}

export default withRouter(SignIn);
