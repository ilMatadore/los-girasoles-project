import React, {useState, createContext, useEffect} from 'react';

import { addItemToCart, removeItemFromCart, filterItemFromCart, getCartItemsCount, getCartTotal } from './cart.utils';

export const CartContext = createContext({
    cartItemsCount: 0,
    cartTotal: 0,
    cartItems: [],
    addItem: () => {},
    removeItem: () => {},
    clearItemFromCart: () => {},
});

const CartProvider = ({children}) => {

    const [cartItems, setCartItems] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);
    const [cartItemsCount, setCartItemsCount] = useState(0);

    const addItem = (item) => {
        setCartItems(addItemToCart(cartItems, item))
    }

    const removeItem = (item) => {
        setCartTotal(removeItemFromCart(cartItems, item))
    }

    const clearItemFromCart = (item) => {
        setCartItemsCount(filterItemFromCart(cartItems, item))
    }

    useEffect(() => {
        setCartItemsCount(getCartItemsCount(cartItems));
        setCartTotal(getCartTotal(cartItems));
      }, [cartItems]);

    return (
        <CartContext.Provider value={{
            cartItems,
            cartTotal,
            cartItemsCount,
            addItem,
            removeItem,
            clearItemFromCart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;