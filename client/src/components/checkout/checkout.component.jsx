import React, {useContext} from 'react';

import './checkout.styles.css';

import { CartContext } from '../../context/cartContext/cart.context';
import { UserContext } from '../../context/userContext/user.context';

const Checkout = () => {

    const cartCtx = useContext(CartContext);
    const userCtx = useContext(UserContext);

    return (
        <div>
            <h1>Checkout</h1>
            <div className="sections-container">
                <div className="order-section">
                    <h3>Pedido</h3>
                    <div className="checkout-rows-container">
                        {cartCtx.cartItems.map((item) => (
                        <div key={item.id} className="checkout-row">
                            <span>{item.title}</span>
                            <div style={{display: 'flex'}}>
                                <span>{item.quantity}</span> 
                            </div>
                            <span>{item.price}</span> 
                        </div>
                    ))}
                    </div>
                    <div className="total-container">
                        <h3>Total </h3>
                        <h3>$ {cartCtx.cartTotal}</h3>
                    </div>
                </div>
                <div className="delivery-section">
                    <h3>Datos de envio</h3>
                    <form onSubmit="" className="checkout-container">
            {/* { updateSuccess ? <h4 style={{color: 'green', margin: '0' }}>Cambios guardados con exito!</h4> : null}
            { error ? <h4 style={{color: 'red', margin: '0' }}>{error}</h4> : null } */}
                    <div className="checkout-inputs">
                        <div style={{display: 'flex', width: '100%', justifyContent: 'space-around'}}>
                            <input 
                                className="checkout-input" 
                                placeholder="Nombre" 
                                name='first_name'
                                type='text'
                                // onChange={handleChange}
                                value={userCtx.first_name}
                                label='Nombre'
                                required
                            />
                            <input
                                className="checkout-input" 
                                placeholder="Apellido"
                                name='last_name'
                                type='text'
                                value={userCtx.last_name}
                                // onChange={handleChange}
                                label='Apellido'
                                required
                                />                            
                        </div>
                        <div style={{display: 'flex', width: '100%', justifyContent: 'space-around'}}>
                            <input
                                className="checkout-input" 
                                placeholder="Telefono"
                                name='phone'
                                type='text'
                                value={userCtx.phone}
                                // onChange={handleChange}
                                label='Telefono'
                                required
                            />
                            <input
                                className="checkout-input" 
                                placeholder="Correo Electronico"
                                name='email'
                                type='email'
                                value={userCtx.email}
                                // onChange={handleChange}
                                label='Email'
                                disabled
                                />
                            
                            
                        </div>
                        <div style={{display: 'flex', width: '100%', justifyContent: 'space-around'}}>
                            <input
                                className="checkout-input" 
                                placeholder="Direccion"
                                name='address'
                                type='text'
                                value={userCtx.address}
                                // onChange={handleChange}
                                label='Direccion'
                                />
                            <input
                                className="checkout-input" 
                                placeholder="Ciudad"
                                name='city'
                                type='text'
                                value={userCtx.city}
                                // onChange={handleChange}
                                label='ConfirmarPassword'
                                />
                            <input
                                className="checkout-input" 
                                placeholder="Departamento"
                                name='state'
                                type='text'
                                value={userCtx.state}
                                // onChange={handleChange}
                                label='Departamento'
                                />
                        </div>
                    </div>
                    </form>
                </div>
            </div>
            <div className="checkout-button-container">
                <button>Volver</button>
                <button className="checkout-button">Comprar</button>
            </div>
        </div>
        
    )
}

export default Checkout;