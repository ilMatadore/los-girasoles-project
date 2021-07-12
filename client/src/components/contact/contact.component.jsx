import React, { useState, useContext } from 'react';
import './contact.styles.css';


const Contact = () => {

    const [userData, setUserData] = useState({
        first_name: '', 
        last_name: '',
        email: '',
        phone: '',
        message: '',

    })

    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const { 
        first_name,
        last_name,
        email,
        phone,
        message,
    } = userData;

    const handleChange = event => {
        const { value, name } = event.target;    
        setUserData({ ...userData, [name]: value });
      };
    
    const cleanForm = () => {
        setUserData({
            first_name: '', 
            last_name: '',
            email: '',
            phone: '',
            message: '',
        })
    }
    
    const handleSubmit = event => {
        event.preventDefault();
        fetch("http://localhost:3001/contact", {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            first_name,
            last_name,
            email,
            phone,
            message,
          }),
        })
        .then((response) => response.json())
        .then((res) => {
          setSuccess(res.message)
          }
        ).then(cleanForm()).catch((err)=>{setError(err)})
        
    }

    return (
        <form onSubmit={handleSubmit} className="contact-container">
            <h1>CONTACTO</h1>
            <h2>Tienes alguna consulta? Te responderemos a la brevedad.</h2>
            { error ? <h3 style={{color: 'red', margin: '0' }}>{error}</h3> : null }
            { success ? <h3 style={{color: 'green', margin: '0' }}>{success}</h3> : null }
            <div className="contact-inputs">
                <div style={{display: 'flex', width: '100%', justifyContent: 'space-around'}}>
                    <input 
                        className="contact-input" 
                        placeholder="Nombre" 
                        name='first_name'
                        type='text'
                        onChange={handleChange}
                        value={first_name}
                        label='Nombre'
                        required
                    />
                    <input
                        className="contact-input" 
                        placeholder="Apellido"
                        name='last_name'
                        type='text'
                        value={last_name}
                        onChange={handleChange}
                        label='Apellido'
                        required
                        />
                </div>
                <div style={{display: 'flex', width: '100%', justifyContent: 'space-around'}}>
                    <input
                        className="contact-input" 
                        placeholder="Correo Electronico"
                        name='email'
                        type='email'
                        value={email}
                        onChange={handleChange}
                        label='Email'
                        required
                        />
                    <input
                        className="contact-input" 
                        placeholder="Telefono"
                        name='phone'
                        type='text'
                        value={phone}
                        onChange={handleChange}
                        label='Telefono'
                        required
                    />
                    
                </div>
                <div style={{display: 'flex', width: '100%', justifyContent: 'space-around'}}>
                    <textarea 
                        cols="120" 
                        rows="10" 
                        maxLength="200" 
                        placeholder="Escriba su mensaje, maximo 200 caracteres" 
                        value={message} 
                        onChange={handleChange}
                        name='message'
                        >                            
                    </textarea>
                </div>
            </div>
            <button className="contact-button" type="submit">Enviar Mensaje</button>
        </form>
    )
}

export default Contact;