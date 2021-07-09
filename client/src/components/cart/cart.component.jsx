import React, { useContext} from 'react';
import { Link } from 'react-router-dom';
import './cart.styles.css'

import { CartContext } from '../../context/cartContext/cart.context';


const Cart = () => {

    const cartCtx = useContext(CartContext)

    return (
        <div className="cart-container">
            <h2>Mi Carro</h2>
            <div className="table-container">
                <h3>Productos</h3>
                <h3>Cantidad</h3>
                <h3>Precio</h3>
            </div>
                {cartCtx.cartItems.map((item) => (
                    <div key={item.id} className="rows-container">
                        <span>{item.title}</span>
                        <div style={{display: 'flex'}}>
                            <div>&#10094;</div><span>{item.quantity}</span><div>&#10095;</div> 
                        </div>
                        <span>{item.price}</span> 
                    </div>
                    ))}
            <div className="total-container">
                <h3>Total </h3>
                <h3>$ {cartCtx.cartTotal}</h3>
            </div>
            <div className="cart-button-container">
                <button><Link to="/">Volver</Link></button>
                <button className="cart-button"><Link to="/checkout">Continuar</Link></button>
            </div>
                        
                
                
        </div>
    )
}

export default Cart;