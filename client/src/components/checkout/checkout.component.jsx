import React, {useState, useContext} from 'react';
import { Link } from 'react-router-dom';

import './checkout.styles.css';

import CartItem from '../cart-item/cart-item.component';
import { CartContext } from '../../context/cartContext/cart.context';
import { UserContext } from '../../context/userContext/user.context';

const Checkout = () => {

    const cartCtx = useContext(CartContext);
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

    const [orderStatus, setOrderStatus] = useState({status: ''})
    console.log(orderStatus)

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

    const handlePurchase = (e) => {
        e.preventDefault();
        console.log(userCtx);
        console.log(cartCtx);
        fetch(`https://localhost:3001/order/`, {//https://localhost:3001
                method: 'post',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    first_name,
                    last_name,
                    email,
                    address,
                    city,
                    phone,
                    state,
                    userCtx,
                    cartCtx,
                })
            })
             .then((response) => response.json())
             .then((res) => typeof res.order === 'number' ? (setOrderStatus({status:"success", order_id: res.order}), cartCtx.clearCart()) : setOrderStatus({status: "failed"}))
             .catch((err) => console.log("Error al actualizar datos, intenta de nuevo" + err))
               
    }

    return (
        <div>
            <h1>Checkout</h1>
            <div className="sections-container">
                <div className="order-section">
                    <h3>Pedido</h3>
                    <div className="checkout-rows-container">
                        {cartCtx.cartItems.map((item) => (
                            <CartItem key={item.id} cartItem={item} addItem={cartCtx.addItem} removeItem={cartCtx.removeItem}/>
                    ))}
                    </div>
                    <div className="total-container">
                        <h3>Total </h3>
                        <h3>$ {cartCtx.cartTotal}</h3>
                    </div>
                </div>
                <div className="delivery-section">
                    <h3>Datos de envio</h3>
                    <form onSubmit={handlePurchase} className="checkout-container">
            {/* { updateSuccess ? <h4 style={{color: 'green', margin: '0' }}>Cambios guardados con exito!</h4> : null}
            { error ? <h4 style={{color: 'red', margin: '0' }}>{error}</h4> : null } */}
                    <div className="checkout-inputs">
                        <div style={{display: 'flex', width: '100%', justifyContent: 'space-around'}}>
                            <input 
                                className="checkout-input" 
                                placeholder="Nombre" 
                                name='first_name'
                                type='text'
                                onChange={handleChange}
                                value={first_name}
                                label='Nombre'
                                required
                            />
                            <input
                                className="checkout-input" 
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
                                className="checkout-input" 
                                placeholder="Telefono"
                                name='phone'
                                type='text'
                                value={phone}
                                onChange={handleChange}
                                label='Telefono'
                                required
                            />
                            <input
                                className="checkout-input" 
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
                                className="checkout-input" 
                                placeholder="Direccion"
                                name='address'
                                type='text'
                                value={address}
                                onChange={handleChange}
                                label='Direccion'
                                />
                            <input
                                className="checkout-input" 
                                placeholder="Ciudad"
                                name='city'
                                type='text'
                                value={city}
                                onChange={handleChange}
                                label='ConfirmarPassword'
                                />
                            <input
                                className="checkout-input" 
                                placeholder="Departamento"
                                name='state'
                                type='text'
                                value={state}
                                onChange={handleChange}
                                label='Departamento'
                                />
                        </div>
                    </div>
                        <div className="checkout-button-container">
                            <Link to="/cart" style={{width: "30%"}}><button className="checkout-back-button">Volver</button></Link>
                            <button className="checkout-button" type="submit">Comprar</button>
                        </div>
                    </form>
                </div>
            </div>
                    <div>
                        {orderStatus.status === 'success' ? 
                            <div>
                                <h1>Tu pedido ha sido procesado con exito, tu numero de order es {orderStatus.order_id} </h1>
                                <h2>Te contactaremos a la brevedad</h2>
                            </div> : orderStatus.status === 'failed' ? <h1>Ocurrio un error, intenta mas tarde</h1> : null}
                    </div>
        </div>
        
    )
}

export default Checkout;