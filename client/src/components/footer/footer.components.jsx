import React from 'react';
import './footer.styles.css'

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-links-container">
                <div>
                    <p>Quienes Somos</p>
                </div>
                <div>
                    <p>Productos</p>
                </div>
                <div>
                    <p>Contacto</p>
                </div>

            </div>
            <div className="footer-copyright">
                <p>Copyright © Granja Los Girasoles {new Date().getFullYear()}</p>
            </div>
        </div>
    )
}

export default Footer;