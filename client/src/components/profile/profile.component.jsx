import React, { useState, useContext } from 'react';
import './profile.styles.css';

import { UserContext } from '../../context/userContext/user.context'

const Profile = () => {

    const userCtx = useContext(UserContext);

    const [userProfileData, setUserProfileData] = useState({
        first_name: userCtx.first_name, 
        last_name: userCtx.last_name,
        email: userCtx.email,
        address: userCtx.address,
        city: userCtx.city,
        phone: userCtx.phone,
        state: userCtx.state,
    })

    const [error, setError] = useState(null);
    const [updateSuccess, setUpdateSuccess] = useState(null);

    const { 
        first_name,
        last_name,
        email,
        address,
        city,
        phone,
        state, 
    } = userProfileData;

    const handleChange = event => {
        const { value, name } = event.target;
        setUserProfileData({ ...userProfileData, [name]: value });
      };
    
    const handleSubmit = async event => {
        event.preventDefault();

            fetch(`http://localhost:3001/profile/${userCtx.id}`, {
                method: 'put',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    first_name,
                    last_name,
                    email,
                    address,
                    city,
                    phone,
                    state,
                })
            })
            .then((response) => response.json())
            .then((res) => {if (res.id) {
                userCtx.updateProfile(res);
                setUpdateSuccess(res.id);
                } else {
                    setError("Error al actualizar datos")
                }} )
            .catch((err) => setError("Error al actualizar datos, intenta de nuevo"))
    }

    return (
        <form onSubmit={handleSubmit} className="profile-container">
            <h1>Mi Datos</h1>
            <h3>Actualize sus datos si es necesario</h3>
            { updateSuccess ? <h4 style={{color: 'green', margin: '0' }}>Cambios guardados con exito!</h4> : null}
            { error ? <h4 style={{color: 'red', margin: '0' }}>{error}</h4> : null }
            <div className="profile-inputs">
                <div style={{display: 'flex', width: '100%', justifyContent: 'space-around'}}>
                    <input 
                        className="profile-input" 
                        placeholder="Nombre" 
                        name='first_name'
                        type='text'
                        onChange={handleChange}
                        value={first_name}
                        label='Nombre'
                        required
                    />
                    <input
                        className="profile-input" 
                        placeholder="Apellido"
                        name='last_name'
                        type='text'
                        value={last_name}
                        onChange={handleChange}
                        label='Apellido'
                        required
                        />
                    <input
                        className="profile-input" 
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
                    <input
                        className="profile-input" 
                        placeholder="Correo Electronico"
                        name='email'
                        type='email'
                        value={email}
                        onChange={handleChange}
                        label='Email'
                        disabled
                        />
                    
                    
                </div>
                <div style={{display: 'flex', width: '100%', justifyContent: 'space-around'}}>
                    <input
                        className="profile-input" 
                        placeholder="Direccion"
                        name='address'
                        type='text'
                        value={address}
                        onChange={handleChange}
                        label='Direccion'
                        />
                    <input
                        className="profile-input" 
                        placeholder="Ciudad"
                        name='city'
                        type='text'
                        value={city}
                        onChange={handleChange}
                        label='ConfirmarPassword'
                        />
                    <input
                        className="profile-input" 
                        placeholder="Departamento"
                        name='state'
                        type='text'
                        value={state}
                        onChange={handleChange}
                        label='Departamento'
                        />
                </div>
            </div>
            <button className="profile-button" type="submit">Actualizar datos</button>
        </form>
    )
}

export default Profile;