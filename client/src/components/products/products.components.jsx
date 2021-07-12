import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Card from '../card/card.components';
import Aditional from '../aditional/aditional.component';
import './products.styles.css';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

import { CartContext } from '../../context/cartContext/cart.context';

const canastas = [
    {
        title: "Mix Verdura",
        id: 1,
        price: "800",
        description: [
          "zapallo cabutia - 1",
          "papa - 1 kg",
          "boniato - 1 kg",
          "atado de verdeo - 1",
        ],
        // buttonText: "Agregar al carro",
        // buttonVariant: "contained",
      },
      {
        title: "Mix Verde",
        id: 2,
        subheader: "La mas vendida",
        price: "900",
        description: [
          "atado de acelga - 1",
          "lechuga - 1",
          "atado de rúcula - 1",
          "atado espinaca - 1",
        ],
        // buttonText: "Agregar al carro",
        // buttonVariant: "contained",
      },
      {
        title: "Mix Todo",
        id: 3,
        price: "1000",
        description: [
          "zapallo cabutia - 1",
          "papa - 1.5 kg ",
          "atado de verdeo - 1",
          "mandarina - 1 kg",
        ],
        // buttonText: "Agregar al carro",
        // buttonVariant: "contained",
      },
]

const adicionales = [
    {
      title: "Miel",
      id: 4,
      price: "100",
      description: ["1/2 kg Organica"],
      buttonText: "Agregar al carro",
      buttonVariant: "contained",
    },
    {
      title: "Mizuna",
      id: 5,
      price: "45",
      description: [],
      buttonText: "Agregar al carro",
      buttonVariant: "contained",
    },
    {
      title: "Mostaza",
      id: 6,
      price: "45",
      description: [],
      buttonText: "Agregar al carro",
      buttonVariant: "contained",
    },
    {
      title: "Kale",
      id: 7,
      price: "55",
      description: [],
      buttonText: "Agregar al carro",
      buttonVariant: "contained",
    },
    {
      title: "Cilantro",
      id: 8,
      price: "45",
      description: [],
      buttonText: "Agregar al carro",
      buttonVariant: "contained",
    },
    {
      title: "Perejil",
      id: 9,
      price: "45",
      description: [],
      buttonText: "Agregar al carro",
      buttonVariant: "contained",
    },
  ];

const Products = () => {

  const cartCtx = useContext(CartContext)

    return (
        <div id="canastas" className="products-page-container">
            <div className="products-text-top">
                <h1>Nuestras Canastas</h1>
                <p className="products-subtitle">Selecciona primero una o mas de nuestras canastas de productos organicos que mas gustes...</p>
            </div>
            <div className="products-container">
                {canastas.map((canasta) => {return (<Card key={canasta.id} canasta={canasta} addItem={cartCtx.addItem}/>)})}
            </div>
            <div className="products-text-bottom">
                <p className="products-subtitle">Tambien puedes agregar los siguientes productos a tu pedido..</p>
            </div>
            <div className="products-aditionals">
                {adicionales.map((adicional) => (<Aditional key={adicional.id} adicional={adicional} addItem={cartCtx.addItem}/>))}
            </div>
            <div className="to-cart-button-container">
              <Link to="/cart" className="to-cart-button">Ir al carro</Link>
            </div>
            <div className="products-follow-us">
                <p>Siguenos en <FaInstagram/></p>
                <p>Por consultas <FaWhatsapp /></p>
            </div>
            <div className="products-image-bottom-container">
                
            </div>
        </div>
    )
}

export default Products