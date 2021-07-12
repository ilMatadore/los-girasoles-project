import React from 'react';
import './aditional.styles.css';
import { FaCartPlus } from 'react-icons/fa';

const Aditional = ({adicional, addItem}) => {
    const { title, price, description } = adicional;
    return (
        <div className="adicional">
            <div className="adicional-title">
                <p style={{paddingRight: "10px",}}>{title}</p>
                <p>{description}</p> 
            </div>
            <div style={{display: "flex", float:"right", width: "30%", justifyContent: 'flex-end', alignItems: 'center', }}>
                <a className="adicional-price">${price}</a>
                <button className="adicional-button"><FaCartPlus className="adicional-cart-icon" onClick={()=> addItem(adicional)}/></button>
            </div>
            
        </div>
    )
}

export default Aditional;